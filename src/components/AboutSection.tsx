import React from "react";
import { 
  Target, 
  Compass, 
  HeartHandshake, 
  Lightbulb, 
  CheckCircle2, 
  BookOpen, 
  Award,
  Globe2
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: "Academic Rigour & STEM",
      description: "Comprehensive CBSE curriculum paired with hands-on robotics, AI coding, and Olympiad mentoring.",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: Compass,
      title: "Character & Ethical Values",
      description: "Instilling timeless moral foundations, empathy, civic responsibility, and cultural pride in every student.",
      color: "from-indigo-600 to-purple-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Critical Thinking",
      description: "Encouraging curiosity, inquiry-led learning, project exhibitions, and creative problem solving.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: HeartHandshake,
      title: "Holistic Physical & Emotional Well-being",
      description: "Dedicated counselors, Olympic-grade sports, yoga, and performing arts for balanced growth.",
      color: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <ScrollReveal direction="up" distance={24}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <span>About Smart School</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
              Where Tradition Meets Modern Educational Excellence
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Established with a vision to provide world-class education rooted in deep moral values, Smart School nurtures independent thinkers, compassionate citizens, and visionary leaders.
            </p>
          </div>
        </ScrollReveal>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <ScrollReveal direction="right" distance={30} duration={0.8}>
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-blue-600/20 rounded-full blur-2xl" />
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-white/20 flex items-center justify-center text-amber-300 mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-white mb-3">Our Vision &bull; हमारी दृष्टि</h3>
              <p className="text-blue-100/90 text-base leading-relaxed mb-6 font-normal">
                To be an internationally recognized academic institution that inspires intellectual curiosity, ethical leadership, and technological fluency, empowering students to thrive and make meaningful contributions to society.
              </p>
              <ul className="space-y-2.5 text-xs text-blue-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cultivating global mindsets with proud cultural roots</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero-compromise on academic honesty and discipline</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" distance={30} duration={0.8}>
            <div className="bg-slate-50 border border-slate-200 p-8 sm:p-10 rounded-3xl shadow-sm relative overflow-hidden flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-slate-900 mb-3">Our Mission &bull; हमारा ध्येय</h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  To offer a vibrant, learner-centric ecosystem that integrates cutting-edge pedagogical tools, high-performing educators, and diverse co-curricular avenues to unlock every child's highest potential.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Individual attention with 15:1 student-teacher ratio</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Real-time digital transparency for parents via Central Official Notice Board</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* 4 Pillars of Excellence */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={idx}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all space-y-4 h-full">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.color} text-white flex items-center justify-center shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 leading-snug">{p.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
