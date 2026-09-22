import React from "react";
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Heart,
  Bell,
  ArrowUp,
  Lock,
  FileText
} from "lucide-react";

interface FooterProps {
  onOpenNotice: () => void;
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenNotice, onOpenGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: School Branding & Motto */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight font-serif block">
                  SMART SCHOOL
                </span>
                <span className="text-[11px] text-slate-400 font-medium tracking-wider uppercase">
                  CBSE Affiliation No. 2130894 &bull; School Code: 54123
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Dedicated to academic brilliance, moral integrity, experiential STEAM learning, and complete community transparency through our centralized digital communications network.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenNotice}
                className="px-3.5 py-2 rounded-xl bg-blue-900/60 hover:bg-blue-800 text-blue-200 border border-blue-700/50 text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <Bell className="w-3.5 h-3.5 text-amber-400" />
                <span>View Latest Circular</span>
              </button>

              <button
                onClick={onOpenGuide}
                className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                title="Administrative Console"
              >
                <Lock className="w-3 h-3 text-slate-500" />
                <span>Admin Console</span>
              </button>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About School &amp; Vision</a></li>
              <li><a href="#principal" className="hover:text-white transition-colors">Principal's Desk</a></li>
              <li><a href="#academics" className="hover:text-white transition-colors">Curriculum &amp; Wings</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">Campus Facilities</a></li>
              <li><a href="#notice-board" className="hover:text-white transition-colors text-amber-400 font-semibold">Central Notice Board</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Admission Enquiry</a></li>
            </ul>
          </div>

          {/* Col 4: Important Portals */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Information Hub</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#notice-board" className="hover:text-white transition-colors">Exam Timetables &amp; CCE</a></li>
              <li><a href="#notice-board" className="hover:text-white transition-colors">Holiday Calendar 2026-27</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">Bus Transportation Routes</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Code of Conduct &amp; Ethics</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Grievance &amp; POSH Cell</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Parent-Teacher Association</a></li>
            </ul>
          </div>

          {/* Col 5: Emergency Helplines */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Helplines &amp; Support</h4>
            <div className="space-y-2.5 text-slate-400">
              <div>
                <span className="text-slate-200 font-semibold block">Admissions Cell:</span>
                <span>+91 98765 43210</span>
              </div>
              <div>
                <span className="text-slate-200 font-semibold block">Transport Incharge:</span>
                <span>+91 98765 43211</span>
              </div>
              <div>
                <span className="text-slate-200 font-semibold block">Student Counselor:</span>
                <span>counselor@smartschool.edu.in</span>
              </div>
              <div>
                <span className="text-slate-200 font-semibold block">Visiting Hours:</span>
                <span>Mon-Sat 8:00 AM - 3:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Smart Public School. All rights reserved. Official Institutional Digital Portal &bull; Affiliated to Central Board of Secondary Education.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors border border-slate-800"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
