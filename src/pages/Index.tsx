
import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const Index = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const isMounted = useRef(false);

  // Interactive background effect
  useEffect(() => {
    if (isMounted.current) return;
    isMounted.current = true;
    
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Update global cursor
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      
      // Update all glow effects
      const glowEffects = document.querySelectorAll('.glow-effect');
      glowEffects.forEach((el: Element) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        (el as HTMLElement).style.setProperty('--x', `${x}%`);
        (el as HTMLElement).style.setProperty('--y', `${y}%`);
      });
    };
    
    // Enhanced Particle animation for the background using tsparticles
    const setupParticles = () => {
      if (typeof window !== 'undefined' && !document.getElementById('tsparticles')) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.id = 'tsparticles';
        script.onload = () => {
          if ((window as any).particlesJS) {
            (window as any).particlesJS('particles-js', {
              particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#0077FF" }, // Electric Blue
                shape: {
                  type: ["circle", "triangle", "polygon"],
                  stroke: { width: 0, color: "#000000" },
                  polygon: { nb_sides: 6 }
                },
                opacity: {
                  value: 0.2,
                  random: true,
                  anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#0077FF", // Electric Blue
                  opacity: 0.1,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: { enable: false, rotateX: 600, rotateY: 1200 }
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: { enable: true, mode: "grab" },
                  onclick: { enable: true, mode: "push" },
                  resize: true
                },
                modes: {
                  grab: { distance: 140, line_linked: { opacity: 0.3 } },
                  bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                  repulse: { distance: 200, duration: 0.4 },
                  push: { particles_nb: 4 },
                  remove: { particles_nb: 2 }
                }
              },
              retina_detect: true
            });
          }
        };
        document.body.appendChild(script);
      }
    };
    
    setupParticles();
    window.addEventListener('mousemove', handleMouseMove);
    
    // Create a particles container if it doesn't exist
    if (!document.getElementById('particles-js')) {
      const particlesContainer = document.createElement('div');
      particlesContainer.id = 'particles-js';
      particlesContainer.style.position = 'fixed';
      particlesContainer.style.top = '0';
      particlesContainer.style.left = '0';
      particlesContainer.style.width = '100%';
      particlesContainer.style.height = '100%';
      particlesContainer.style.zIndex = '-1';
      particlesContainer.style.opacity = '0.5';
      document.body.prepend(particlesContainer);
    }
    
    // Add SF Pro fonts
    document.documentElement.style.setProperty('--font-heading', '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif');
    document.documentElement.style.setProperty('--font-body', '"SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, sans-serif');
    document.documentElement.style.setProperty('--font-code', '"SF Mono", ui-monospace, monospace');

    // Check device type to adjust styles for better responsiveness
    const checkDeviceAndAdjustStyles = () => {
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
      
      document.documentElement.style.setProperty('--section-spacing', isMobile ? '4rem' : isTablet ? '5rem' : '7rem');
      document.documentElement.style.setProperty('--content-max-width', isMobile ? '100%' : isTablet ? '90%' : '85%');
      
      // Adjust font sizes for mobile
      if (isMobile) {
        document.documentElement.style.setProperty('--h1-size', '2rem');
        document.documentElement.style.setProperty('--h2-size', '1.75rem');
        document.documentElement.style.setProperty('--h3-size', '1.5rem');
        document.documentElement.style.setProperty('--body-size', '0.95rem');
      } else {
        document.documentElement.style.setProperty('--h1-size', '3rem');
        document.documentElement.style.setProperty('--h2-size', '2.25rem');
        document.documentElement.style.setProperty('--h3-size', '1.75rem');
        document.documentElement.style.setProperty('--body-size', '1rem');
      }
    };
    
    // Initialize and listen for resize
    checkDeviceAndAdjustStyles();
    window.addEventListener('resize', checkDeviceAndAdjustStyles);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkDeviceAndAdjustStyles);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Helmet>
        <title>Aditya - Professional Portfolio</title>
        <meta name="description" content="Aditya's professional portfolio showcasing skills, experience, projects and more. Bridging creativity and technology to craft digital experiences that matter." />
        <meta name="keywords" content="Aditya, Portfolio, Web Development, Software Engineer, Developer, Technology, Programming" />
        <meta name="author" content="Aditya" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aditya - Professional Portfolio" />
        <meta property="og:description" content="Aditya's professional portfolio showcasing skills, experience, projects and more." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://aditya-portfolio.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aditya - Professional Portfolio" />
        <meta name="twitter:description" content="Aditya's professional portfolio showcasing skills, experience, projects and more." />
        <meta name="twitter:image" content="/og-image.png" />
        
        {/* Viewport and mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#0A0A0A" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://applesocial.s3.amazonaws.com" />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      
      {/* Custom cursor effect (visible only on desktop) */}
      <div 
        ref={cursorRef}
        className="hidden md:block fixed w-6 h-6 rounded-full pointer-events-none mix-blend-screen z-50 opacity-0 md:opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(0, 119, 255, 0.8) 0%, rgba(0, 119, 255, 0) 70%)',
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          transition: 'transform 0.1s ease-out, opacity 0.3s ease',
          filter: 'blur(2px)',
          width: '150px',
          height: '150px',
          marginLeft: '-75px',
          marginTop: '-75px'
        }}
      ></div>
    </div>
  );
};

export default Index;
