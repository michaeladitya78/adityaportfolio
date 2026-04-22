// components/sections/Hero.tsx
// Full-screen hero section at the top of the home page.
// Features a looping background video, animated role cycling, a shimmer-text
// headline, magnetic CTA buttons, and a cursor-tracking glow orb.

import { ArrowDownIcon, Github, Linkedin, Mail, MapPin, Briefcase, ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

/* ── Role cycling data ─────────────────────────────────────────────────── */
const roles = [
  "Product Manager",
  "Full-Stack Engineer",
  "AI / ML Developer",
  "Team Leader",
];

/* ── Floating achievement stats ─────────────────────────────────────────── */
const stats = [
  { value: "5+",  label: "Products Shipped" },
  { value: "3+",  label: "Years Building"   },
  { value: "10+", label: "Clients Served"   },
];

/* ── Social links ────────────────────────────────────────────────────────── */
const socials = [
  { href: "https://github.com/michaeladitya78",              icon: Github,   label: "GitHub"   },
  { href: "https://www.linkedin.com/in/aditya-raj-8764a3205/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:michaeladitya150@gmail.com",               icon: Mail,     label: "Email"    },
];

/* ══════════════════════════════════════════════
   HERO COMPONENT
   ══════════════════════════════════════════════ */
export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [roleFade, setRoleFade]       = useState(true);
  const [mounted, setMounted]         = useState(true);
  const [mousePos, setMousePos]       = useState({ x: 0, y: 0 });
  const [hoveredBtn, setHoveredBtn]   = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef    = useRef<HTMLDivElement>(null);

  /* Role cycling — 3.6 s crossfade */
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleFade(false);
      setTimeout(() => {
        setCurrentRole((p) => (p + 1) % roles.length);
        setRoleFade(true);
      }, 340);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  /* Cursor-tracking glow orb — magnetic background effect */
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!sectionRef.current || !glowRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width)  * 100;
    const y = ((e.clientY - rect.top)  / rect.height) * 100;
    setMousePos({ x, y });
    glowRef.current.style.background =
      `radial-gradient(600px circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px,
        hsl(var(--accent) / 0.08) 0%, transparent 70%)`;
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  /* Magnetic button helper — subtle pull toward cursor */
  const getMagneticStyle = (btnId: string, defaultStyle: React.CSSProperties): React.CSSProperties => {
    if (hoveredBtn !== btnId) return defaultStyle;
    return defaultStyle; /* Scale handled by CSS */
  };

  return (
    <section
      id="home"
      aria-label="Hero"
      ref={sectionRef}
      className="relative w-full h-[100dvh] flex flex-col justify-center overflow-hidden bg-black text-white/80"
      style={{
        paddingTop: "clamp(5rem, 10vw, 8rem)",
        zIndex: 1,
      }}
    >
      {/* ── Background Video — from Reference ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: "brightness(0.35) contrast(1.1) saturate(1.2)" }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4"
      />

      {/* ── Background Overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 z-0 pointer-events-none" />

      {/* ── ShinyText Animation Keyframes ── */}
      <style>{`
        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>

      {/* ── Main content container (z-10 relative) ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 h-full flex flex-col">
        
        {/* ── Top Section (Stats right-aligned on large screens per reference) ── */}
        <div className="w-full flex justify-end pt-12 lg:pt-8 md:mb-12">
          <div
            className="flex md:flex-col gap-6 md:gap-4 md:items-end text-right"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(-10px)",
              transition: "all 800ms 200ms ease-out",
            }}
          >
            {stats.map(({ value, label }, i) => (
              <div key={label} className="flex flex-col mb-2">
                <span className="text-white font-semibold text-lg md:text-xl lg:text-2xl leading-tight">
                  {value}
                </span>
                <span className="text-white/60 text-xs md:text-sm tracking-wide">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Center Section: Main Hero ── */}
        <div className="flex-1 flex flex-col justify-center max-w-3xl">
        {/* ── Role pill (Aligned left) ── */}
        <div
          className="flex items-center justify-start mb-6"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 600ms 300ms cubic-bezier(0.0,0.0,0.2,1)",
          }}
        >
          {/* Pill card — minimalist styling via Phase-3 Glass System */}
          <div className="glass-pill inline-flex items-center gap-2 px-4 py-1.5">
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#64CEFB",
                opacity: roleFade ? 1 : 0,
                transition: "opacity 340ms ease",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: "rgba(255,255,255,0.9)",
                opacity: roleFade ? 1 : 0,
                transform: roleFade ? "translateY(0)" : "translateY(-4px)",
                transition: "opacity 340ms ease, transform 340ms ease",
                whiteSpace: "nowrap",
                textTransform: "uppercase",
              }}
            >
              {roles[currentRole]}
            </span>
          </div>
        </div>

        {/* ── Main Headline (ShinyText Effect) ── */}
        <h1
          className="text-left"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 8vw, 6rem)", // Maps to text-5xl to text-9xl
            fontWeight: 700,
            letterSpacing: "-0.04em", // tight tracking per reference
            lineHeight: 0.95, // tight line height
            color: "#ffffff", // Strict white per reference
            marginBottom: "1.5rem",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 900ms 400ms cubic-bezier(0.0,0.0,0.2,1), transform 900ms 400ms cubic-bezier(0.0,0.0,0.2,1)",
          }}
        >
          Hi, I'm{" "}
          <span
            className="block sm:inline"
            style={{
              /* ShinyText CSS implementation */
              background: "linear-gradient(100deg, #64CEFB 20%, #ffffff 50%, #64CEFB 80%)",
              backgroundSize: "200% auto",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              display: "inline-block",
              animation: "shine 3s linear infinite",
            }}
          >
            Aditya
          </span>
        </h1>

        {/* ── Tagline ── */}
        <p
          className="text-left"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--type-body-lg)",
            fontWeight: "var(--weight-regular)",
            lineHeight: "1.6",
            color: "rgba(255,255,255,0.7)", // white/70 opacity
            maxWidth: "520px",
            marginBottom: "2.5rem",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 700ms 550ms cubic-bezier(0.0,0.0,0.2,1), transform 700ms 550ms cubic-bezier(0.0,0.0,0.2,1)",
          }}
        >
          Engineering future-ready products with a blend of{" "}
          <strong className="text-white font-medium">AI innovation</strong>,{" "}
          <strong className="text-white font-medium">technical execution</strong>, and{" "}
          <strong className="text-white font-medium">strategic thinking</strong>.
        </p>

        {/* ── Meta row ── */}
        <div
          className="flex flex-wrap items-center justify-start gap-x-5 gap-y-2 mb-10 text-white/60"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--type-subhead)",
            opacity: mounted ? 1 : 0,
            transition: "opacity 700ms 650ms ease-out",
          }}
        >
          <span className="flex items-center gap-1.5 font-medium">
            <MapPin size={14} className="text-[#64CEFB]" />
            NIT Patna, India
          </span>
          <span className="text-white/20">|</span>
          <span className="flex items-center gap-1.5 font-medium">
            <Briefcase size={14} className="text-[#64CEFB]" />
            Open to global roles
          </span>
        </div>

        {/* ── CTAs — Reference Design implementation ── */}
        <div
          className="flex flex-wrap items-center justify-start gap-4 mb-16"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 700ms 750ms ease-out, transform 700ms 750ms ease-out",
          }}
        >
          {/* Default CTA adapted to Reference Style with Glass Wrapper */}
          <div className="glass-btn-wrapper">
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 rounded-full font-semibold transition-all duration-300"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                background: "var(--bg-base)",
                color: "#ffffff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
            View My Work
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
            </Link>
          </div>

          {/* Socials embedded on left alignment */}
          <div className="flex items-center gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.7)",
                  background: "rgba(255,255,255,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(100,206,251,0.15)";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.borderColor = "rgba(100,206,251,0.5)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

      </div>
      </div>

      {/* ── Scroll cue ── */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 group"
        style={{
          zIndex: 20,
          opacity: mounted ? 0.5 : 0,
          transition: "opacity 700ms 1100ms cubic-bezier(0.0,0.0,0.2,1)",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.5"; }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center border animate-bounce"
          style={{
            borderColor: "rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.05)",
            color: "rgba(255,255,255,0.5)",
            transition: "all 250ms ease",
          }}
        >
          <ArrowDownIcon size={14} />
        </div>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.625rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          Scroll
        </span>
      </a>
    </section>
  );
}
