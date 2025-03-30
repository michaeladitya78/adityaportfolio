
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { SkillCategory } from "./SkillCategory";
import { skillData } from "./skillData";

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false); // Reset visibility when out of view
    }
  }, [inView]);

  return (
    <section 
      id="skills" 
      ref={ref}
      className="section-container bg-darker-gradient relative overflow-hidden py-20"
    >
      {/* Background elements with subtle animations */}
      <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-10"></div>
      
      {/* Glow effects with pulse animation */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#0077FF]/5 rounded-full filter blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-[#20C997]/5 rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="A comprehensive overview of my technical and professional abilities"
        />
        
        <div className="grid grid-cols-1 gap-6">
          {Object.entries(skillData).map(([key, skills], idx) => {
            const categoryKey = key.replace('Skills', '');
            const title = categoryKey === 'programming' 
              ? 'Programming Languages' 
              : categoryKey === 'framework' 
                ? 'Frameworks & Tools' 
                : categoryKey === 'content' 
                  ? 'Content Creation' 
                  : categoryKey === 'other'
                    ? 'Other Skills'
                    : 'Soft Skills';
                  
            return (
              <SkillCategory 
                key={title}
                title={title} 
                skills={skills} 
                isVisible={isVisible}
                delayOffset={idx * 0.4}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
