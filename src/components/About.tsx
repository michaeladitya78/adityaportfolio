
import { Code, FileText, User, Lightbulb, BadgeCheck, Bot, Database, Shield, Brain, PieChart } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  // Track mouse position for the interactive card effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.tilt-card');
      cards.forEach((card: Element) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const tiltX = (y - centerY) / 10;
        const tiltY = (centerX - x) / 10;
        
        if ((card as HTMLElement).matches(':hover')) {
          (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
          (card as HTMLElement).style.transition = 'transform 0.1s ease';
        }
      });
    };
    
    const handleMouseLeave = () => {
      const cards = document.querySelectorAll('.tilt-card');
      cards.forEach((card: Element) => {
        (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        (card as HTMLElement).style.transition = 'transform 0.5s ease';
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="about" ref={ref} className="section-container py-24 bg-black relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-5"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-tech-600/5 rounded-full filter blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="About Me" 
          subtitle="Tech innovator, content creator, and digital strategist"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed font-['SF_Pro_Text']">
              I'm a multidisciplinary technologist pursuing an integrated degree at NIT Patna, where I've harnessed the 
              power of technology to create impactful digital experiences that bridge the gap between technical complexity 
              and user engagement.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-['SF_Pro_Text']">
              My expertise in AI agent development, chatbot frameworks, and no-code automation has enabled me to 
              streamline complex workflows and create intelligent solutions that enhance user experiences across platforms.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-['SF_Pro_Text']">
              With a unique blend of technical knowledge and creative content creation, I've developed a reputation for 
              translating complex data into compelling narratives and visualizations that drive engagement and inform 
              decision-making.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-['SF_Pro_Text']">
              My background in financial data analysis and cybersecurity fundamentals gives me a holistic perspective 
              on building secure, scalable solutions that protect user data while delivering exceptional performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card 
              className={`glass-card tilt-card bg-black/60 border-dark-800 hover:border-accent/20 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-black/70 border border-dark-700 flex items-center justify-center mb-4 animate-glow">
                  <Bot className="text-accent h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-['SF_Pro_Display']">AI Development</h3>
                <p className="text-muted-foreground font-['SF_Pro_Text']">Building intelligent agents, conversational interfaces, and automated workflows for enhanced user experiences.</p>
              </CardContent>
            </Card>
            
            <Card 
              className={`glass-card tilt-card bg-black/60 border-dark-800 hover:border-accent/20 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-black/70 border border-dark-700 flex items-center justify-center mb-4 animate-glow">
                  <FileText className="text-accent h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-['SF_Pro_Display']">Content Creation</h3>
                <p className="text-muted-foreground font-['SF_Pro_Text']">Crafting compelling narratives that drive engagement and communicate complex ideas effectively.</p>
              </CardContent>
            </Card>
            
            <Card 
              className={`glass-card tilt-card bg-black/60 border-dark-800 hover:border-accent/20 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-black/70 border border-dark-700 flex items-center justify-center mb-4 animate-glow">
                  <PieChart className="text-accent h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-['SF_Pro_Display']">Data Visualization</h3>
                <p className="text-muted-foreground font-['SF_Pro_Text']">Transforming complex datasets into intuitive visual representations that tell compelling stories.</p>
              </CardContent>
            </Card>
            
            <Card 
              className={`glass-card tilt-card bg-black/60 border-dark-800 hover:border-accent/20 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-black/70 border border-dark-700 flex items-center justify-center mb-4 animate-glow">
                  <Shield className="text-accent h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-['SF_Pro_Display']">CyberSecurity</h3>
                <p className="text-muted-foreground font-['SF_Pro_Text']">Implementing secure system architecture and digital protection strategies for sensitive applications.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
