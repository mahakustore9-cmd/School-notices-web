import React, { useState, useEffect } from "react";
import { 
  GraduationCap, 
  Bell, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ArrowRight,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { NoticeItem } from "../types";

interface NavbarProps {
  latestNotice: NoticeItem | null;
  onOpenNotice: () => void;
  onOpenGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  latestNotice,
  onOpenNotice,
  onOpenGuide,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About School", href: "#about" },
    { name: "Principal's Message", href: "#principal" },
    { name: "Academics", href: "#academics" },
    { name: "Facilities", href: "#facilities" },
    { name: "Notice Board", href: "#notice-board", isNotice: true },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Notification / Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>+91 98765 43210 / 011-2345678</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>admissions@smartschool.edu.in</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-slate-400">
              CBSE Affiliation No: <strong>2130894</strong>
            </span>
            {latestNotice && (
              <button
                onClick={onOpenNotice}
                className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                </span>
                <span className="truncate max-w-[200px] sm:max-w-xs">{latestNotice.title}</span>
                <span className="underline text-[11px]">View &rarr;</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        id="main-navbar"
        className={`w-full transition-all duration-200 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-md py-3.5" 
            : "bg-white py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* School Logo & Brand */}
            <a href="#home" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-blue-900 via-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-900/20 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-extrabold text-blue-950 tracking-tight font-serif">
                    SMART SCHOOL
                  </span>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 uppercase">
                    ESTD. 1998
                  </span>
                </div>
                <p className="text-[11px] font-medium text-slate-500 tracking-wider uppercase">
                  Excellence &bull; Character &bull; Innovation
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                    link.isNotice 
                      ? "text-blue-700 bg-blue-50/80 hover:bg-blue-100" 
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  {link.isNotice && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                    </span>
                  )}
                  {link.name}
                </a>
              ))}
            </div>

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Notice Bell Quick Modal Trigger */}
              <button
                id="header-notice-bell-btn"
                onClick={onOpenNotice}
                aria-label="View latest school notice"
                title="Latest School Notice"
                className="relative p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors border border-blue-200"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full ring-2 ring-white flex items-center justify-center text-[9px] font-bold text-white">
                  1
                </span>
              </button>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-600/20 transition-all flex items-center gap-1.5"
              >
                <span>Admission MukeshChaudhary</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenNotice}
                aria-label="Latest Notice"
                className="relative p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full ring-2 ring-white" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-2 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold ${
                  link.isNotice 
                    ? "bg-blue-50 text-blue-700 flex items-center justify-between" 
                    : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                <span>{link.name}</span>
                {link.isNotice && (
                  <span className="px-2 py-0.5 bg-blue-900 text-amber-300 text-[10px] rounded-full font-bold">
                    Live Circular
                  </span>
                )}
              </a>
            ))}

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenNotice();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center gap-2 border border-blue-200"
              >
                <Bell className="w-4 h-4 text-blue-600" />
                <span>View Latest Notice (Popup)</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1 text-center"
              >
                <span>Admission Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
