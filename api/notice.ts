// Vercel Serverless Function for /api/notice
// This allows 1-click deployment on Vercel
export default async function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const DEFAULT_DOC_ID = "1-Ae1jPyupz2F3c0RvRn83ut3C6BUabUisj6-2uKuQ98";
  const docId = req.query?.docId || DEFAULT_DOC_ID;

  try {
    const exportUrl = `https://docs.google.com/document/d/${docId}/export?format=txt`;
    const response = await fetch(exportUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (SmartSchool/1.0)",
        "Accept": "text/plain, text/html, */*",
      },
      redirect: "follow",
    });

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        docId,
        docUrl: `https://docs.google.com/document/d/${docId}/edit?usp=drivesdk`,
        error: `Failed to fetch from Google Docs (HTTP ${response.status})`,
        hint: "Please ensure the Google Doc sharing permission is set to 'Anyone with the link can view'.",
      });
    }

    const rawText = await response.text();
    const cleaned = rawText.replace(/^\uFEFF/, "").trim();
    const hasHindi = /[\u0900-\u097F]/.test(cleaned);

    const lines = cleaned.split(/\r?\n/).map((l: string) => l.trim()).filter((l: string) => l.length > 0);
    const dateStr = new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

    res.setHeader("Cache-Control", "s-maxage=30, stale-while-revalidate=60");
    return res.status(200).json({
      success: true,
      docId,
      docUrl: `https://docs.google.com/document/d/${docId}/edit?usp=drivesdk`,
      fetchedAt: new Date().toISOString(),
      rawContent: cleaned,
      title: lines[0] || (hasHindi ? "विद्यालय सूचना" : "School Notice"),
      notices: [
        {
          id: "doc-notice-1",
          title: lines.length > 1 ? lines[0] : (hasHindi ? "नवीनतम सूचना" : "Latest School Notice"),
          body: lines.length > 1 ? lines.slice(1).join("\n\n") : cleaned,
          date: dateStr,
          category: "General",
          important: false,
        }
      ],
      totalCount: 1,
      hasHindi,
      source: "google_docs_vercel",
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: err.message || "Failed to fetch document",
    });
  }
}
