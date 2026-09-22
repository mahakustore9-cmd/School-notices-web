import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Bell, 
  Calendar, 
  Sparkles,
  AlertCircle,
  ShieldCheck,
  CheckCircle2,
  Building2,
  FileCheck
} from "lucide-react";
import { NoticeItem } from "../types";
import { FormattedNoticeText } from "./FormattedNoticeText";

interface NoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  notice: NoticeItem | null;
  docUrl: string;
  onOpenSettings?: () => void;
}

export const NoticeModal: React.FC<NoticeModalProps> = ({
  isOpen,
  onClose,
  notice,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !notice) return null;

  const handleCopy = () => {
    const textToCopy = `SMART PUBLIC SCHOOL - OFFICIAL CIRCULAR\nRef: SPS/CIRCULAR/2026-27\nTitle: ${notice.title}\nDate: ${notice.date}\nCategory: ${notice.category}\n\n${notice.body}\n\nBy Order:\nOffice of the Principal & Registrar\nSmart Public School`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Official Circular - ${notice.title}</title>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap');
              body { 
                font-family: 'Plus Jakarta Sans', 'Segoe UI', sans-serif; 
                padding: 40px; 
                color: #0f172a; 
                max-width: 800px; 
                margin: 0 auto; 
                line-height: 1.6; 
              }
              .letterhead { 
                text-align: center; 
                border-bottom: 2px solid #1e3a8a; 
                padding-bottom: 20px; 
                margin-bottom: 24px; 
              }
              .crest { 
                font-family: 'Cinzel', serif; 
                font-size: 26px; 
                font-weight: 700; 
                color: #0f172a; 
                letter-spacing: 1px;
                margin: 0; 
              }
              .affil { 
                font-size: 11px; 
                font-weight: 600; 
                color: #475569; 
                text-transform: uppercase; 
                letter-spacing: 1px;
                margin-top: 4px;
              }
              .motto { 
                font-size: 12px; 
                font-style: italic; 
                color: #92400e; 
                margin-top: 4px; 
              }
              .stamp-box { 
                display: inline-block; 
                background: #f8fafc; 
                color: #1e3a8a; 
                border: 1px solid #cbd5e1;
                padding: 4px 16px; 
                border-radius: 4px; 
                font-size: 12px; 
                font-weight: 700; 
                letter-spacing: 1px;
                margin-top: 12px; 
              }
              .meta-row { 
                display: flex; 
                justify-content: space-between; 
                margin-bottom: 24px; 
                color: #475569; 
                font-size: 13px; 
                border-bottom: 1px dashed #cbd5e1; 
                padding-bottom: 10px; 
              }
              .notice-heading { 
                font-size: 20px; 
                font-weight: 800; 
                color: #0f172a; 
                margin-bottom: 20px; 
                text-align: center;
                text-decoration: underline;
                text-underline-offset: 6px;
              }
              .notice-text { 
                font-size: 15px; 
                white-space: pre-wrap; 
                color: #1e293b; 
                line-height: 1.7; 
                text-align: justify;
                padding: 10px 0;
              }
              .signatures { 
                margin-top: 60px; 
                display: flex; 
                justify-content: space-between; 
                border-top: 1px solid #e2e8f0; 
                padding-top: 24px; 
              }
              .sig-block { 
                text-align: center; 
                font-size: 13px; 
                color: #334155; 
              }
              .sig-line { 
                width: 160px; 
                border-bottom: 1px solid #94a3b8; 
                margin-bottom: 8px; 
              }
              .seal-stamp {
                display: inline-block;
                border: 2px solid #047857;
                color: #047857;
                padding: 6px 12px;
                border-radius: 8px;
                font-size: 10px;
                font-weight: bold;
                text-transform: uppercase;
                letter-spacing: 1px;
              }
            </style>
          </head>
          <body>
            <div class="letterhead">
              <h1 class="crest">SMART PUBLIC SCHOOL</h1>
              <div class="affil">CBSE Affiliated Senior Secondary Institution &bull; Affiliation No. 2130894</div>
              <div class="motto">Excellence in Academics, Moral Integrity &amp; Innovation</div>
              <div class="stamp-box">OFFICIAL CENTRAL CIRCULAR</div>
            </div>
            
            <div class="meta-row">
              <span><strong>Ref:</strong> SPS/ADMIN/2026-N</span>
              <span><strong>Category:</strong> ${notice.category}</span>
              <span><strong>Dated:</strong> ${notice.date}</span>
            </div>

            <div class="notice-heading">${notice.title}</div>
            
            <div class="notice-text">${notice.body}</div>
            
            <div class="signatures">
              <div class="sig-block">
                <div class="sig-line"></div>
                <strong>Administrative Officer</strong><br>
                Smart Public School
              </div>
              
              <div class="seal-stamp">
                AUTHENTICATED &bull; VERIFIED DISPATCH
              </div>

              <div class="sig-block">
                <div class="sig-line"></div>
                <strong>Principal &amp; Director</strong><br>
                Smart Public School
              </div>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 300);
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "examinations":
        return "bg-purple-100 text-purple-900 border-purple-200";
      case "admissions":
        return "bg-emerald-100 text-emerald-900 border-emerald-200";
      case "holiday":
        return "bg-amber-100 text-amber-900 border-amber-200";
      case "sports & events":
        return "bg-rose-100 text-rose-900 border-rose-200";
      default:
        return "bg-blue-100 text-blue-900 border-blue-200";
    }
  };

  return (
    <AnimatePresence>
      <div 
        id="notice-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="notice-modal-card"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        >
          {/* Header Band */}
          <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 px-6 sm:px-8 py-5 text-white border-b border-blue-900">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-md">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold tracking-widest text-amber-300 uppercase flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Official Administrative Circular
                  </span>
                  <h3 className="text-lg font-bold font-serif text-white leading-tight">
                    Smart Public School &bull; Dispatch
                  </h3>
                </div>
              </div>

              <button
                id="close-notice-modal-btn"
                onClick={onClose}
                aria-label="Close Notice Popup"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
            {/* Meta Tags */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getCategoryColor(notice.category)}`}>
                  {notice.category}
                </span>
                {notice.important && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                    Priority Notice
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                <span>Date of Issue: {notice.date}</span>
              </div>
            </div>

            {/* Notice Title */}
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Ref No: SPS/REG/2026-N &bull; Academic Circular
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 leading-snug">
                {notice.title}
              </h2>
            </div>

            {/* Notice Content / Colorful Rich Text with Entity Highlighting & Speech */}
            <FormattedNoticeText
              rawText={notice.body}
              category={notice.category}
              date={notice.date}
              title={notice.title}
            />

            {/* Official Digital Seal (NO Google Docs text!) */}
            <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-2xl flex items-center justify-between text-xs text-emerald-900">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <FileCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold block">Digitally Certified Circular</span>
                  <span className="text-[11px] text-emerald-700">Issued under authority of Controller of Examinations &amp; Principal</span>
                </div>
              </div>
              <div className="hidden sm:block text-right text-[10px] font-mono text-emerald-800">
                STAMP ID: #SPS-2026-VERIFIED
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                id="copy-notice-btn"
                onClick={handleCopy}
                className="px-4 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm active:scale-95"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                <span>{copied ? "Copied to Clipboard!" : "Copy Text"}</span>
              </button>

              <button
                id="print-notice-btn"
                onClick={handlePrint}
                className="px-4 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm active:scale-95"
              >
                <Printer className="w-3.5 h-3.5 text-slate-500" />
                <span>Print Official Circular</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="dismiss-modal-btn"
                onClick={onClose}
                className="px-6 py-2 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-xl transition-all shadow-md shadow-blue-900/20 active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
