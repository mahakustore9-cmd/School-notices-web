import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Default Google Doc ID provided by the user
const DEFAULT_DOC_ID = "1-Ae1jPyupz2F3c0RvRn83ut3C6BUabUisj6-2uKuQ98";

// In-memory cache for fetched notices to minimize rate limits
let cachedNoticeData: any = null;
let lastFetchTime = 0;
const CACHE_TTL_MS = 30 * 1000; // 30 seconds cache

interface ParsedNotice {
  id: string;
  title: string;
  body: string;
  date: string;
  category: string;
  important: boolean;
}

function parseNoticeContent(rawText: string, docId: string) {
  // Clean BOM and trim
  const cleaned = rawText.replace(/^\uFEFF/, "").trim();
  
  if (!cleaned) {
    return {
      title: "Notice Board",
      notices: [],
      rawContent: "",
      isEmpty: true,
      hasHindi: false,
    };
  }

  // Detect Devanagari (Hindi) script: range \u0900-\u097F
  const hasHindi = /[\u0900-\u097F]/.test(cleaned);

  // Split into lines
  const lines = cleaned.split(/\r?\n/).map((l) => l.trim()).filter((l) => l.length > 0);

  // Check if there are multiple notice blocks (e.g. separated by lines like --- or ### or [Notice] or numbers 1., 2.)
  const noticeBlocks: string[][] = [];
  let currentBlock: string[] = [];

  for (const line of lines) {
    if (/^(---+|===+|\*\*\*+|___+|###|Notice\s*\d+:?|सूचना\s*\d+:?)/i.test(line)) {
      if (currentBlock.length > 0) {
        noticeBlocks.push(currentBlock);
        currentBlock = [];
      }
      // If line has content beyond separator
      const stripped = line.replace(/^(---+|===+|\*\*\*+|___+|###)\s*/, "").trim();
      if (stripped.length > 0) {
        currentBlock.push(stripped);
      }
    } else {
      currentBlock.push(line);
    }
  }
  if (currentBlock.length > 0) {
    noticeBlocks.push(currentBlock);
  }

  // Format parsed notices
  const notices: ParsedNotice[] = [];

  noticeBlocks.forEach((blockLines, idx) => {
    if (blockLines.length === 0) return;
    
    // First line is often title
    const firstLine = blockLines[0];
    const restLines = blockLines.slice(1);
    
    // Look for date in lines
    let noticeDate = "";
    const dateRegex = /(?:Date|Dated|दिनांक|तारिख|दि\.)\s*[:\-]?\s*([0-9A-Za-z\s,\/\-]+)/i;
    for (const l of blockLines) {
      const match = l.match(dateRegex);
      if (match) {
        noticeDate = match[1].trim();
        break;
      }
    }

    if (!noticeDate) {
      noticeDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }

    // Determine category and importance
    const fullBlockText = blockLines.join(" ");
    const important = /urgent|important|mandatory|attention|महत्वपूर्ण|अति आवश्यक/i.test(fullBlockText);
    
    let category = "General";
    if (/exam|test|datesheet|परीक्षा/i.test(fullBlockText)) category = "Examinations";
    else if (/admission|fee|enrollment|प्रवेश/i.test(fullBlockText)) category = "Admissions";
    else if (/holiday|vacation|closed|अवकाश|छुट्टी/i.test(fullBlockText)) category = "Holiday";
    else if (/sport|annual|meet|competition|खेल/i.test(fullBlockText)) category = "Sports & Events";
    else if (/academic|syllabus|class|पाठ्यक्रम/i.test(fullBlockText)) category = "Academics";

    const bodyText = restLines.length > 0 ? restLines.join("\n\n") : firstLine;
    let titleText = "";
    if (restLines.length > 0) {
      titleText = firstLine;
    } else if (firstLine.length <= 75) {
      titleText = firstLine;
    } else {
      const match = firstLine.match(/^([^.,;\n]{10,70})/);
      titleText = match ? match[1].trim() : firstLine.slice(0, 65).trim() + "...";
    }

    notices.push({
      id: `doc-notice-${idx + 1}`,
      title: titleText,
      body: bodyText,
      date: noticeDate,
      category,
      important,
    });
  });

  return {
    title: lines[0] || (hasHindi ? "विद्यालय सूचना पटल" : "School Notice Board"),
    notices: notices.length > 0 ? notices : [
      {
        id: "doc-notice-1",
        title: cleaned.slice(0, 50),
        body: cleaned,
        date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
        category: "General",
        important: false,
      }
    ],
    rawContent: cleaned,
    isEmpty: false,
    hasHindi,
    totalCount: notices.length || 1,
  };
}

// API Routes
app.use(express.json());

// Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "smart-school-api", time: new Date().toISOString() });
});

// Notice Fetch API
app.get("/api/notice", async (req, res) => {
  try {
    const docId = (req.query.docId as string) || DEFAULT_DOC_ID;
    const forceRefresh = req.query.refresh === "true" || req.query.refresh === "1";
    const now = Date.now();

    // Check cache if same docId and not force refresh
    if (!forceRefresh && cachedNoticeData && cachedNoticeData.docId === docId && (now - lastFetchTime < CACHE_TTL_MS)) {
      return res.json({
        ...cachedNoticeData,
        cached: true,
        cacheAgeMs: now - lastFetchTime,
      });
    }

    // Direct Google Docs Export URL
    // Format=txt directly downloads the plain text content when shared with view access
    const exportUrl = `https://docs.google.com/document/d/${docId}/export?format=txt`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    const docResponse = await fetch(exportUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/plain, text/html, application/xhtml+xml, */*",
        "Cache-Control": "no-cache",
      },
      redirect: "follow",
    });

    clearTimeout(timeoutId);

    if (!docResponse.ok) {
      // If 404 or 403 or redirect loop
      return res.status(docResponse.status).json({
        success: false,
        docId,
        docUrl: `https://docs.google.com/document/d/${docId}/edit?usp=drivesdk`,
        error: `Failed to fetch from Google Docs (HTTP ${docResponse.status})`,
        hint: "Please ensure the Google Doc sharing permission is set to 'Anyone with the link can view' or publish it via File > Share > Publish to web.",
        status: docResponse.status,
      });
    }

    const rawText = await docResponse.text();
    const parsed = parseNoticeContent(rawText, docId);

    const result = {
      success: true,
      docId,
      docUrl: `https://docs.google.com/document/d/${docId}/edit?usp=drivesdk`,
      fetchedAt: new Date().toISOString(),
      rawContent: parsed.rawContent,
      title: parsed.title,
      notices: parsed.notices,
      totalCount: parsed.totalCount,
      hasHindi: parsed.hasHindi,
      cached: false,
      source: "google_docs_live",
    };

    cachedNoticeData = result;
    lastFetchTime = now;

    return res.json(result);
  } catch (error: any) {
    console.error("Error fetching Google Docs notice:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Network error while connecting to Google Docs",
      hint: "Check your internet connection and verify that the Google Doc is shared with 'Anyone with the link can view'.",
    });
  }
});

// Start Server
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Smart School Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
