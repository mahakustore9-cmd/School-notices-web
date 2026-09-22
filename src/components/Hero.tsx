import React from "react";
import { 
  ArrowRight, 
  Bell, 
  Award, 
  Users, 
  BookOpen, 
  ShieldCheck, 
  Sparkles,
  ChevronRight
} from "lucide-react";
import { motion } from "motion/react";
import { NoticeItem } from "../types";

interface HeroProps {
  latestNotice: NoticeItem | null;
  onOpenNotice: () => void;
}

export const Hero: React.FC<HeroProps> = ({ latestNotice, onOpenNotice }) => {
  return (
    <section id="home" className="relative pt-6 pb-16 lg:py-20 bg-gradient-to-b from-white via-blue-50/20 to-slate-50 overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Live Announcement Marquee/Bar */}
        {latestNotice && (
          <div className="mb-8">
            <div 
              onClick={onOpenNotice}
              className="group cursor-pointer max-w-4xl mx-auto bg-white/90 backdrop-blur border border-blue-200/80 rounded-2xl p-2.5 sm:p-3 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-center gap-2.5 overflow-hidden">
                <span className="shrink-0 px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold tracking-wide uppercase text-[10px] flex items-center gap-1">
                  <Bell className="w-3 h-3 text-amber-300 animate-bounce" />
                  Latest Notice
                </span>
                <span className="font-semibold text-slate-800 truncate group-hover:text-blue-600 transition-colors">
                  {latestNotice.title} &mdash; <span className="font-normal text-slate-600">{latestNotice.body.slice(0, 80)}...</span>
                </span>
              </div>

              <span className="shrink-0 font-bold text-blue-600 flex items-center gap-1 text-[11px] group-hover:translate-x-0.5 transition-transform">
                Read Notice
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Admissions Open for Academic Session 2026-27</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-serif">
              Nurturing Minds, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-600">
                Building Global Leaders
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Smart Public School is a recognized centre of educational excellence, combining rigorous CBSE academics, state-of-the-art STEAM laboratories, holistic values, and real-time parent-school transparency.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#notice-board"
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2"
              >
                <Bell className="w-4 h-4 text-amber-300" />
                <span>Explore Notice Board</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-xl font-semibold text-sm transition-all shadow-sm flex items-center gap-2"
              >
                <span>Admission Process</span>
              </a>
            </div>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 max-w-lg mx-auto lg:mx-0">
              <div className="space-y-0.5 text-center lg:text-left">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-950 font-serif">25+</span>
                <p className="text-xs text-slate-500 font-medium">Years of Excellence</p>
              </div>
              <div className="space-y-0.5 text-center lg:text-left border-x border-slate-200 px-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-950 font-serif">100%</span>
                <p className="text-xs text-slate-500 font-medium">Board Pass Result</p>
              </div>
              <div className="space-y-0.5 text-center lg:text-left">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-950 font-serif">15:1</span>
                <p className="text-xs text-slate-500 font-medium">Student-Teacher Ratio</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual & School Campus Presentation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main School Building Graphic Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80"
                  alt="Smart School Modern Academic Campus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-blue-600 text-white uppercase tracking-wider inline-block mb-1.5">
                    Green Campus &bull; 15 Acres
                  </span>
                  <h3 className="text-base sm:text-lg font-bold leading-tight">
                    Smart Public School Campus
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Safe, eco-friendly, and technologically advanced learning environment
                  </p>
                </div>
              </div>

              {/* Floating Award / Accreditation Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 max-w-[240px]">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">
                    Ranked #1 School
                  </span>
                  <span className="text-[11px] text-slate-500">
                    in Academic &amp; Sports Innovation
                  </span>
                </div>
              </div>

              {/* Floating Parent / Student Shield */}
              <div className="hidden sm:flex absolute -top-5 -right-5 bg-white py-2.5 px-4 rounded-2xl shadow-lg border border-slate-100 items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-slate-900 block leading-tight">
                    CBSE Affiliated
                  </span>
                  <span className="text-[10px] text-slate-500">
                    Sr. Secondary 10+2
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
