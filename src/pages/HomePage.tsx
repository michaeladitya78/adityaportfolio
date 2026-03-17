import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import CoreCompetencies from "@/components/sections/CoreCompetencies";
import ProfessionalProfile from "@/components/sections/ProfessionalProfile";
import WhatIBringSection from "@/components/sections/WhatIBringSection";
import ProfessionalInterests from "@/components/sections/ProfessionalInterests";
import Education from "@/components/sections/Education";
import LetsConnect from "@/components/sections/LetsConnect";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const HomePage = () => {
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

        // Enhanced Particle animation for the background using particles.js
        const setupParticles = () => {
            if (typeof window !== 'undefined' && !document.getElementById('tsparticles')) {
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
                script.id = 'tsparticles';
                script.onload = () => {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    if ((window as any).particlesJS) {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (window as any).particlesJS('particles-js', {
                            particles: {
                                number: { value: 60, density: { enable: true, value_area: 800 } },
                                color: { value: "#F59E0B" }, // Warm Amber from new design
                                shape: {
                                    type: ["circle", "triangle"],
                                    stroke: { width: 0, color: "#000000" },
                                },
                                opacity: {
                                    value: 0.15,
                                    random: true,
                                    anim: { enable: true, speed: 1, opacity_min: 0.05, sync: false }
                                },
                                size: {
                                    value: 3,
                                    random: true,
                                    anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
                                },
                                line_linked: {
                                    enable: true,
                                    distance: 150,
                                    color: "#627D98", // Deep Slate from new design
                                    opacity: 0.08,
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
                                    grab: { distance: 140, line_linked: { opacity: 0.2 } },
                                    push: { particles_nb: 4 }
                                }
                            },
                            retina_detect: true
                        });
                    }
                };
                document.body.appendChild(script);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        setupParticles();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden transition-colors duration-300">
            <Helmet>
                <title>Aditya - Full-Stack Developer & Designer</title>
                <meta name="description" content="Portfolio of Aditya, a full-stack developer and designer specializing in modern web development. Building digital experiences that inspire and perform." />
                <meta name="author" content="Aditya" />
            </Helmet>

            {/* Particle Background */}
            <div
                id="particles-js"
                className="fixed inset-0 pointer-events-none z-0"
                style={{ background: 'transparent' }}
            ></div>

            {/* Global Cursor Follower (optional, subtle effect) */}
            <div
                ref={cursorRef}
                className="fixed w-5 h-5 rounded-full pointer-events-none z-50 mix-blend-difference"
                style={{
                    background: 'radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%)',
                    transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
                    transition: 'transform 0.1s ease-out',
                }}
            />

            {/* Content - Now with higher z-index to be above particles */}
            <div className="relative z-10">
                <Header />

                <main>
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                    <Skills />
                    <Achievements />
                    <CoreCompetencies />
                    <ProfessionalProfile />
                    <WhatIBringSection />
                    <ProfessionalInterests />
                    <Education />
                    <LetsConnect />
                    <Contact />
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default HomePage;

