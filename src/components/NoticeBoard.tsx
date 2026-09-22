import React, { useState } from "react";
import { 
  Bell, 
  RefreshCw, 
  Calendar, 
  AlertCircle, 
  CheckCircle2, 
  FileText, 
  ArrowRight,
  Sparkles,
  Sliders,
  Languages,
  ShieldCheck,
  Printer,
  Bookmark,
  Building2,
  Clock
} from "lucide-react";
import { NoticeItem, NoticeResponse } from "../types";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { FormattedNoticeText } from "./FormattedNoticeText";

interface NoticeBoardProps {
  noticeData: NoticeResponse | null;
  isLoading: boolean;
  error: string | null;
  lastUpdated: Date | null;
  onRefresh: () => void;
  onSelectNotice: (notice: NoticeItem) => void;
  onOpenGuide: () => void;
}

export const NoticeBoard: React.FC<NoticeBoardProps> = ({
  noticeData,
  isLoading,
  error,
  lastUpdated,
  onRefresh,
  onSelectNotice,
  onOpenGuide,
}) => {
  const [filter, setFilter] = useState<string>("all");

  const notices = noticeData?.notices || [];
  const latestNotice = notices.length > 0 ? notices[0] : null;

  const categories = ["all", "Examinations", "Admissions", "Holiday", "Sports & Events", "General"];

  const filteredNotices = filter === "all" 
    ? notices 
    : notices.filter((n) => n.category.toLowerCase() === filter.toLowerCase());

  const formatTimeAgo = (date: Date | null) => {
    if (!date) return "Just now";
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) return "Just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes === 1) return "1 min ago";
    if (minutes < 60) return `${minutes} mins ago`;
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const getCategoryBadgeClass = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "examinations":
        return "bg-purple-100 text-purple-900 border-purple-300";
      case "admissions":
        return "bg-emerald-100 text-emerald-900 border-emerald-300";
      case "holiday":
        return "bg-amber-100 text-amber-900 border-amber-300";
      case "sports & events":
        return "bg-rose-100 text-rose-900 border-rose-300";
      default:
        return "bg-blue-100 text-blue-900 border-blue-300";
    }
  };

  const getCategoryTopBorderClass = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "examinations":
        return "from-purple-500 to-indigo-600";
      case "admissions":
        return "from-emerald-500 to-teal-600";
      case "holiday":
        return "from-amber-500 via-rose-500 to-orange-500";
      case "sports & events":
        return "from-rose-500 to-pink-600";
      default:
        return "from-blue-600 to-indigo-700";
    }
  };

  return (
    <section id="notice-board" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-blue-50/20 to-white relative overflow-hidden">
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-10 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Official Institutional Dispatch &bull; Registrar Secretariat</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-serif">
              Central Notice Board
              <span className="block text-lg sm:text-xl font-sans font-medium text-slate-500 mt-2">
                केंद्रीय सूचना पटल &bull; Authenticated Circulars &bull; सत्र 2026-27
              </span>
            </h2>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              id="refresh-notices-btn"
              onClick={onRefresh}
              disabled={isLoading}
              title="Synchronize official notices with Central Registry"
              className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-800 hover:text-blue-700 border border-slate-300 rounded-xl font-bold text-xs transition-all shadow-sm flex items-center gap-2 disabled:opacity-60 active:scale-95"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-blue-600 ${isLoading ? "animate-spin" : ""}`} />
              <span>{isLoading ? "Synchronizing..." : "Sync Live Circulars"}</span>
              {lastUpdated && !isLoading && (
                <span className="text-[11px] font-medium text-slate-400 pl-1.5 border-l border-slate-200">
                  {formatTimeAgo(lastUpdated)}
                </span>
              )}
            </button>

            <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Digitally Authenticated</span>
            </div>

            {/* Discreet Admin Settings button */}
            <button
              id="open-setup-guide-btn"
              onClick={onOpenGuide}
              className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 rounded-xl transition-colors"
              title="Administrative Console Settings"
            >
              <Sliders className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none text-xs font-bold">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl capitalize shrink-0 transition-all ${
                filter === cat
                  ? "bg-blue-900 text-white shadow-md shadow-blue-900/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat === "all" ? "All Circulars" : cat}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && !noticeData && (
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200 shadow-xl text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
              <RefreshCw className="w-8 h-8 animate-spin" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Synchronizing with Official Registry...</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mt-1">
                Fetching the latest authenticated administrative dispatches and student circulars.
              </p>
            </div>
          </div>
        )}

        {/* Error State (hidden google docs details) */}
        {error && !noticeData && (
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-rose-200 shadow-lg space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">Notice Board Connection Standby</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Connecting to the central academic publication repository.
                </p>
                <div className="pt-2">
                  <button
                    onClick={onRefresh}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md transition-colors"
                  >
                    Retry Connection
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Active Notice Content */}
        {noticeData && (
          <div className="space-y-8">
            {/* Featured Notice Banner */}
            {latestNotice ? (
              <div className="bg-white rounded-3xl border border-blue-100 shadow-2xl shadow-blue-900/10 overflow-hidden transition-all hover:border-blue-300">
                
                {/* Rich Top Bar with Royal Navy and Gold accents */}
                <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 p-6 sm:p-8 text-white relative">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-amber-400">
                        <Bell className="w-6 h-6 animate-pulse" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-400 text-slate-950">
                            OFFICIAL NOTIFICATION
                          </span>
                          <span className="text-xs text-blue-200 flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            Office of the Registrar
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-1">
                          {latestNotice.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        id="view-featured-notice-btn"
                        onClick={() => onSelectNotice(latestNotice)}
                        className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-400/20 transition-transform active:scale-95 flex items-center gap-2"
                      >
                        <Bell className="w-4 h-4" />
                        <span>View Full Circular</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Notice Text Preview Area */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                        <Calendar className="w-3.5 h-3.5 text-blue-600" />
                        {latestNotice.date}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 font-bold border border-blue-100">
                        {latestNotice.category}
                      </span>
                      {noticeData.hasHindi && (
                        <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-100 flex items-center gap-1">
                          <Languages className="w-3 h-3" />
                          Hindi &bull; हिंदी
                        </span>
                      )}
                    </div>

                    <div className="text-slate-400 text-[11px] font-mono flex items-center gap-1.5">
                      <Building2 className="w-3 h-3 text-slate-400" />
                      <span>REF: SPS/ADMIN/2026-N</span>
                    </div>
                  </div>

                  {/* Formatted colorful body */}
                  <FormattedNoticeText
                    rawText={latestNotice.body}
                    category={latestNotice.category}
                    date={latestNotice.date}
                    title={latestNotice.title}
                  />

                  {/* Bottom Verification Seal */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Official communication authorized by the Principal and Controller of Examinations</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        id="read-full-notice-cta-btn"
                        onClick={() => onSelectNotice(latestNotice)}
                        className="px-4 py-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-md"
                      >
                        <span>Open Official Document</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Empty state */
              <div className="bg-white rounded-3xl p-12 border border-slate-200 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">No Active Circulars</h3>
                  <p className="text-sm text-slate-500 max-w-md mx-auto mt-1">
                    There are no new notifications posted at this time. Please check back later.
                  </p>
                </div>
              </div>
            )}

            {/* If doc contains multiple notices */}
            {filteredNotices.length > 1 && (
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold font-serif text-slate-900">Previous Circulars &amp; Archives</h4>
                  <span className="text-xs text-slate-500">{filteredNotices.length} notifications</span>
                </div>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredNotices.map((item) => (
                    <StaggerItem key={item.id}>
                      <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all flex flex-col justify-between group h-full">
                        {/* Top Colorful Accent Strip */}
                        <div className={`h-2 w-full bg-gradient-to-r ${getCategoryTopBorderClass(item.category)}`} />

                        <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-xs">
                              <span className={`px-2.5 py-1 rounded-full font-bold border ${getCategoryBadgeClass(item.category)}`}>
                                {item.category}
                              </span>
                              <span className="text-slate-400 font-medium">{item.date}</span>
                            </div>
                            <h5 className="font-bold font-serif text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 leading-snug text-base">
                              {item.title}
                            </h5>
                            <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                              {item.body}
                            </p>
                          </div>

                          <div className="pt-2">
                            <button
                              onClick={() => onSelectNotice(item)}
                              className="w-full py-2.5 px-3 bg-slate-50 group-hover:bg-blue-50 text-slate-700 group-hover:text-blue-700 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 border border-slate-200/80 shadow-xs"
                            >
                              <Bell className="w-3.5 h-3.5 text-blue-600" />
                              <span>View Circular</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            )}

          </div>
        )}
      </div>
    </section>
  );
};
