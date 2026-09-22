import React from "react";
import { 
  UserCheck, 
  HeartHandshake, 
  ShieldCheck, 
  TrendingUp, 
  Target, 
  Globe, 
  GraduationCap, 
  Sprout, 
  Users, 
  Palette, 
  Trophy, 
  Landmark, 
  Leaf, 
  Heart, 
  Cpu, 
  CheckCircle2, 
  Award, 
  Layers, 
  Network, 
  Sparkles,
  BookOpen,
  Wifi,
  ChevronRight
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

export const ApproachAndCommunitySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ========================================================================= */}
        {/* 1. TOP BOX: "OUR APPROACH" (Exact Pill Bar from Screenshot 1 & 2)          */}
        {/* ========================================================================= */}
        <ScrollReveal direction="up" distance={25} duration={0.7}>
          <div className="bg-white rounded-3xl border border-amber-200/80 p-6 sm:p-10 shadow-xl shadow-amber-900/5">
            <div className="text-center mb-8">
              <h3 className="text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase">
                <span className="text-amber-600 font-serif">OUR</span>{" "}
                <span className="text-slate-950">APPROACH</span>
              </h3>
            </div>

            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 text-center">
              {/* 1. Student-Centric */}
              <StaggerItem>
                <div className="flex flex-col items-center space-y-3 group">
                  <div className="w-14 h-14 rounded-full bg-amber-50 border-2 border-amber-200/80 flex items-center justify-center text-amber-700 shadow-sm group-hover:scale-110 group-hover:bg-amber-100 transition-all">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                    Student-Centric
                  </span>
                </div>
              </StaggerItem>

              {/* 2. Inclusive */}
              <StaggerItem>
                <div className="flex flex-col items-center space-y-3 group">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border-2 border-emerald-200/80 flex items-center justify-center text-emerald-700 shadow-sm group-hover:scale-110 group-hover:bg-emerald-100 transition-all">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                    Inclusive
                  </span>
                </div>
              </StaggerItem>

              {/* 3. Secure */}
              <StaggerItem>
                <div className="flex flex-col items-center space-y-3 group">
                  <div className="w-14 h-14 rounded-full bg-blue-50 border-2 border-blue-200/80 flex items-center justify-center text-blue-700 shadow-sm group-hover:scale-110 group-hover:bg-blue-100 transition-all">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                    Secure &amp; Safe
                  </span>
                </div>
              </StaggerItem>

              {/* 4. Scalable */}
              <StaggerItem>
                <div className="flex flex-col items-center space-y-3 group">
                  <div className="w-14 h-14 rounded-full bg-orange-50 border-2 border-orange-200/80 flex items-center justify-center text-orange-700 shadow-sm group-hover:scale-110 group-hover:bg-orange-100 transition-all">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                    Scalable &amp; Modern
                  </span>
                </div>
              </StaggerItem>

              {/* 5. Outcome-Focused */}
              <StaggerItem>
                <div className="flex flex-col items-center space-y-3 group">
                  <div className="w-14 h-14 rounded-full bg-cyan-50 border-2 border-cyan-200/80 flex items-center justify-center text-cyan-700 shadow-sm group-hover:scale-110 group-hover:bg-cyan-100 transition-all">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                    Outcome-Focused
                  </span>
                </div>
              </StaggerItem>

              {/* 6. Interoperable & Reusable */}
              <StaggerItem>
                <div className="flex flex-col items-center space-y-3 group">
                  <div className="w-14 h-14 rounded-full bg-purple-50 border-2 border-purple-200/80 flex items-center justify-center text-purple-700 shadow-sm group-hover:scale-110 group-hover:bg-purple-100 transition-all">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                    Global Standards
                  </span>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* 2. COLORFUL 6-CARD GRID: "Educational Solutions for Every Section"       */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                Educational Solutions for Every Section of Society
              </h2>
              {/* Diamond ornament divider from screenshot */}
              <div className="flex items-center justify-center gap-2 pt-1">
                <div className="h-[1px] w-12 bg-amber-300" />
                <span className="text-amber-500 text-xs font-bold">◆</span>
                <div className="h-[1px] w-12 bg-amber-300" />
              </div>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Card 1: Students (Sky-Blue Pastel) */}
            <StaggerItem>
              <div className="bg-gradient-to-r from-sky-100/90 via-sky-50 to-blue-50/70 border border-sky-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden group h-full">
                <div className="flex items-start justify-between gap-4 z-10">
                  <div className="space-y-3 max-w-[65%]">
                    <div className="w-12 h-12 rounded-full bg-amber-100/90 border-2 border-amber-300 text-amber-800 flex items-center justify-center shadow-sm">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                        Students &amp; Scholars
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        CBSE academic rigor, competitive coaching (JEE/NEET/CUET), and interactive digital classrooms empowering lifelong curiosity.
                      </p>
                    </div>
                  </div>

                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-md shrink-0 border-2 border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80" 
                      alt="Students studying on laptop"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Card 2: Parents & Rural Communities / Environmental Stewardship (Mint Green Pastel) */}
            <StaggerItem>
              <div className="bg-gradient-to-r from-emerald-100/90 via-emerald-50 to-teal-50/70 border border-emerald-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden group h-full">
                <div className="flex items-start justify-between gap-4 z-10">
                  <div className="space-y-3 max-w-[65%]">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 border-2 border-emerald-300 text-emerald-800 flex items-center justify-center shadow-sm">
                      <Sprout className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                        Parents &amp; Rural Communities
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        Bridge for rural and urban learners, community outreach camps, parent-teacher collaboration, and accessible scholarship schemes.
                      </p>
                    </div>
                  </div>

                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-md shrink-0 border-2 border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=400&q=80" 
                      alt="Community engagement"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Card 3: Women & Children / Foundational Wing (Pastel Rose/Pink) */}
            <StaggerItem>
              <div className="bg-gradient-to-r from-rose-100/90 via-rose-50 to-pink-50/70 border border-rose-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden group h-full">
                <div className="flex items-start justify-between gap-4 z-10">
                  <div className="space-y-3 max-w-[65%]">
                    <div className="w-12 h-12 rounded-full bg-rose-100 border-2 border-rose-300 text-rose-800 flex items-center justify-center shadow-sm">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                        Early Childhood &amp; Girls Education
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        Safe foundational learning spaces, special girl-child scholarships, gender-neutral mentorship, and play-based foundational literacy.
                      </p>
                    </div>
                  </div>

                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-md shrink-0 border-2 border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80" 
                      alt="Mother and child learning"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Card 4: Artisans & Entrepreneurs / STEAM Innovation (Pastel Warm Amber) */}
            <StaggerItem>
              <div className="bg-gradient-to-r from-amber-100/90 via-amber-50 to-yellow-50/70 border border-amber-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden group h-full">
                <div className="flex items-start justify-between gap-4 z-10">
                  <div className="space-y-3 max-w-[65%]">
                    <div className="w-12 h-12 rounded-full bg-amber-100 border-2 border-amber-300 text-amber-800 flex items-center justify-center shadow-sm">
                      <Palette className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                        Creatives, STEAM &amp; Artisans
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        Atal Tinkering Lab, robotics kits, pottery, fine arts, and vocational entrepreneurship preparing students for emerging design industries.
                      </p>
                    </div>
                  </div>

                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-md shrink-0 border-2 border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80" 
                      alt="Creative arts and crafts"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Card 5: Youth & Sports Champions (Pastel Lavender/Purple) */}
            <StaggerItem>
              <div className="bg-gradient-to-r from-purple-100/90 via-purple-50 to-indigo-50/70 border border-purple-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden group h-full">
                <div className="flex items-start justify-between gap-4 z-10">
                  <div className="space-y-3 max-w-[65%]">
                    <div className="w-12 h-12 rounded-full bg-purple-100 border-2 border-purple-300 text-purple-800 flex items-center justify-center shadow-sm">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                        Youth Leadership &amp; Athletics
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        Olympic-standard sports complexes, Model United Nations, NCC, scouting, and student council governance shaping resilient future leaders.
                      </p>
                    </div>
                  </div>

                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-md shrink-0 border-2 border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80" 
                      alt="Youth leadership"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Card 6: Government & Public Institutions (Pastel Ice-Blue) */}
            <StaggerItem>
              <div className="bg-gradient-to-r from-blue-100/90 via-indigo-50 to-sky-50/70 border border-blue-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden group h-full">
                <div className="flex items-start justify-between gap-4 z-10">
                  <div className="space-y-3 max-w-[65%]">
                    <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-blue-300 text-blue-800 flex items-center justify-center shadow-sm">
                      <Landmark className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                        Accreditation &amp; Governance
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        Complete CBSE affiliation compliance, strict safety &amp; child protection audits, transparent governance, and verified circulars.
                      </p>
                    </div>
                  </div>

                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-md shrink-0 border-2 border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=400&q=80" 
                      alt="Institutional governance"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>

        {/* ========================================================================= */}
        {/* 3. "AREAS OF WORK" (5 Vertical Pastel Pill Cards from Screenshot 1)        */}
        {/* ========================================================================= */}
        <div className="space-y-8 pt-4">
          <ScrollReveal direction="up" distance={20}>
            <div className="text-center space-y-2">
              <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 font-bold">
                Areas of <span className="text-amber-600 italic">Excellence</span>
              </h3>
              {/* Diamond ornament */}
              <div className="flex items-center justify-center gap-2 pt-1">
                <div className="h-[1px] w-12 bg-amber-300" />
                <span className="text-amber-500 text-xs font-bold">◆</span>
                <div className="h-[1px] w-12 bg-amber-300" />
              </div>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            
            {/* 1. Education & Research (Peach) */}
            <StaggerItem>
              <div className="bg-[#FFF5ED] border border-[#FCE2D2] rounded-3xl p-6 flex flex-col items-center text-center space-y-4 shadow-sm hover:shadow-md transition-all group h-full">
                <div className="w-14 h-14 rounded-full bg-[#FFE3D1] text-[#9A3412] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                  Education, Research &amp; Capacity Building
                </h4>
              </div>
            </StaggerItem>

            {/* 2. Eco & Sustainability (Mint Green) */}
            <StaggerItem>
              <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-3xl p-6 flex flex-col items-center text-center space-y-4 shadow-sm hover:shadow-md transition-all group h-full">
                <div className="w-14 h-14 rounded-full bg-[#DCFCE7] text-[#166534] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  <Leaf className="w-7 h-7" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                  Eco-Green Campus &amp; Life Skill Empowerment
                </h4>
              </div>
            </StaggerItem>

            {/* 3. Social Development & Welfare (Sky Blue) */}
            <StaggerItem>
              <div className="bg-[#F0F9FF] border border-[#E0F2FE] rounded-3xl p-6 flex flex-col items-center text-center space-y-4 shadow-sm hover:shadow-md transition-all group h-full">
                <div className="w-14 h-14 rounded-full bg-[#E0F2FE] text-[#075985] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  <Heart className="w-7 h-7" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                  Holistic Well-being &amp; Student Counselor Desk
                </h4>
              </div>
            </StaggerItem>

            {/* 4. Digital Infrastructure (Lavender) */}
            <StaggerItem>
              <div className="bg-[#FAF5FF] border border-[#F3E8FF] rounded-3xl p-6 flex flex-col items-center text-center space-y-4 shadow-sm hover:shadow-md transition-all group h-full">
                <div className="w-14 h-14 rounded-full bg-[#F3E8FF] text-[#6B21A8] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  <Cpu className="w-7 h-7" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                  Digital Infrastructure &amp; Smart E-Learning
                </h4>
              </div>
            </StaggerItem>

            {/* 5. Citizen Engagement (Teal) */}
            <StaggerItem className="col-span-2 sm:col-span-1">
              <div className="bg-[#F0FDFA] border border-[#CCFBF1] rounded-3xl p-6 flex flex-col items-center text-center space-y-4 shadow-sm hover:shadow-md transition-all group h-full">
                <div className="w-14 h-14 rounded-full bg-[#CCFBF1] text-[#115E59] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  <UserCheck className="w-7 h-7" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                  Civic Character &amp; Global Citizenship
                </h4>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>

        {/* ========================================================================= */}
        {/* 4. INSTITUTIONAL DIGITAL INFRASTRUCTURE & ACCREDITATIONS (Screenshot 3)     */}
        {/* ========================================================================= */}
        <div className="space-y-12 pt-6">
          
          {/* Deep Navy Ribbon */}
          <ScrollReveal direction="up" distance={30} duration={0.8}>
            <div className="bg-[#0B1E3F] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-900">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-amber-300 shrink-0">
                  <Wifi className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                    Smart Digital Campus &amp; Real-Time Information Network
                  </h4>
                  <p className="text-xs sm:text-sm text-blue-200 mt-0.5">
                    High-Speed Fiber &bull; 24x7 Campus CCTV &bull; Verified Digital Circulars &bull; Biometric Attendance &bull; ERP Parent Portal
                  </p>
                </div>
              </div>

              <a
                href="#notice-board"
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold uppercase tracking-wider shrink-0 transition-transform active:scale-95 shadow-md flex items-center gap-1.5"
              >
                <span>View Official Circulars</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>

          {/* How School Supports Every Learner (4 White Cards with Blue Icons from Screenshot 3) */}
          <div className="space-y-6">
            <ScrollReveal direction="up" distance={20}>
              <div className="text-center space-y-1">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                  How Smart School Supports Every Learner
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-[1px] w-8 bg-amber-300" />
                  <span className="text-amber-500 text-xs font-bold">◆</span>
                  <div className="h-[1px] w-8 bg-amber-300" />
                </div>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              
              <StaggerItem>
                <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm text-center space-y-4 hover:border-blue-300 transition-colors h-full">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h5 className="text-sm font-bold text-slate-900 leading-snug">
                    Digital Enablement of NEP 2020 Modules
                  </h5>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Blended interactive learning, digital LMS, and experiential syllabus delivery.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm text-center space-y-4 hover:border-blue-300 transition-colors h-full">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <h5 className="text-sm font-bold text-slate-900 leading-snug">
                    Standardized National Curricular Evaluation
                  </h5>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Continuous and Comprehensive Evaluation (CCE) with transparent performance tracking.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm text-center space-y-4 hover:border-blue-300 transition-colors h-full">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h5 className="text-sm font-bold text-slate-900 leading-snug">
                    Modernized STEAM &amp; Robotics Ecosystem
                  </h5>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Hands-on IoT, 3D printing, AI logic workshops, and national innovation challenges.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm text-center space-y-4 hover:border-blue-300 transition-colors h-full">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                    <Network className="w-6 h-6" />
                  </div>
                  <h5 className="text-sm font-bold text-slate-900 leading-snug">
                    Integrated Student-Parent Portal
                  </h5>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Direct announcements, examination timetables, holiday schedules, and academic feedback.
                  </p>
                </div>
              </StaggerItem>

            </StaggerContainer>
          </div>

          {/* Key Recognitions & Official Accreditations (Logo/Badge Cards from Screenshot 3) */}
          <div className="space-y-6 pt-4">
            <ScrollReveal direction="up" distance={20}>
              <div className="text-center space-y-1">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                  Key Institutional Recognitions &amp; Affiliations
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-[1px] w-8 bg-amber-300" />
                  <span className="text-amber-500 text-xs font-bold">◆</span>
                  <div className="h-[1px] w-8 bg-amber-300" />
                </div>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              
              {/* 1. CBSE */}
              <StaggerItem>
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-blue-300 transition-all flex flex-col items-center text-center space-y-2 h-full">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs">
                    CBSE
                  </div>
                  <span className="text-xs font-bold text-slate-900">CBSE Affiliation</span>
                  <span className="text-[11px] text-slate-500">Affiliation No. 2130894</span>
                </div>
              </StaggerItem>

              {/* 2. Atal Tinkering Lab */}
              <StaggerItem>
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-amber-300 transition-all flex flex-col items-center text-center space-y-2 h-full">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs">
                    ATL
                  </div>
                  <span className="text-xs font-bold text-slate-900">Atal Tinkering Lab</span>
                  <span className="text-[11px] text-slate-500">NITI Aayog, Govt. of India</span>
                </div>
              </StaggerItem>

              {/* 3. British Council */}
              <StaggerItem>
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-indigo-300 transition-all flex flex-col items-center text-center space-y-2 h-full">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-xs">
                    BC
                  </div>
                  <span className="text-xs font-bold text-slate-900">International Dimension</span>
                  <span className="text-[11px] text-slate-500">British Council Certified</span>
                </div>
              </StaggerItem>

              {/* 4. Fit India */}
              <StaggerItem>
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-emerald-300 transition-all flex flex-col items-center text-center space-y-2 h-full">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    FIT
                  </div>
                  <span className="text-xs font-bold text-slate-900">Fit India Movement</span>
                  <span className="text-[11px] text-slate-500">Ministry of Youth &amp; Sports</span>
                </div>
              </StaggerItem>

              {/* 5. Cambridge English */}
              <StaggerItem>
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-rose-300 transition-all flex flex-col items-center text-center space-y-2 h-full">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold text-xs">
                    CAM
                  </div>
                  <span className="text-xs font-bold text-slate-900">Cambridge English</span>
                  <span className="text-[11px] text-slate-500">Language Assessment Hub</span>
                </div>
              </StaggerItem>

            </StaggerContainer>
          </div>

        </div>

      </div>
    </section>
  );
};
