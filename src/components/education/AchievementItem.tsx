
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
      className={`achievement-item relative glass-card group border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111116] p-6 flex items-start gap-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } ${isLeft ? 'md:mr-8' : 'md:ml-8 md:mt-20'}`}
      style={{ transitionDelay: `${index * 100 + 400}ms` }}
    >
      {/* Path connector for each achievement */}
      <div
        className={`hidden md:block absolute top-1/2 h-[2px] w-8 overflow-hidden ${isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
          }`}
      >
        <div className="path-progress h-full bg-gradient-to-r from-[#64CEFB] to-[#8B5CF6] opacity-30"></div>
      </div>

      {/* Path dots */}
      <div
        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0f] path-dot ${isLeft ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
          }`}
      ></div>

      <div className="h-12 w-12 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex-shrink-0 flex items-center justify-center mt-0.5 group-hover:scale-110 group-hover:bg-[#6366f1]/5 transition-all duration-500">
        <div className="text-[#6366f1]">
          {achievement.icon}
        </div>
      </div>
      <div>
        <p className="text-gray-700 dark:text-white/80 font-body text-base leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{achievement.title}</p>
      </div>
      {/* Subtle bottom accent line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-[#64CEFB] via-[#8B5CF6] to-[#64CEFB] bg-[length:200%_auto] animate-[shimmerProgressBar_3s_linear_infinite]">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==")' }}></div>
      </div>
    </div>
  );
};
