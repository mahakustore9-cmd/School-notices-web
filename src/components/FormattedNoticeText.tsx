import React, { useState } from "react";
import { 
  AlertCircle, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Copy, 
  Check, 
  FileText, 
  ShieldCheck, 
  Tag, 
  Bookmark,
  Bell,
  Info,
  Layers,
  MapPin
} from "lucide-react";

interface FormattedNoticeTextProps {
  rawText: string;
  category?: string;
  date?: string;
  title?: string;
  compact?: boolean;
}

export const FormattedNoticeText: React.FC<FormattedNoticeTextProps> = ({
  rawText,
  category = "General",
  date,
  title,
  compact = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState<"normal" | "large" | "extra">("normal");

  const handleCopy = () => {
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReadAloud = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(rawText);
    
    // Check if Hindi text
    if (/[\u0900-\u097F]/.test(rawText)) {
      utterance.lang = "hi-IN";
    } else {
      utterance.lang = "en-IN";
    }
    
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  // Analyze text for alert keywords
  const isUrgent = /urgent|emergency|alert|closed|closure|holiday|postponed|cancelled|attention|avkaash|chutti|बंद|अवकाश|स्थगित/i.test(rawText);
  const isExam = /exam|examination|test|datesheet|marks|result|admit card|pariksha|परीक्षा/i.test(rawText);
  const isEvent = /sports|annual|function|celebration|competition|meet|fest|cultural|आयोजन/i.test(rawText);
  const isFeeOrAdmission = /fee|dues|payment|admission|enrollment|registration|शुल्क|प्रवेश/i.test(rawText);

  // Split lines into structured visual segments
  const lines = rawText.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);

  // Helper to highlight key entities in text with colorful pills
  const renderHighlightedText = (text: string) => {
    // Regex matching dates, timings, key terms
    const regex = /\b(today|tomorrow|yesterday|monday|tuesday|wednesday|thursday|friday|saturday|sunday|school closed|closed|holiday|urgent|roster|exam|exams|admissions?|fees?|compulsory|mandatory|am|pm|\d{1,2}(?:st|nd|rd|th)?\s+(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*|\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})\b|([\u0900-\u097F]+)/gi;

    const parts = text.split(regex).filter(p => p !== undefined && p !== "");
    
    return parts.map((part, index) => {
      const lower = part.toLowerCase();
      
      if (/today|tomorrow|yesterday|monday|tuesday|wednesday|thursday|friday|saturday|sunday|\d{1,2}[\/\-]\d{1,2}/.test(lower)) {
        return (
          <span 
            key={index} 
            className="inline-flex items-center px-2 py-0.5 mx-1 rounded-md text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 shadow-xs"
          >
            📅 {part}
          </span>
        );
      }
      
      if (/closed|closure|holiday|chutti|अवकाश|बंद/.test(lower)) {
        return (
          <span 
            key={index} 
            className="inline-flex items-center px-2.5 py-0.5 mx-1 rounded-md text-xs font-black uppercase tracking-wide bg-rose-100 text-rose-800 border border-rose-300 shadow-xs animate-pulse"
          >
            ⚠️ {part}
          </span>
        );
      }

      if (/roster|schedule|timetable|timing|\b\d{1,2}:\d{2}\b|\bam\b|\bpm\b/.test(lower)) {
        return (
          <span 
            key={index} 
            className="inline-flex items-center px-2 py-0.5 mx-1 rounded-md text-xs font-bold bg-sky-100 text-sky-900 border border-sky-300 shadow-xs"
          >
            🕒 {part}
          </span>
        );
      }

      if (/urgent|mandatory|compulsory|attention|important|महत्वपूर्ण/.test(lower)) {
        return (
          <span 
            key={index} 
            className="inline-flex items-center px-2 py-0.5 mx-1 rounded-md text-xs font-bold bg-purple-100 text-purple-900 border border-purple-300 shadow-xs"
          >
            📌 {part}
          </span>
        );
      }

      if (/exam|examination|test|datesheet|marks|result|परीक्षा/.test(lower)) {
        return (
          <span 
            key={index} 
            className="inline-flex items-center px-2 py-0.5 mx-1 rounded-md text-xs font-bold bg-indigo-100 text-indigo-900 border border-indigo-300 shadow-xs"
          >
            📝 {part}
          </span>
        );
      }

      return <span key={index}>{part}</span>;
    });
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case "large":
        return "text-lg sm:text-xl leading-relaxed";
      case "extra":
        return "text-xl sm:text-2xl leading-relaxed";
      default:
        return "text-base sm:text-lg leading-relaxed";
    }
  };

  return (
    <div className="space-y-5">
      {/* Visual Control Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-gradient-to-r from-slate-50 via-blue-50/50 to-indigo-50/40 rounded-2xl border border-slate-200/90 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-extrabold uppercase tracking-wider text-slate-800 text-[11px] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Live Sync Verified
          </span>
          <span className="hidden sm:inline-block text-slate-300">|</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-slate-600 font-medium">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            Instant Update
          </span>
        </div>

        {/* Action Controls: Audio Readout, Font Adjustment, Copy */}
        <div className="flex items-center gap-2">
          {/* Text-to-speech Audio Reader */}
          <button
            onClick={handleReadAloud}
            title={isPlaying ? "Stop Audio Reader" : "Listen to Notice"}
            className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all shadow-xs ${
              isPlaying
                ? "bg-rose-600 text-white animate-pulse"
                : "bg-white hover:bg-blue-50 text-blue-700 border border-blue-200"
            }`}
          >
            {isPlaying ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-blue-600" />}
            <span className="text-[11px]">{isPlaying ? "Pause Audio" : "Listen"}</span>
          </button>

          {/* Font Size Adjuster */}
          <div className="hidden sm:flex items-center bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <button
              onClick={() => setFontSize("normal")}
              className={`px-2.5 py-1 text-[11px] font-bold transition-colors ${
                fontSize === "normal" ? "bg-blue-600 text-white" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              A
            </button>
            <button
              onClick={() => setFontSize("large")}
              className={`px-2.5 py-1 text-[12px] font-bold transition-colors ${
                fontSize === "large" ? "bg-blue-600 text-white" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              A+
            </button>
            <button
              onClick={() => setFontSize("extra")}
              className={`px-2.5 py-1 text-[13px] font-bold transition-colors ${
                fontSize === "extra" ? "bg-blue-600 text-white" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              A++
            </button>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 rounded-xl font-bold border border-slate-200 flex items-center gap-1.5 transition-colors shadow-xs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
            <span className="text-[11px]">{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
      </div>

      {/* Main Colorful Notice Canvas */}
      <div className="relative rounded-3xl overflow-hidden border-2 border-amber-300/80 shadow-xl bg-gradient-to-b from-[#FFFDF9] via-white to-[#F8FAFC]">
        {/* Top Rainbow/Gold Luxury Border Band */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-700 via-amber-500 via-rose-500 to-indigo-600" />

        {/* Official Header Crest Watermark */}
        <div className="p-6 sm:p-8 space-y-6 relative">
          
          {/* Subtle Institutional Watermark in background */}
          <div className="absolute right-6 top-8 opacity-[0.03] pointer-events-none select-none">
            <ShieldCheck className="w-64 h-64 text-slate-900" />
          </div>

          {/* Urgent / Notice Alert Banner if detected */}
          {isUrgent && (
            <div className="bg-gradient-to-r from-amber-500/15 via-rose-500/10 to-orange-500/15 border-2 border-amber-400/80 rounded-2xl p-4 sm:p-5 flex items-start gap-4 shadow-sm animate-in fade-in">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-rose-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <AlertCircle className="w-6 h-6 animate-pulse" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-600 text-white">
                    HIGH PRIORITY
                  </span>
                  <span className="text-xs font-bold text-amber-900">
                    Important Administrative Directive
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  Please review the operational schedule and notifications below. All concerned students, parents, and faculty are advised to note necessary arrangements.
                </p>
              </div>
            </div>
          )}

          {/* Formatted Text Content Blocks */}
          <div className="space-y-4">
            {lines.length === 0 ? (
              <p className="text-slate-400 italic">No content available.</p>
            ) : (
              lines.map((line, idx) => {
                // Check if line is a Key-Value pair (e.g. Date: ..., Venue: ...)
                const kvMatch = line.match(/^([A-Za-z\u0900-\u097F\s]{2,20})\s*:\s*(.+)$/);
                
                if (kvMatch) {
                  const label = kvMatch[1].trim();
                  const value = kvMatch[2].trim();

                  return (
                    <div 
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center gap-2 p-3.5 bg-gradient-to-r from-blue-50/80 to-indigo-50/50 rounded-xl border border-blue-200/80 shadow-xs"
                    >
                      <span className="text-xs font-black uppercase tracking-wider text-blue-900 sm:w-36 shrink-0 flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5 text-blue-600" />
                        {label}:
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        {renderHighlightedText(value)}
                      </span>
                    </div>
                  );
                }

                // Check if line is a bullet or numbered list item
                const isBullet = /^[\-\*•–—]\s*(.+)$/.test(line);
                const isNumber = /^\d+[\.\)]\s*(.+)$/.test(line);

                if (isBullet || isNumber) {
                  const content = line.replace(/^([\-\*•–—]|\d+[\.\)])\s*/, "");
                  return (
                    <div 
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-white hover:bg-amber-50/40 rounded-xl border border-slate-200/80 transition-colors shadow-xs"
                    >
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-xs">
                        {isNumber ? line.match(/^\d+/)?.[0] : "✓"}
                      </div>
                      <div className={`text-slate-800 ${getFontSizeClass()}`}>
                        {renderHighlightedText(content)}
                      </div>
                    </div>
                  );
                }

                // Primary Highlight Card for Main Body Paragraphs
                return (
                  <div 
                    key={idx}
                    className="p-5 sm:p-6 bg-white/95 rounded-2xl border border-slate-200/90 shadow-sm relative group hover:border-amber-300 transition-all"
                  >
                    <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-gradient-to-b from-amber-400 via-rose-400 to-indigo-600 rounded-r-full" />
                    <p className={`text-slate-800 pl-3 font-medium ${getFontSizeClass()}`}>
                      {renderHighlightedText(line)}
                    </p>
                  </div>
                );
              })
            )}
          </div>

          {/* Colorful Summary Chips / Key Points Matrix */}
          <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-900 border border-blue-200 flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5 text-blue-700" />
                Category: {category}
              </span>

              {date && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-200 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                  Dated: {date}
                </span>
              )}

              <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-900 border border-purple-200 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
                Ref: SPS/ADMIN/2026-N
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Official Stamped &bull; Registrar Secretariat</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
