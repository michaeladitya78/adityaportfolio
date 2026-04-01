// pages/HomePage.tsx
// The main landing page served at the "/" route.
// Composed of three sections: Hero, About, Skills, and Contact — providing
// a complete single-scroll overview of Aditya's profile for first-time visitors.

import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

const HomePage = () => (
  <div className="min-h-screen bg-white dark:bg-[#0a0a0f] text-gray-900 dark:text-white transition-colors duration-500 relative selection:bg-[#64CEFB]/30">
    {/* Ambient background blobs — fixed behind all content, pointer-events disabled */}
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full dark:mix-blend-screen mix-blend-multiply filter blur-[100px] opacity-20 dark:opacity-50 animate-blob"
        style={{ background: 'radial-gradient(circle, rgba(100,206,251,0.5) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full dark:mix-blend-screen mix-blend-multiply filter blur-[100px] opacity-15 dark:opacity-40 animate-blob animation-delay-2000"
        style={{ background: 'radial-gradient(circle, rgba(26,144,226,0.5) 0%, transparent 70%)' }}
      />
    </div>

    <Helmet>
      <title>Aditya Raj — Product Manager &amp; AI Engineer</title>
      <meta
        name="description"
        content="Portfolio of Aditya Raj — Product Manager, Full-Stack Engineer, and AI/ML Developer from NIT Patna. Open to global roles."
      />
      <meta name="author" content="Aditya Raj" />
    </Helmet>

    <Header />

    <main className="relative z-10">
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>

    <Footer />
  </div>
);

export default HomePage;
