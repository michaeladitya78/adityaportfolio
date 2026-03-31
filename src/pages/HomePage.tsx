import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0f] text-gray-900 dark:text-white transition-colors duration-500 relative selection:bg-[#64CEFB]/30">
      {/* ── PHASE 6: UI/UX Pro Max Glass Background Blobs ── */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top-Right Purple/Pink Blob (adapted to Blue/Indigo Accent) */}
        <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full dark:mix-blend-screen mix-blend-multiply filter blur-[100px] opacity-20 dark:opacity-50 animate-blob" 
             style={{ background: 'radial-gradient(circle, rgba(100,206,251,0.5) 0%, transparent 70%)' }}></div>
        {/* Bottom-Left Blue Blob */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full dark:mix-blend-screen mix-blend-multiply filter blur-[100px] opacity-15 dark:opacity-40 animate-blob animation-delay-2000" 
             style={{ background: 'radial-gradient(circle, rgba(26,144,226,0.5) 0%, transparent 70%)' }}></div>
      </div>
      
      <Helmet>
        <title>Aditya Raj — Product Manager & AI Engineer</title>
        <meta
          name="description"
          content="Portfolio of Aditya Raj — Product Manager, Full-Stack Engineer, and AI/ML Developer from NIT Patna. Open to global roles."
        />
        <meta name="author" content="Aditya Raj" />
      </Helmet>

      <Header />

      <main className="relative z-10">
        {/* 1. Hero — first impression, name + role + CTAs */}
        <Hero />

        {/* 2. About — who I am, what I bring */}
        <About />

        {/* 5. Skills — progress bars per category */}
        <Skills />

        {/* 6. Contact — get in touch */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
