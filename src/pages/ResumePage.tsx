// pages/ResumePage.tsx
// The /resume route — presents a structured resume view.
// On mount (and on hash change), scrolls to the section specified in the URL hash
// so deep links like /resume#experience work correctly.
// Sections: Experience, Skills, Achievements, Education.

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Achievements from '@/components/sections/Achievements';
import Education from '@/components/sections/Education';

const ResumePage = () => {
  const location = useLocation();

  // Scroll to the anchored section when the URL hash changes,
  // or return to the top of the page if there is no hash.
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      // Small timeout lets the page render before we scroll.
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0f]">
      <Helmet>
        <title>Resume — Aditya | Professional Experience &amp; Skills</title>
        <meta
          name="description"
          content="View my professional experience, skills, education, and download my resume."
        />
      </Helmet>

      <Header />

      <main className="pt-20">
        <Experience />
        <Skills />
        <Achievements />
        <Education />
      </main>

      <Footer />
    </div>
  );
};

export default ResumePage;
