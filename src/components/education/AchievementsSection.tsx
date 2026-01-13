
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
      title: "Product Leadership: Successfully managed 4+ product management roles across diverse industries (logistics, food-tech, wellness)",
      icon: <Trophy className="h-5 w-5 text-accent" />
    },
    {
      title: "Cross-functional Collaboration: Led distributed teams across multiple time zones and geographies",
      icon: <Award className="h-5 w-5 text-accent" />
    },
    {
      title: "Content Impact: Created 100+ pieces of technical and marketing content across various platforms",
      icon: <Star className="h-5 w-5 text-accent" />
    },
    {
      title: "Technical Proficiency: Built full-stack applications, AI chatbots, and ML models from scratch",
      icon: <Medal className="h-5 w-5 text-accent" />
    },
    {
      title: "International Experience: Managed remote product operations for Australian and Indian markets",
      icon: <Star className="h-5 w-5 text-accent" />
    },
    {
      title: "Community Building: Grew social media presence and engagement for multiple tech  communities",
      icon: <Trophy className="h-5 w-5 text-accent" />
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
