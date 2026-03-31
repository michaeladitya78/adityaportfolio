import { ArrowDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const roles = [
  "Product Manager",
  "Full-Stack Engineer",
  "AI/ML Developer",
  "Team Leader",
];

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  // Crossfade cycling — 3.5s interval with 0.4s fade
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 400);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center pt-16 pb-16 overflow-hidden"
      style={{ backgroundColor: "hsl(var(--background))" }}
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-5 pointer-events-none" />

      {/* Dynamic gradient orbs */}
      <div
        className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full filter blur-3xl animate-float-slow pointer-events-none"
        style={{ background: "hsl(var(--accent) / 0.06)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/6 w-72 h-72 rounded-full filter blur-3xl animate-float-slow pointer-events-none"
        style={{ background: "hsl(250 91% 65% / 0.05)", animationDelay: "1.5s" }}
      />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Role chip — crossfade cycling */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              borderColor: "hsl(var(--accent) / 0.3)",
              backgroundColor: "hsl(var(--accent) / 0.06)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: "hsl(var(--accent))" }}
            />
            <span
              className="text-sm font-medium font-body"
              style={{
                color: "hsl(var(--accent))",
                opacity: fade ? 1 : 0,
                transition: "opacity 0.4s ease",
              }}
            >
              {roles[currentRole]}
            </span>
          </div>

          {/* Main headline */}
          <h1
            className={`font-display font-bold tracking-tight mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{
              fontSize: "clamp(3rem, 6vw + 1rem, 5.5rem)",
              lineHeight: "1.05",
              transitionDelay: "100ms",
            }}
          >
            <span style={{ color: "hsl(var(--foreground))" }}>Aditya Raj</span>
            <br />
            <span className="text-gradient">builds AI products</span>
          </h1>

          {/* Concrete subline */}
          <p
            className={`text-lg md:text-xl font-body mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              color: "hsl(var(--muted-foreground))",
              transitionDelay: "200ms",
            }}
          >
            Product Manager + Full-Stack Engineer specializing in AI/ML products.
            NIT Patna · Open to roles globally.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <Button
              size="lg"
              className="font-body font-semibold relative overflow-hidden group"
              style={{
                backgroundColor: "hsl(var(--accent))",
                color: "hsl(var(--accent-foreground))",
              }}
              asChild
            >
              <a href="#projects" className="inline-flex items-center gap-2">
                <span className="relative z-10">View My Work</span>
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                  style={{ backgroundColor: "hsl(var(--accent-hover))" }}
                />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-body font-medium transition-all duration-300"
              style={{
                borderColor: "hsl(var(--accent) / 0.4)",
                color: "hsl(var(--accent))",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "hsl(var(--accent))";
                (e.currentTarget as HTMLButtonElement).style.color = "hsl(var(--accent-foreground))";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "hsl(var(--accent))";
              }}
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social proof strip */}
          <div
            className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-body transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ color: "hsl(var(--muted-foreground))", transitionDelay: "400ms" }}
          >
            <span>5+ Client Projects</span>
            <span aria-hidden style={{ color: "hsl(var(--border))" }}>·</span>
            <span>AI/ML · Fullstack · PM</span>
            <span aria-hidden style={{ color: "hsl(var(--border))" }}>·</span>
            <span style={{ color: "hsl(var(--accent))", fontWeight: 600 }}>Available Now</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "500ms" }}
      >
        <a
          href="#about"
          className="flex items-center justify-center w-10 h-10 rounded-full transition-all"
          style={{
            backgroundColor: "hsl(var(--muted) / 0.5)",
            border: "1px solid hsl(var(--border))",
          }}
          aria-label="Scroll to About section"
        >
          <ArrowDownIcon size={18} style={{ color: "hsl(var(--accent))" }} />
        </a>
      </div>
    </section>
  );
}
