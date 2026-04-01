// pages/AboutPage.tsx
// The /about route — a dedicated page for deeper professional context.
// Composes the About, ProfessionalProfile, CoreCompetencies,
// WhatIBringSection, and ProfessionalInterests sections.

import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import About from '@/components/sections/About';
import CoreCompetencies from '@/components/sections/CoreCompetencies';
import ProfessionalProfile from '@/components/sections/ProfessionalProfile';
import WhatIBringSection from '@/components/sections/WhatIBringSection';
import ProfessionalInterests from '@/components/sections/ProfessionalInterests';

const AboutPage = () => (
  <div className="min-h-screen bg-white dark:bg-[#0a0a0f]">
    <Helmet>
      <title>About — Aditya | Full-Stack Developer &amp; Designer</title>
      <meta
        name="description"
        content="Learn more about Aditya — my journey, skills, values, and what drives me to create exceptional digital experiences."
      />
    </Helmet>

    <Header />

    <main className="pt-20">
      <About />
      <ProfessionalProfile />
      <CoreCompetencies />
      <WhatIBringSection />
      <ProfessionalInterests />
    </main>

    <Footer />
  </div>
);

export default AboutPage;
