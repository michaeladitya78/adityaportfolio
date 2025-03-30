
import { ArrowDownIcon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

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

  return (
    <section 
      id="home" 
      ref={ref}
      className="relative min-h-[85vh] flex items-center justify-center pt-16 pb-12 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-dots-pattern bg-dots-sm opacity-5"></div>
      <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-5"></div>
      
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-[#121212] opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#0077FF_-30%,transparent_125%),radial-gradient(circle_at_75%_75%,#0077FF_-30%,transparent_125%)]" style={{ opacity: 0.05 }}></div>
      
      {/* Animated tech pattern elements */}
      <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-[#0077FF]/5 rounded-full filter blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-[#20C997]/10 rounded-full filter blur-3xl animate-float-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge 
            className={`bg-[#0A0A0A] text-[#0077FF] border border-[#0077FF]/30 hover:bg-[#121212] py-1.5 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="font-['SF_Pro_Display']">{passions[currentPassion]}</span>
          </Badge>
          
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-700 font-['SF_Pro_Display'] ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Hey, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0077FF] to-[#20C997]">Aditya</span>
          </h1>
          
          <p 
            className={`text-xl md:text-2xl text-[#F0F0F0] mb-8 max-w-3xl mx-auto transition-all duration-700 font-['SF_Pro_Text'] ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Bridging creativity and technology to craft digital experiences that matter
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <Button size="lg" className="bg-[#0077FF] hover:bg-[#0066DD] text-white group relative overflow-hidden" asChild>
              <a href="#projects" className="inline-flex items-center gap-2">
                <span className="relative z-10 font-['SF_Pro_Text'] font-medium">View My Work</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#0066DD] to-[#0088FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-[#0077FF]/30 text-[#0077FF] hover:text-white hover:bg-[#121212] group relative overflow-hidden" asChild>
              <a href="#contact" className="inline-flex items-center gap-2">
                <span className="relative z-10 font-['SF_Pro_Text'] font-medium">Get In Touch</span>
                <span className="absolute inset-0 bg-[#0077FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
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
