
import { ReactNode } from "react";

interface AchievementItemProps {
  achievement: {
    title: string;
    icon: ReactNode;
  };
  index: number;
  isVisible: boolean;
}

export const AchievementItem = ({ achievement, index, isVisible }: AchievementItemProps) => {
  // Calculate if the item is on the left or right side
  const isLeft = index % 2 === 0;
  
  return (
    <div 
      data-index={index}
      className={`achievement-item relative glass-card border border-cursor-light-gray/30 hover:border-accent/30 p-5 flex items-start gap-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${isLeft ? 'md:mr-12' : 'md:ml-12 md:mt-16'}`}
      style={{ transitionDelay: `${index * 100 + 400}ms` }}
    >
      {/* Path connector for each achievement */}
      <div 
        className={`hidden md:block absolute top-1/2 h-[3px] w-12 overflow-hidden ${
          isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
        }`}
      >
        <div className="path-progress h-full bg-primary"></div>
      </div>
      
      {/* Path dots */}
      <div 
        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-cursor-light-gray bg-background path-dot ${
          isLeft ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
        }`}
      ></div>
      
      <div className="h-10 w-10 rounded-full bg-cursor-darker border border-cursor-light-gray flex-shrink-0 flex items-center justify-center mt-0.5">
        {achievement.icon}
      </div>
      <div>
        <p className="text-foreground font-['SF_Pro_Text']">{achievement.title}</p>
      </div>
    </div>
  );
};
