import React, { useState } from "react";
import { 
  X, 
  Check, 
  Copy, 
  ExternalLink, 
  FileText, 
  Globe, 
  Code2, 
  UploadCloud, 
  ShieldCheck, 
  Settings2,
  AlertTriangle,
  RotateCw
} from "lucide-react";
import { getSavedDocId, saveDocId, getSavedGasUrl, saveGasUrl, DEFAULT_DOC_ID } from "../services/noticeService";

interface NoticeSetupGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDocUpdated: () => void;
}

export const NoticeSetupGuideModal: React.FC<NoticeSetupGuideModalProps> = ({
  isOpen,
  onClose,
  onDocUpdated,
}) => {
  const [activeTab, setActiveTab] = useState<"quick" | "sharing" | "gas" | "vercel">("quick");
  const [docInput, setDocInput] = useState(getSavedDocId());
  const [gasInput, setGasInput] = useState(getSavedGasUrl());
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSaveDocConfig = (e: React.FormEvent) => {
    e.preventDefault();
    // Extract doc ID if full link was pasted
    let cleanId = docInput.trim();
    const match = cleanId.match(/\/document\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      cleanId = match[1];
    }
    saveDocId(cleanId);
    saveGasUrl(gasInput);
    setDocInput(cleanId);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
    onDocUpdated();
  };

  const handleResetDefault = () => {
    saveDocId(DEFAULT_DOC_ID);
    saveGasUrl("");
    setDocInput(DEFAULT_DOC_ID);
    setGasInput("");
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
    onDocUpdated();
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const gasScriptCode = `// Google Apps Script for Smart School Notice Board
// 1. Open your Google Doc -> Extensions -> Apps Script
// 2. Paste this code and click 'Deploy' -> 'New deployment' -> Select type 'Web app'
// 3. Set 'Execute as: Me' and 'Who has access: Anyone'
// 4. Copy the resulting Web App URL and paste it in the website settings.

function doGet(e) {
  try {
    var docId = "${docInput || DEFAULT_DOC_ID}";
    var doc = DocumentApp.openById(docId);
    var body = doc.getBody();
    var fullText = body.getText();
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      text: fullText,
      updatedAt: new Date().toISOString()
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}`;

  return (
    <div 
      id="setup-guide-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="setup-guide-card"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
              <Settings2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Administrative Notice Portal Settings</h2>
              <p className="text-xs text-slate-400">Configure central publication feed, document sync, and cloud dispatch</p>
            </div>
          </div>

          <button 
            onClick={onClose}
            aria-label="Close setup guide"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 text-sm font-medium">
          <button
            onClick={() => setActiveTab("quick")}
            className={`py-3.5 px-4 border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === "quick" 
                ? "border-blue-600 text-blue-600 font-semibold" 
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            <FileText className="w-4 h-4" />
            Connected Document
          </button>
          <button
            onClick={() => setActiveTab("sharing")}
            className={`py-3.5 px-4 border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === "sharing" 
                ? "border-blue-600 text-blue-600 font-semibold" 
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            <Globe className="w-4 h-4" />
            Docs Permissions
          </button>
          <button
            onClick={() => setActiveTab("gas")}
            className={`py-3.5 px-4 border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === "gas" 
                ? "border-blue-600 text-blue-600 font-semibold" 
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            <Code2 className="w-4 h-4" />
            Apps Script API
          </button>
          <button
            onClick={() => setActiveTab("vercel")}
            className={`py-3.5 px-4 border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === "vercel" 
                ? "border-blue-600 text-blue-600 font-semibold" 
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            <UploadCloud className="w-4 h-4" />
            Vercel Deployment
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6 text-sm text-slate-700">
          {activeTab === "quick" && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs text-blue-900 leading-relaxed">
                  <strong>Zero-Code Live Sync:</strong> Your website reads notices directly from the Google Doc. You only need to type in your Google Doc, and visitors instantly see the updated notice!
                </div>
              </div>

              <form onSubmit={handleSaveDocConfig} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Current Google Doc ID / URL:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={docInput}
                      onChange={(e) => setDocInput(e.target.value)}
                      placeholder="e.g. 1-Ae1jPyupz2F3c0RvRn83ut3C6BUabUisj6-2uKuQ98"
                      className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-mono text-xs focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                    <a
                      href={`https://docs.google.com/document/d/${docInput}/edit?usp=drivesdk`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors shrink-0"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Open Doc
                    </a>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Supplied Document: <span className="font-mono text-slate-700">1-Ae1jPyupz2F3c0RvRn83ut3C6BUabUisj6-2uKuQ98</span>
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Optional Google Apps Script Web App URL (Fallback):
                  </label>
                  <input
                    type="url"
                    value={gasInput}
                    onChange={(e) => setGasInput(e.target.value)}
                    placeholder="https://script.google.com/macros/s/.../exec"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-mono text-xs focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Leave blank to use the built-in Express/Vercel server-side proxy.
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                    Save & Test Connection
                  </button>
                  <button
                    type="button"
                    onClick={handleResetDefault}
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium text-xs transition-colors"
                  >
                    Reset to Default Doc
                  </button>
                  {saveSuccess && (
                    <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                      <Check className="w-4 h-4" />
                      Saved and refreshed!
                    </span>
                  )}
                </div>
              </form>
            </div>
          )}

          {activeTab === "sharing" && (
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 text-base">
                How to set Google Docs Sharing Permissions for the Notice Board
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                For the website to fetch notices without requiring visitors to log in, the Google Doc must be accessible as read-only. Follow these 2 easy steps:
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">1</span>
                    Set General Access to "Anyone with the link"
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-600 space-y-1 ml-6">
                    <li>Open your Google Doc.</li>
                    <li>Click the blue <strong>"Share"</strong> button in the top-right corner.</li>
                    <li>Under <em>General access</em>, change <strong>"Restricted"</strong> to <strong>"Anyone with the link"</strong>.</li>
                    <li>Set the permission role to <strong>"Viewer"</strong> (do not select Editor).</li>
                    <li>Click <strong>"Done"</strong>.</li>
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">2</span>
                    (Optional Recommendation) Publish to the Web
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-600 space-y-1 ml-6">
                    <li>In Google Docs, click <strong>File &gt; Share &gt; Publish to web</strong>.</li>
                    <li>Click the <strong>"Publish"</strong> button.</li>
                    <li>This enables instant high-speed CDN caching on Google servers for massive traffic spikes.</li>
                  </ul>
                </div>

                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Security Notice:</strong> No service accounts, secret credentials, or write tokens are exposed. The website only uses standard read-only export mechanisms.
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "gas" && (
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 text-base">
                Google Apps Script Alternative (Zero-Cost Serverless API)
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                If you ever deploy to a static host (like GitHub Pages) that does not support a Node.js backend proxy, Google Apps Script allows you to create a free read-only REST API directly inside Google Docs.
              </p>

              <div className="relative bg-slate-900 text-slate-100 rounded-xl p-4 font-mono text-xs overflow-x-auto">
                <button
                  onClick={() => copyToClipboard(gasScriptCode, "gas")}
                  className="absolute top-3 right-3 px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-[11px] flex items-center gap-1 transition-colors"
                >
                  {copiedCode === "gas" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode === "gas" ? "Copied!" : "Copy Code"}</span>
                </button>
                <pre className="pr-16 leading-relaxed">{gasScriptCode}</pre>
              </div>

              <div className="text-xs text-slate-600 space-y-1">
                <p className="font-semibold text-slate-800">Deployment Steps in Google Docs:</p>
                <ol className="list-decimal list-inside space-y-0.5 ml-2">
                  <li>In Google Docs, go to <strong>Extensions &gt; Apps Script</strong>.</li>
                  <li>Replace existing code with the snippet above.</li>
                  <li>Click <strong>Deploy &gt; New deployment</strong>.</li>
                  <li>Select type: <strong>Web app</strong>.</li>
                  <li>Execute as: <strong>Me</strong>; Who has access: <strong>Anyone</strong>.</li>
                  <li>Paste the Web App URL in the "Connected Document" tab above.</li>
                </ol>
              </div>
            </div>
          )}

          {activeTab === "vercel" && (
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 text-base">
                How to Deploy Smart School Website on Vercel
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                This project is already pre-configured for Vercel with <code className="bg-slate-100 px-1 py-0.5 rounded text-blue-600 font-mono">vercel.json</code> and a serverless <code className="bg-slate-100 px-1 py-0.5 rounded text-blue-600 font-mono">/api/notice.ts</code> handler!
              </p>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="font-bold text-slate-900 block mb-1">Method 1: Deploy via GitHub (Recommended)</span>
                  <p>1. Push this project to your GitHub repository.</p>
                  <p>2. Log into <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">Vercel.com</a> and click <strong>"Add New Project"</strong>.</p>
                  <p>3. Select your repository. Vercel automatically detects Vite.</p>
                  <p>4. Click <strong>"Deploy"</strong>. The website and the Google Docs notice API will be live instantly!</p>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="font-bold text-slate-900 block mb-1">Method 2: Deploy via Vercel CLI</span>
                  <div className="bg-slate-900 text-slate-100 p-2.5 rounded font-mono text-[11px] my-1 flex justify-between items-center">
                    <code>npm i -g vercel && vercel</code>
                    <button 
                      onClick={() => copyToClipboard("npm i -g vercel && vercel", "cli")}
                      className="text-slate-400 hover:text-white"
                    >
                      {copiedCode === "cli" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <p>Follow the prompt instructions (defaults are all pre-configured).</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
