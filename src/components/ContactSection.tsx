import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Calendar,
  HelpCircle,
  ChevronDown
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    grade: "Grade 1",
    message: ""
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: "What is the admission procedure for the 2026-27 session?",
      a: "Admissions begin with the online registration form. For Kindergarten to Grade 2, an informal interaction takes place. For Grades 3 to 12, a general aptitude evaluation in English and Mathematics is conducted."
    },
    {
      q: "How often is the Central Digital Notice Board updated?",
      a: "The Notice Board updates dynamically in real-time whenever the school administrative office issues an official circular or dispatch. Parents can see newly authenticated notices immediately upon visiting the portal."
    },
    {
      q: "What documents are required during admission verification?",
      a: "Child's original birth certificate, transfer certificate (TC) from previous school, previous year's report card, 4 passport photos, and residence proof of parents."
    },
    {
      q: "Is school transport available for outer residential areas?",
      a: "Yes, our GPS-tracked school bus fleet operates on over 18 optimized arterial routes with mobile app tracking for parents."
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <ScrollReveal direction="up" distance={24}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <span>Get in Touch &bull; Admissions Desk</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
              We Welcome You to Visit Our Campus
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Have questions regarding admissions, scholarships, or curriculum? Send us an inquiry or schedule a campus walkthrough.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Details & FAQs */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal direction="right" distance={30} duration={0.75}>
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
                <h3 className="text-xl font-bold text-slate-900">Campus Contact Info</h3>
                
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 block">Campus Address</span>
                      <p className="text-slate-600 text-xs leading-relaxed mt-0.5">
                        Smart Public School, Institutional Knowledge Park, Sector 14, Ring Road, New Delhi &ndash; 110001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 block">Phone Helplines</span>
                      <p className="text-slate-600 text-xs leading-relaxed mt-0.5">
                        Admissions: +91 98765 43210<br />
                        Reception: 011-2345678, 011-2345679
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 block">Official Email</span>
                      <p className="text-slate-600 text-xs leading-relaxed mt-0.5">
                        admissions@smartschool.edu.in<br />
                        principal@smartschool.edu.in
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 block">Visiting &amp; Office Hours</span>
                      <p className="text-slate-600 text-xs leading-relaxed mt-0.5">
                        Monday &ndash; Saturday: 8:00 AM &ndash; 3:30 PM<br />
                        Principal Meeting Hours: 11:00 AM &ndash; 1:00 PM (Prior Appointment)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* FAQs Accordion */}
            <ScrollReveal direction="up" distance={20} delay={0.15}>
              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" />
                  Frequently Asked Questions
                </h4>
                <div className="space-y-2">
                  {faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        className="w-full text-left p-4 font-semibold text-xs sm:text-sm text-slate-800 flex justify-between items-center gap-2 bg-slate-50/50 hover:bg-slate-50"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeFaq === idx ? "rotate-180 text-blue-600" : ""}`} />
                      </button>
                      {activeFaq === idx && (
                        <div className="p-4 pt-2 text-xs text-slate-600 bg-white leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Admission Enquiry Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" distance={30} duration={0.75}>
              <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-10">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Fast-Track Form</span>
                  <h3 className="text-2xl font-bold font-serif text-slate-900 mt-1">Admission &amp; General Enquiry</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out this brief form and our admission counsellor will contact you within 24 hours.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4 animate-in fade-in">
                    <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">Enquiry Submitted Successfully!</h4>
                      <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong>{formData.parentName}</strong>. We have received your inquiry for <strong>{formData.studentName}</strong> ({formData.grade}). Our admissions team will reach out via email ({formData.email}) and phone.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          studentName: "",
                          parentName: "",
                          email: "",
                          phone: "",
                          grade: "Grade 1",
                          message: ""
                        });
                      }}
                      className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Student Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.studentName}
                          onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                          placeholder="e.g. Aarav Sharma"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Parent / Guardian Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          placeholder="e.g. Rajesh Sharma"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Parent Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="parent@example.com"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Mobile Contact Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Applying For Grade *
                      </label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      >
                        <option value="Nursery / Pre-K">Nursery / Pre-K</option>
                        <option value="Kindergarten (LKG/UKG)">Kindergarten (LKG / UKG)</option>
                        <option value="Grade 1">Grade 1</option>
                        <option value="Grade 2">Grade 2</option>
                        <option value="Grade 3">Grade 3</option>
                        <option value="Grade 4">Grade 4</option>
                        <option value="Grade 5">Grade 5</option>
                        <option value="Grade 6">Grade 6</option>
                        <option value="Grade 7">Grade 7</option>
                        <option value="Grade 8">Grade 8</option>
                        <option value="Grade 9">Grade 9</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Grade 11 - Science (PCM/PCB)">Grade 11 - Science (PCM/PCB)</option>
                        <option value="Grade 11 - Commerce">Grade 11 - Commerce</option>
                        <option value="Grade 11 - Humanities">Grade 11 - Humanities</option>
                        <option value="Grade 12">Grade 12</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Specific Query / Message
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your child's interests or any specific queries..."
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all transform active:scale-98"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Admission Enquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
