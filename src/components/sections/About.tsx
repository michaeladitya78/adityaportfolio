
import { Code, FileText, User, Lightbulb, BadgeCheck, Bot, Database, Shield, Brain, PieChart } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { useDeviceType } from "@/hooks/use-mobile";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);
  const deviceType = useDeviceType();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  // Track mouse position for the interactive card effect (desktop only)
  useEffect(() => {
    if (deviceType !== 'desktop') return;

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
  }, [deviceType]);

  return (
    <section id="about" ref={ref} className="section-container py-16 md:py-24 bg-black relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-5"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-tech-600/5 rounded-full filter blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="About Me"
          subtitle="Tech innovator, content creator, and digital strategist"
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div
            className={`space-y-4 md:space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-['SF_Pro_Text']">
              I'm a <strong className="text-white">Product Manager, Software Engineer, and AI/ML Developer</strong> pursuing an integrated degree at NIT Patna.
              I bring a rare combination of product thinking, technical execution, and AI innovation to build impactful digital solutions.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-['SF_Pro_Text']">
              With <strong className="text-white">4+ product management roles</strong> across logistics, food-tech, and wellness industries,
              I've led cross-functional teams and shipped products that directly impact user experiences. My background in Mathematics
              provides strong analytical foundations for data-driven decision making.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-['SF_Pro_Text']">
              As a <strong className="text-white">full-stack developer</strong>, I've built applications using React, Next.js, Node.js,
              and modern frameworks. My <strong className="text-white">AI/ML expertise</strong> includes developing chatbots, training
              models with TensorFlow and PyTorch, and implementing NLP solutions with LangChain and Hugging Face.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-['SF_Pro_Text']">
              I've created <strong className="text-white">100+ pieces of content</strong>, managed international teams, and founded my own venture.
              I'm passionate about AI-powered products, fintech innovation, and building tools that empower developers and users alike.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <Card
              className={`glass-card ${deviceType === 'desktop' ? 'tilt-card' : ''} bg-black/60 border-dark-800 hover:border-accent/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
              style={{ transitionDelay: '100ms' }}
            >
              <CardContent className="p-5 md:p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-black/70 border border-dark-700 flex items-center justify-center mb-4 animate-glow">
                  <Bot className="text-accent h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 font-['SF_Pro_Display']">AI Development</h3>
                <p className="text-sm md:text-base text-muted-foreground font-['SF_Pro_Text']">Building intelligent agents, conversational interfaces, and automated workflows for enhanced user experiences.</p>
              </CardContent>
            </Card>

            <Card
              className={`glass-card ${deviceType === 'desktop' ? 'tilt-card' : ''} bg-black/60 border-dark-800 hover:border-accent/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              <CardContent className="p-5 md:p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-black/70 border border-dark-700 flex items-center justify-center mb-4 animate-glow">
                  <FileText className="text-accent h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 font-['SF_Pro_Display']">Content Creation</h3>
                <p className="text-sm md:text-base text-muted-foreground font-['SF_Pro_Text']">Crafting compelling narratives that drive engagement and communicate complex ideas effectively.</p>
              </CardContent>
            </Card>

            <Card
              className={`glass-card ${deviceType === 'desktop' ? 'tilt-card' : ''} bg-black/60 border-dark-800 hover:border-accent/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
              style={{ transitionDelay: '300ms' }}
            >
              <CardContent className="p-5 md:p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-black/70 border border-dark-700 flex items-center justify-center mb-4 animate-glow">
                  <PieChart className="text-accent h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 font-['SF_Pro_Display']">Data Visualization</h3>
                <p className="text-sm md:text-base text-muted-foreground font-['SF_Pro_Text']">Transforming complex datasets into intuitive visual representations that tell compelling stories.</p>
              </CardContent>
            </Card>

            <Card
              className={`glass-card ${deviceType === 'desktop' ? 'tilt-card' : ''} bg-black/60 border-dark-800 hover:border-accent/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
              style={{ transitionDelay: '400ms' }}
            >
              <CardContent className="p-5 md:p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-black/70 border border-dark-700 flex items-center justify-center mb-4 animate-glow">
                  <Shield className="text-accent h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 font-['SF_Pro_Display']">CyberSecurity</h3>
                <p className="text-sm md:text-base text-muted-foreground font-['SF_Pro_Text']">Implementing secure system architecture and digital protection strategies for sensitive applications.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
