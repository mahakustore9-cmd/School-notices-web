/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { NoticeBoard } from "./components/NoticeBoard";
import { AboutSection } from "./components/AboutSection";
import { PrincipalSection } from "./components/PrincipalSection";
import { AcademicsSection } from "./components/AcademicsSection";
import { FacilitiesSection } from "./components/FacilitiesSection";
import { ApproachAndCommunitySection } from "./components/ApproachAndCommunitySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { NoticeModal } from "./components/NoticeModal";
import { NoticeSetupGuideModal } from "./components/NoticeSetupGuideModal";
import { ScrollReveal } from "./components/ScrollReveal";
import { fetchSchoolNotices, GOOGLE_DOC_URL } from "./services/noticeService";
import { NoticeItem, NoticeResponse } from "./types";
import { Bell } from "lucide-react";

export default function App() {
  const [noticeData, setNoticeData] = useState<NoticeResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Modal states
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState<boolean>(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState<boolean>(false);

  // Load notices from Google Docs
  const loadNotices = useCallback(async (forceRefresh = false) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchSchoolNotices(forceRefresh);
      setNoticeData(data);
      setLastUpdated(new Date());
    } catch (err: any) {
      console.error("Failed to load school notices:", err);
      setError(
        err.message || 
        "Notice board connection is on standby. Central registry will synchronize automatically."
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch on mount
  useEffect(() => {
    loadNotices(false);
  }, [loadNotices]);

  // Open modal with specific notice
  const handleOpenNotice = (notice: NoticeItem) => {
    // Prevent empty popup
    if (!notice || !notice.body?.trim()) return;
    setSelectedNotice(notice);
    setIsNoticeModalOpen(true);
  };

  // Open modal with latest notice
  const handleOpenLatestNotice = () => {
    if (noticeData && noticeData.notices && noticeData.notices.length > 0) {
      handleOpenNotice(noticeData.notices[0]);
    } else {
      // If notices not loaded yet or empty, trigger refresh
      loadNotices(true);
    }
  };

  const latestNotice = noticeData?.notices && noticeData.notices.length > 0 
    ? noticeData.notices[0] 
    : null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased selection:bg-blue-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar 
        latestNotice={latestNotice}
        onOpenNotice={handleOpenLatestNotice}
        onOpenGuide={() => setIsGuideModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          latestNotice={latestNotice}
          onOpenNotice={handleOpenLatestNotice}
        />

        {/* Dynamic Central Notice Board */}
        <ScrollReveal direction="up" distance={40} duration={0.8}>
          <NoticeBoard 
            noticeData={noticeData}
            isLoading={isLoading}
            error={error}
            lastUpdated={lastUpdated}
            onRefresh={() => loadNotices(true)}
            onSelectNotice={handleOpenNotice}
            onOpenGuide={() => setIsGuideModalOpen(true)}
          />
        </ScrollReveal>

        {/* Rich Colorful Section Inspired by Screenshots: Our Approach, Solutions for Every Section & Accreditations */}
        <ScrollReveal direction="up" distance={40} duration={0.8}>
          <ApproachAndCommunitySection />
        </ScrollReveal>

        {/* About School Section */}
        <ScrollReveal direction="up" distance={40} duration={0.8}>
          <AboutSection />
        </ScrollReveal>

        {/* Principal's Message Section */}
        <ScrollReveal direction="up" distance={40} duration={0.8}>
          <PrincipalSection />
        </ScrollReveal>

        {/* Academics Section */}
        <ScrollReveal direction="up" distance={40} duration={0.8}>
          <AcademicsSection />
        </ScrollReveal>

        {/* Facilities Section */}
        <ScrollReveal direction="up" distance={40} duration={0.8}>
          <FacilitiesSection />
        </ScrollReveal>

        {/* Contact & Admission Enquiry */}
        <ScrollReveal direction="up" distance={40} duration={0.8}>
          <ContactSection />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer 
        onOpenNotice={handleOpenLatestNotice}
        onOpenGuide={() => setIsGuideModalOpen(true)}
      />

      {/* Floating Notice Bell Trigger (bottom-right) */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          id="floating-notice-btn"
          onClick={handleOpenLatestNotice}
          title="View Latest Notice"
          className="relative p-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-2xl shadow-blue-600/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <Bell className="w-6 h-6 animate-pulse" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 text-slate-950 font-bold text-[10px] rounded-full flex items-center justify-center ring-2 ring-white">
            1
          </span>
        </button>
      </div>

      {/* Professional Notice Popup Modal */}
      <NoticeModal 
        isOpen={isNoticeModalOpen}
        onClose={() => setIsNoticeModalOpen(false)}
        notice={selectedNotice}
        docUrl={noticeData?.docUrl || GOOGLE_DOC_URL}
        onOpenSettings={() => {
          setIsNoticeModalOpen(false);
          setIsGuideModalOpen(true);
        }}
      />

      {/* Google Docs Setup & Permissions Guide Modal */}
      <NoticeSetupGuideModal 
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
        onDocUpdated={() => loadNotices(true)}
      />
    </div>
  );
}
