import React from "react";
import { Quote, Award, BookOpen, Heart, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const PrincipalSection: React.FC = () => {
  return (
    <section id="principal" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={30} duration={0.8}>
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Principal's Portrait & Credentials */}
              <div className="lg:col-span-5 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 p-8 sm:p-12 text-white flex flex-col justify-between relative">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    <span>Leadership Desk</span>
                  </div>

                  {/* Portrait Frame */}
                  <div className="relative mx-auto lg:mx-0 w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                      alt="Dr. Ananya Sharma - Principal of Smart School"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  </div>

                  <div className="space-y-1 text-center lg:text-left">
                    <h3 className="text-2xl font-bold font-serif text-white tracking-tight">
                      Dr. Ananya Sharma
                    </h3>
                    <p className="text-blue-200 text-sm font-medium">
                      Principal &amp; Educational Director
                    </p>
                    <p className="text-xs text-blue-300/80">
                      Ph.D. in Educational Pedagogy, M.Sc., B.Ed. &bull; 22+ Years in School Leadership
                    </p>
                  </div>
                </div>

                {/* Badges */}
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-blue-100">National Award for Academic Excellence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-blue-100">Author of 3 Educational Anthologies</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Message Content */}
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-blue-600">
                    <Quote className="w-10 h-10 rotate-180 opacity-40" />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-slate-900 tracking-tight leading-snug">
                    "Education is not merely filling a vessel, but lighting an eternal flame of inquiry and empathy."
                  </h2>

                  <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                    <p>
                      Dear Parents, Guardians, and Students,
                    </p>
                    <p>
                      Welcome to <strong>Smart School</strong>. As we navigate a rapidly transforming world, our commitment remains steadfast: to provide an educational experience that fosters intellectual brilliance while nurturing the quiet strengths of empathy, character, and integrity.
                    </p>
                    <p>
                      At Smart School, every child is recognized as an individual with unique passions. Our faculty is committed to creating safe, stimulating classrooms where questions are celebrated and mistakes are viewed as stepping stones to mastery.
                    </p>
                    <p>
                      In tune with modern communication, our <strong>Central Digital Notice Board &amp; Official Dispatch Portal</strong> ensures complete real-time transparency between school administration and parents. You can stay informed of every circular, holiday, and examination timetable without delay.
                    </p>
                    <p>
                      We warmly invite you to partner with us in shaping the remarkable leaders of tomorrow.
                    </p>
                  </div>
                </div>

                {/* Signature area */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="font-serif italic text-lg text-slate-900 font-bold block">
                      Dr. Ananya Sharma
                    </span>
                    <span className="text-xs text-slate-500">
                      Principal, Smart Public School
                    </span>
                  </div>

                  <div className="text-xs text-slate-400 font-medium italic">
                    "Satyam Vada, Dharmam Chara"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
