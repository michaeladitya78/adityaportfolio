
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

  return (
    <section 
      id="about" 
      ref={ref} 
      className="section-container py-24 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-5 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] opacity-20 dark:opacity-10 animate-float-slow pointer-events-none" style={{ background: "#6366f1" }}></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[100px] opacity-20 dark:opacity-10 animate-float-slow pointer-events-none" style={{ animationDelay: '2s', background: "#06b6d4" }}></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 text-gray-900 dark:text-white">
        <SectionHeading
          title="About Me"
          subtitle="Tech innovator, content creator, and digital strategist"
        />

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <p className="text-base md:text-lg text-gray-500 dark:text-white/70  leading-relaxed font-body">
              I'm a <strong className="text-gray-900 dark:text-white hover:text-[#64CEFB] transition-colors">Product Manager, Software Engineer, and AI/ML Developer</strong> pursuing an integrated degree at NIT Patna.
              I bring a rare combination of product thinking, technical execution, and AI innovation to build impactful digital solutions.
            </p>

            <p className="text-base md:text-lg text-gray-500 dark:text-white/70  leading-relaxed font-body">
              With <strong className="text-gray-900 dark:text-white hover:text-[#64CEFB] transition-colors">4+ product management roles</strong> across logistics, food-tech, and wellness industries,
              I've led cross-functional teams and shipped products that directly impact user experiences. My background in Mathematics
              provides strong analytical foundations for data-driven decision making.
            </p>

            <p className="text-base md:text-lg text-gray-500 dark:text-white/70  leading-relaxed font-body">
              As a <strong className="text-gray-900 dark:text-white hover:text-[#64CEFB] transition-colors">full-stack developer</strong>, I've built applications using React, Next.js, Node.js,
              and modern frameworks. My <strong className="text-gray-900 dark:text-white hover:text-[#64CEFB] transition-colors">AI/ML expertise</strong> includes developing chatbots, training
              models with TensorFlow and PyTorch, and implementing NLP solutions with LangChain and Hugging Face.
            </p>

            <p className="text-base md:text-lg text-gray-500 dark:text-white/70  leading-relaxed font-body">
              I've created <strong className="text-gray-900 dark:text-white hover:text-[#64CEFB] transition-colors">100+ pieces of content</strong>, managed international teams, and founded my own venture.
              I'm passionate about AI-powered products, fintech innovation, and building tools that empower developers and users alike.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <Card
              className={`glass-card group overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <CardContent className="p-8 flex flex-col items-center text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#64CEFB]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 bg-black/5  dark:bg-white/10  border border-black/10  dark:border-white/10 ">
                  <Bot className="h-8 w-8 text-[#64CEFB]" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display text-gray-900 dark:text-white">AI/ML Engineering</h3>
                <p className="text-sm text-gray-500 dark:text-white/70  font-body leading-relaxed group-hover:text-gray-500 dark:text-white/70  transition-colors">
                  Building intelligent chatbots and training models with TensorFlow, PyTorch, and LangChain for impactful automation.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`glass-card group overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <CardContent className="p-8 flex flex-col items-center text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A90E2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 bg-black/5  dark:bg-white/10  border border-black/10  dark:border-white/10 ">
                  <BadgeCheck className="h-8 w-8 text-[#1A90E2]" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display text-gray-900 dark:text-white">Product Leadership</h3>
                <p className="text-sm text-gray-500 dark:text-white/70  font-body leading-relaxed group-hover:text-gray-500 dark:text-white/70  transition-colors">
                  4+ PM roles across logistics, food-tech, and wellness, delivering high-impact products from ideation to scale.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`glass-card group overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <CardContent className="p-8 flex flex-col items-center text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#64CEFB]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 bg-black/5  dark:bg-white/10  border border-black/10  dark:border-white/10 ">
                  <Code className="h-8 w-8 text-[#64CEFB]" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display text-gray-900 dark:text-white">Full-Stack Tech</h3>
                <p className="text-sm text-gray-500 dark:text-white/70  font-body leading-relaxed group-hover:text-gray-500 dark:text-white/70  transition-colors">
                  Architecting performant web experiences using React, Next.js, and Node.js with a focus on technical excellence.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`glass-card group overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <CardContent className="p-8 flex flex-col items-center text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A90E2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 bg-black/5  dark:bg-white/10  border border-black/10  dark:border-white/10 ">
                  <Brain className="h-8 w-8 text-[#1A90E2]" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display text-gray-900 dark:text-white">Founder Mindset</h3>
                <p className="text-sm text-gray-500 dark:text-white/70  font-body leading-relaxed group-hover:text-gray-500 dark:text-white/70  transition-colors">
                  Leveraging a rich mathematical background and 100+ creative works to build tools that empower global users.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
