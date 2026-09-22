import React from "react";
import { 
  Laptop, 
  FlaskRound as Flask, 
  BookOpen, 
  Trophy, 
  Bus, 
  Utensils, 
  Activity, 
  ShieldCheck,
  Check
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

export const FacilitiesSection: React.FC = () => {
  const facilities = [
    {
      icon: Laptop,
      title: "Smart Digital Classrooms",
      titleHi: "स्मार्ट डिजिटल कक्षाएं",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
      description: "Equipped with interactive 4K touch displays, multimedia audio, and cloud-synced curriculum content to make learning participatory and vivid.",
      features: ["Interactive 75-inch 4K panels", "Ergonomic furniture", "Natural lighting & climate control"]
    },
    {
      icon: Flask,
      title: "Advanced Science & STEAM Labs",
      titleHi: "आधुनिक विज्ञान प्रयोगशालाएं",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      description: "Specialized Physics, Chemistry, and Biology laboratories compliant with national safety guidelines, providing hands-on experimental validation.",
      features: ["Individual experiment workstations", "Certified safety apparatus", "Digital sensor probes"]
    },
    {
      icon: BookOpen,
      title: "Knowledge Hub & Central Library",
      titleHi: "समृद्ध केंद्रीय पुस्तकालय",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
      description: "A tranquil sanctuary housing over 25,000 physical volumes, encyclopedias, bilingual literature, Kindle e-readers, and academic periodicals.",
      features: ["25,000+ curated books", "High-speed digital catalogue", "Quiet reading alcoves"]
    },
    {
      icon: Trophy,
      title: "Sports Complex & Athletic Grounds",
      titleHi: "विशाल खेल परिसर",
      image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80",
      description: "Sprawling grass football ground, international standard basketball court, cricket practice nets, synthetic badminton arenas, and martial arts dojo.",
      features: ["Full-sized football pitch", "Dedicated cricket nets", "NIS-certified coaches"]
    },
    {
      icon: Bus,
      title: "GPS-Tracked Safe Transport",
      titleHi: "सुरक्षित जीपीएस-सक्षम बस सेवा",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      description: "A dedicated fleet of modern air-conditioned buses covering all major city arterial routes. Fitted with real-time GPS tracking and CCTV cameras.",
      features: ["Live parent GPS tracking app", "Trained female attendants", "Speed governors & first-aid"]
    },
    {
      icon: Activity,
      title: "Healthcare & Wellness Infirmary",
      titleHi: "स्वास्थ्य एवं प्राथमिक चिकित्सा केंद्र",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      description: "A sanitized health station staffed by a full-time certified nurse and visiting pediatrician for immediate medical response and annual health checkups.",
      features: ["Full-time licensed nurse", "Doctor on call", "Regular health & vision screenings"]
    },
  ];

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal direction="up" distance={24}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <span>World-Class Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
              Facilities Designed for Wholesome Student Growth
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Every corner of our 15-acre campus is crafted to foster intellectual discovery, physical stamina, safety, and creative collaboration.
            </p>
          </div>
        </ScrollReveal>

        {/* Facilities Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <StaggerItem key={idx}>
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 overflow-hidden flex flex-col justify-between group h-full">
                  <div>
                    {/* Photo with Overlay */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <img
                        src={fac.image}
                        alt={fac.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur text-blue-600 flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <p className="text-xs text-blue-200 font-medium">{fac.titleHi}</p>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {fac.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {fac.description}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 mt-2">
                    <div className="space-y-2">
                      {fac.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
