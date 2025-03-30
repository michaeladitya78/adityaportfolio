
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import { experiences } from "./experience/ExperienceData";
import { ExperienceItem } from "./experience/ExperienceItem";

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  
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
  
  // Set up intersection observers for each timeline item to trigger path animation
  useEffect(() => {
    if (!timelineRef.current) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '-1');
          setActiveIndex(index);
          
          // Animate the path progress
          const pathProgress = entry.target.querySelector('.path-progress') as HTMLElement;
          if (pathProgress) {
            pathProgress.style.animation = 'path-progress 1.5s ease-out forwards';
          }
          
          // Add glow to the path dot
          const pathDot = entry.target.querySelector('.path-dot') as HTMLElement;
          if (pathDot) {
            pathDot.classList.add('animate-path-glow');
          }
        }
      });
    }, { threshold: 0.5 });
    
    const items = timelineRef.current.querySelectorAll('.timeline-item');
    items.forEach(item => observer.observe(item));
    
    return () => {
      items.forEach(item => observer.unobserve(item));
    };
  }, [isVisible]);

  return (
    <section id="experience" ref={ref} className="section-container py-24 bg-cursor-gradient relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-10"></div>
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-cursor-light-gray/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="My journey creating content and building digital experiences"
        />
        
        <div className="relative mt-16" ref={timelineRef}>
          {/* Main timeline path */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#1F1F1F]"></div>
          
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={exp.id}
              experience={exp}
              index={index}
              isVisible={isVisible}
              activeIndex={activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
