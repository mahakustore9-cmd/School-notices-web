import React, { useState } from "react";
import { 
  BookOpen, 
  Binary, 
  Palette, 
  Globe2, 
  FlaskConical, 
  GraduationCap, 
  Check, 
  ChevronRight
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const AcademicsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const programs = [
    {
      level: "Pre-Primary Wing",
      grades: "Nursery &bull; LKG &bull; UKG",
      subtitle: "Foundational Play-Way & Experiential Discovery",
      description: "Our early childhood curriculum fosters cognitive curiosity, motor coordination, phonetics, and social-emotional development through sensory exploration, storytelling, and Montessori-inspired activity hubs.",
      highlights: [
        "Play-based learning with thematic discovery corners",
        "Phonetic mastery and bilingual language immersion",
        "Sensory motor skill development & rhythm circles",
        "Low student-to-teacher ratio (10:1) with loving caretakers"
      ],
      color: "border-amber-400 bg-amber-50/50 text-amber-950",
      badge: "Early Years"
    },
    {
      level: "Primary School",
      grades: "Grades 1 to 5",
      subtitle: "Concept Formulation & Creative Foundations",
      description: "Building bedrock proficiency in literacy, numeracy, environmental sciences, and computational logic. Hands-on math labs and communicative language arts spark joyful discovery.",
      highlights: [
        "Interactive mathematics and mental arithmetic labs",
        "Reading circles & creative writing workshops",
        "Introductory coding through visual block programming",
        "Physical education, music, dance, and fine arts"
      ],
      color: "border-blue-500 bg-blue-50/50 text-blue-950",
      badge: "Foundational"
    },
    {
      level: "Middle School",
      grades: "Grades 6 to 8",
      subtitle: "Analytical Inquiry & Interdisciplinary STEAM",
      description: "Transitioning students towards analytical investigation in physics, chemistry, biology, history, geography, and foreign languages. Students participate in annual science symposiums and hackathons.",
      highlights: [
        "Integrated STEAM curriculum & robotics workshop",
        "Third language choice (Sanskrit, French, German)",
        "Model United Nations (MUN) and public oratory clubs",
        "Continuous and Comprehensive Evaluation (CCE)"
      ],
      color: "border-indigo-500 bg-indigo-50/50 text-indigo-950",
      badge: "Preparatory"
    },
    {
      level: "Senior & Senior Secondary",
      grades: "Grades 9 to 12 (10+2)",
      subtitle: "Academic Rigour, Streams & Career Pathways",
      description: "CBSE aligned specialized streams in Science (PCM/PCB), Commerce, and Humanities. Dedicated coaching cells mentor students for IIT-JEE, NEET, CLAT, CUET, and international university admissions.",
      highlights: [
        "Science (Medical / Non-Medical), Commerce, & Humanities",
        "Targeted mentoring for JEE, NEET, CUET & Olympiads",
        "Career guidance cell & international portfolio development",
        "Advanced placement labs & research projects"
      ],
      color: "border-emerald-500 bg-emerald-50/50 text-emerald-950",
      badge: "Higher Secondary"
    },
  ];

  return (
    <section id="academics" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal direction="up" distance={24}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <span>Academic Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
              Holistic Curriculum From Kindergarten to 10+2
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Affiliated to CBSE, New Delhi, our academic architecture pairs pedagogical rigor with 21st-century technological literacy and critical reasoning.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {programs.map((prog, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === idx
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <span>{prog.level}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                activeTab === idx ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
              }`}>
                {prog.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Program Showcase Card */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
                    {programs[activeTab].grades}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    CBSE Aligned Framework
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {programs[activeTab].level}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-blue-700">
                  {programs[activeTab].subtitle}
                </p>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {programs[activeTab].description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Program Highlights &amp; Key Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {programs[activeTab].highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Callout Box */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900 uppercase">Stream Inquiries</span>
                  <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    Open for 2026-27
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex justify-between py-1.5 border-b border-slate-50">
                    <span className="font-medium text-slate-500">Board Affiliation:</span>
                    <span className="font-bold text-slate-800">CBSE, New Delhi</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-50">
                    <span className="font-medium text-slate-500">Medium of Instruction:</span>
                    <span className="font-bold text-slate-800">English (Hindi Bilingual)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-50">
                    <span className="font-medium text-slate-500">Classroom Ratio:</span>
                    <span className="font-bold text-slate-800">Max 30 Students/Sec</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="font-medium text-slate-500">Digital Classroom:</span>
                    <span className="font-bold text-emerald-700">Interactive 4K Smart Panels</span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Apply for Admission</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
