import { NoticeItem, NoticeResponse } from "../types";

export const DEFAULT_DOC_ID = "1-Ae1jPyupz2F3c0RvRn83ut3C6BUabUisj6-2uKuQ98";
export const GOOGLE_DOC_URL = `https://docs.google.com/document/d/${DEFAULT_DOC_ID}/edit?usp=drivesdk`;

const STORAGE_KEY_CUSTOM_DOC_ID = "smart_school_doc_id";
const STORAGE_KEY_CUSTOM_GAS_URL = "smart_school_gas_url";

export function getSavedDocId(): string {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(STORAGE_KEY_CUSTOM_DOC_ID);
    if (saved && saved.trim().length > 5) return saved.trim();
  }
  return DEFAULT_DOC_ID;
}

export function saveDocId(docId: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY_CUSTOM_DOC_ID, docId.trim());
  }
}

export function getSavedGasUrl(): string {
  if (typeof window !== "undefined") {
    return localStorage.getItem(STORAGE_KEY_CUSTOM_GAS_URL) || "";
  }
  return "";
}

export function saveGasUrl(url: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY_CUSTOM_GAS_URL, url.trim());
  }
}

/**
 * Parses raw text from a Google Doc into structured notices.
 * Handles single-line notices, multi-paragraph notices, Hindi and English Unicode.
 */
export function parseClientNoticeText(rawText: string, docId: string): NoticeResponse {
  const cleaned = rawText.replace(/^\uFEFF/, "").trim();
  const hasHindi = /[\u0900-\u097F]/.test(cleaned);

  if (!cleaned) {
    return {
      success: true,
      docId,
      docUrl: `https://docs.google.com/document/d/${docId}/edit?usp=drivesdk`,
      fetchedAt: new Date().toISOString(),
      rawContent: "",
      title: hasHindi ? "विद्यालय सूचना" : "School Notice Board",
      notices: [],
      totalCount: 0,
      hasHindi,
    };
  }

  const lines = cleaned.split(/\r?\n/).map((l) => l.trim()).filter((l) => l.length > 0);
  
  // Check notice blocks separated by delimiters
  const noticeBlocks: string[][] = [];
  let currentBlock: string[] = [];

  for (const line of lines) {
    if (/^(---+|===+|\*\*\*+|___+|###|Notice\s*\d+:?|सूचना\s*\d+:?)/i.test(line)) {
      if (currentBlock.length > 0) {
        noticeBlocks.push(currentBlock);
        currentBlock = [];
      }
      const stripped = line.replace(/^(---+|===+|\*\*\*+|___+|###)\s*/, "").trim();
      if (stripped.length > 0) currentBlock.push(stripped);
    } else {
      currentBlock.push(line);
    }
  }
  if (currentBlock.length > 0) noticeBlocks.push(currentBlock);

  const notices: NoticeItem[] = [];

  noticeBlocks.forEach((blockLines, idx) => {
    if (blockLines.length === 0) return;
    const firstLine = blockLines[0];
    const restLines = blockLines.slice(1);

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
      id: `notice-${idx + 1}`,
      title: titleText,
      body: bodyText,
      date: noticeDate,
      category,
      important,
    });
  });

  return {
    success: true,
    docId,
    docUrl: `https://docs.google.com/document/d/${docId}/edit?usp=drivesdk`,
    fetchedAt: new Date().toISOString(),
    rawContent: cleaned,
    title: lines[0] || (hasHindi ? "विद्यालय सूचना" : "School Notice"),
    notices: notices.length > 0 ? notices : [
      {
        id: "notice-1",
        title: cleaned.slice(0, 50),
        body: cleaned,
        date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
        category: "General",
        important: false,
      }
    ],
    totalCount: notices.length || 1,
    hasHindi,
    source: "client_parsed",
  };
}

/**
 * Main fetch function:
 * 1. Tries local/Vercel server route `/api/notice`
 * 2. If user configured a Google Apps Script Web App URL, queries that
 * 3. Falls back gracefully with informative diagnostic details
 */
export async function fetchSchoolNotices(forceRefresh = false): Promise<NoticeResponse> {
  const docId = getSavedDocId();
  const gasUrl = getSavedGasUrl();

  // If user provided a custom Google Apps Script endpoint
  if (gasUrl) {
    try {
      const response = await fetch(gasUrl, { cache: forceRefresh ? "no-cache" : "default" });
      if (response.ok) {
        const data = await response.json();
        if (data.text || data.content) {
          return parseClientNoticeText(data.text || data.content, docId);
        }
        if (data.notices) {
          return {
            success: true,
            docId,
            docUrl: `https://docs.google.com/document/d/${docId}/edit?usp=drivesdk`,
            fetchedAt: new Date().toISOString(),
            rawContent: JSON.stringify(data),
            title: data.title || "School Notice Board",
            notices: data.notices,
            totalCount: data.notices.length,
            hasHindi: /[\u0900-\u097F]/.test(JSON.stringify(data)),
            source: "google_apps_script",
          };
        }
      }
    } catch (e) {
      console.warn("Google Apps Script fetch failed, falling back to /api/notice", e);
    }
  }

  // Primary: Express / Vercel API endpoint
  const url = `/api/notice?docId=${encodeURIComponent(docId)}${forceRefresh ? "&refresh=true" : ""}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.error || `Server returned HTTP ${res.status}`);
    }
    const data: NoticeResponse = await res.json();
    return data;
  } catch (error: any) {
    console.error("Notice fetch error:", error);
    throw error;
  }
}
