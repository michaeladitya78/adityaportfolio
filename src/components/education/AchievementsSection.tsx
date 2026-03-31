
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
    <div className="mt-20">
      <style>{`
        @keyframes shimmerProgressBar {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes shimmerProgressBarVertical {
          0% { background-position: center 200%; }
          100% { background-position: center -200%; }
        }
      `}</style>
      <div className="flex items-center gap-4 mb-12">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/30 flex items-center justify-center">
            <Award className="h-6 w-6 text-[#64CEFB]" />
          </div>
          <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white">Achievements</h3>
        </div>
        <div className="relative h-1 flex-1 bg-gradient-to-r from-[#64CEFB] via-[#8B5CF6] to-transparent dark:to-transparent bg-[length:200%_auto] rounded-full overflow-hidden"
             style={{ animation: 'shimmerProgressBar 3s linear infinite' }}>
          <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==")' }}></div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 relative" ref={achievementsRef}>
        {/* Main path connecting all achievements */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[4px] bg-gray-200 dark:bg-white/5 -translate-x-1/2 rounded-full overflow-hidden">
          <div 
            className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-[#64CEFB] via-[#8B5CF6] to-[#64CEFB] bg-[length:auto_200%] rounded-full opacity-60 dark:opacity-80"
            style={{ animation: 'shimmerProgressBarVertical 3s linear infinite' }}
          >
            {/* Glittery pattern overlay */}
            <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==")' }}></div>
          </div>
        </div>

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
