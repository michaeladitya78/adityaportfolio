
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { educationData } from "../education/EducationData";
import { EducationItem } from "../education/EducationItem";
import { AchievementsSection } from "../education/AchievementsSection";
import { LearningJourney } from "../education/LearningJourney";

export default function Education() {
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

  return (
    <section id="education" ref={ref} className="section-container py-24 bg-cursor-dark relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-5"></div>
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cursor-gray/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading 
          title="Education & Achievements" 
          subtitle="My academic journey and notable accomplishments"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {educationData.map((edu, index) => (
            <EducationItem 
              key={edu.id}
              education={edu} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
        
        <AchievementsSection isVisible={isVisible} />
        
        <LearningJourney isVisible={isVisible} />
      </div>
    </section>
  );
}
