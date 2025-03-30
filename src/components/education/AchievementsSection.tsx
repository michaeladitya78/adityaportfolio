
import { useEffect, useRef, useState } from "react";
import { Award, Medal, Star, Trophy } from "lucide-react";
import { AchievementItem } from "./AchievementItem";

interface AchievementsSectionProps {
  isVisible: boolean;
}

export const AchievementsSection = ({ isVisible }: AchievementsSectionProps) => {
  const achievementsRef = useRef<HTMLDivElement>(null);
  const [activeAchievement, setActiveAchievement] = useState(-1);
  
  const achievements = [
    {
      title: "AIR 1200 Rank in NEO 2021 at IIT Bombay",
      icon: <Star className="h-5 w-5 text-accent" />
    },
    {
      title: "Medals in the All India Inter-NIT Power Sports Tournament 2023-2024, 2024-2025",
      icon: <Medal className="h-5 w-5 text-accent" />
    },
    {
      title: "Secured Medal in the Bihar State Taekwondo Championship",
      icon: <Trophy className="h-5 w-5 text-accent" />
    },
    {
      title: "Achieved the District Champion title in my weight category for five consecutive years",
      icon: <Award className="h-5 w-5 text-accent" />
    },
    {
      title: "Participated as a Member of Mood Indigo, 2022 at IIT Bombay",
      icon: <Star className="h-5 w-5 text-accent" />
    }
  ];
  
  // Set up intersection observers for achievements to trigger path animation
  useEffect(() => {
    if (!achievementsRef.current || !isVisible) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '-1');
          setActiveAchievement(index);
          
          // Add animation classes
          entry.target.classList.add('border-accent/30');
          
          const pathProgress = entry.target.querySelector('.path-progress') as HTMLElement;
          if (pathProgress) {
            pathProgress.style.animation = 'path-progress 1.5s ease-out forwards';
          }
          
          const pathDot = entry.target.querySelector('.path-dot') as HTMLElement;
          if (pathDot) {
            pathDot.classList.add('animate-path-glow');
          }
        }
      });
    }, { threshold: 0.5 });
    
    const items = achievementsRef.current.querySelectorAll('.achievement-item');
    items.forEach(item => observer.observe(item));
    
    return () => {
      items.forEach(item => observer.unobserve(item));
    };
  }, [isVisible]);

  return (
    <div className="mt-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-px flex-1 bg-cursor-light-gray/30"></div>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-cursor-darker border border-cursor-light-gray flex items-center justify-center">
            <Award className="h-5 w-5 text-accent" />
          </div>
          <h3 className="text-xl font-semibold text-gradient font-['SF_Pro_Display']">Achievements</h3>
        </div>
        <div className="h-px flex-1 bg-cursor-light-gray/30"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 relative" ref={achievementsRef}>
        {/* Main path connecting all achievements */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[3px] bg-cursor-light-gray/20 -translate-x-1/2"></div>
        
        {achievements.map((achievement, idx) => (
          <AchievementItem 
            key={idx}
            achievement={achievement}
            index={idx}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
};
