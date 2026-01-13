
import { ArrowDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import { useDeviceType } from "@/hooks/use-mobile";

const passions = [
  "Building Digital Experiences",
  "Crafting Content",
  "Solving Problems",
  "Engineering Solutions",
  "Analyzing Data",
  "Leading Teams"
];

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [currentPassion, setCurrentPassion] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const deviceType = useDeviceType();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  // Passion cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPassion((prev) => (prev + 1) % passions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Interactive mouse effect for the hero section (only on desktop)
  useEffect(() => {
    if (deviceType !== 'desktop') return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      setMousePosition({ x, y });

      // Update glow effect position
      const glowElements = heroRef.current.querySelectorAll('.glow-effect');
      glowElements.forEach((el) => {
        (el as HTMLElement).style.setProperty('--x', `${x}%`);
        (el as HTMLElement).style.setProperty('--y', `${y}%`);
      });
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [deviceType]);

  return (
    <section
      id="home"
      ref={(node) => {
        // @ts-expect-error - This is a valid pattern to merge refs
        ref(node);
        // @ts-expect-error - This is a valid pattern to merge refs
        heroRef.current = node;
      }}
      className="relative min-h-[85vh] flex items-center justify-center pt-20 pb-12 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-dots-pattern bg-dots-sm opacity-5"></div>
      <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-5"></div>

      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-[#121212] opacity-90"></div>

      {/* Interactive gradient overlay that follows mouse */}
      {deviceType === 'desktop' && (
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,_25%)_var(--y,_25%),#0077FF_-30%,transparent_125%)]"
          style={{
            opacity: 0.07,
            transition: 'opacity 0.3s ease',
            '--x': `${mousePosition.x}%`,
            '--y': `${mousePosition.y}%`
          } as React.CSSProperties}
        ></div>
      )}

      {/* Animated tech pattern elements with hover effect */}
      <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-[#0077FF]/5 rounded-full filter blur-3xl animate-float-slow transform transition-transform duration-300 hover:scale-110"></div>
      <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-[#20C997]/10 rounded-full filter blur-3xl animate-float-slow transform transition-transform duration-300 hover:scale-110" style={{ animationDelay: '1s' }}></div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge
            className={`bg-[#0A0A0A] text-[#0077FF] border border-[#0077FF]/30 hover:bg-[#121212] py-1.5 transition-all duration-700 transform hover:scale-105 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
              }`}
          >
            <span className="font-['SF_Pro_Display'] text-sm sm:text-base">{passions[currentPassion]}</span>
          </Badge>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-700 font-['SF_Pro_Display'] ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
              }`}
            style={{ transitionDelay: '100ms' }}
          >
            Hey, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0077FF] to-[#20C997] hover:animate-text-shimmer">Aditya</span>
          </h1>

          <p
            className={`text-lg sm:text-xl md:text-2xl text-[#F0F0F0] mb-8 max-w-3xl mx-auto transition-all duration-700 font-['SF_Pro_Text'] px-4 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            Bridging creativity and technology to craft digital experiences that matter
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
              }`}
            style={{ transitionDelay: '300ms' }}
          >
            <Button size="lg" className="bg-[#0077FF] hover:bg-[#0066DD] text-white group relative overflow-hidden w-full sm:w-auto" asChild>
              <a href="#projects" className="inline-flex items-center gap-2">
                <span className="relative z-10 font-['SF_Pro_Text'] font-medium">View My Work</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#0066DD] to-[#0088FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-[#0077FF]/30 text-[#0077FF] hover:text-white hover:bg-[#121212] group relative overflow-hidden w-full sm:w-auto" asChild>
              <a href="#contact" className="inline-flex items-center gap-2">
                <span className="relative z-10 font-['SF_Pro_Text'] font-medium">Get In Touch</span>
                <span className="absolute inset-0 bg-[#0077FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-700 hover:animate-none hover:scale-110 ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        style={{ transitionDelay: '400ms' }}
      >
        <a
          href="#about"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A0A0A] border border-[#121212] shadow-lg hover:bg-[#121212] hover:border-[#0077FF]/50 transition-all"
          aria-label="Scroll to About section"
        >
          <ArrowDownIcon size={20} className="text-[#0077FF]" />
        </a>
      </div>

      {/* Interactive glow effect for mouse movement */}
      <div className="glow-effect absolute inset-0 opacity-20 pointer-events-none"></div>
    </section>
  );
}
