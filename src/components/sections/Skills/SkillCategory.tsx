import { useState } from "react";
import DOMPurify from "dompurify";
import { Skill } from "./skillData";

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  isVisible: boolean;
  delayOffset: number;
}

export const SkillCategory = ({
  title,
  skills,
  isVisible,
  delayOffset
}: SkillCategoryProps) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="mb-8 last:mb-0">
      <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-indigo-500/80 font-body">
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {skills.map((skill, idx) => {
          const delay = delayOffset + idx * 0.1;
          const isHovered = hoveredSkill === skill.name;

          return (
            <div
              key={skill.name}
              className={`relative p-4 rounded-xl border border-gray-200 dark:border-[#1F1F1F] bg-white/50 dark:bg-[#0A0A0A]/50 transition-all duration-300 transform hover:scale-105 hover:border-[#0077FF]/30 hover:shadow-lg hover:shadow-[#0077FF]/5 ${isVisible ? 'animate-skill-pop' : 'opacity-0'
                } ${isHovered ? 'bg-[#0077FF]/5' : ''}`}
              style={{
                animationDelay: `${delay}s`,
                transitionDelay: `${delay}s`
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex flex-col items-center text-center space-y-2">
                {typeof skill.icon === 'string' ? (
                  skill.icon.startsWith('<svg') ? (
                    <div
                      className={`w-14 h-14 p-2.5 flex items-center justify-center rounded-2xl mb-2 transition-all duration-500 bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/10 group-hover:scale-110 group-hover:rotate-3 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/5 animate-float-slow`}
                      style={{ animationDelay: `${idx * 0.2}s` }}
                      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(skill.icon) }}
                    />
                  ) : (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className={`w-14 h-14 p-3 object-contain flex items-center justify-center rounded-2xl mb-2 transition-all duration-500 bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/10 group-hover:scale-110 group-hover:-rotate-3 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/5 animate-float-slow`}
                      style={{ animationDelay: `${idx * 0.2}s` }}
                    />
                  )
                ) : (
                  <div
                    className={`w-14 h-14 p-2.5 flex items-center justify-center rounded-2xl mb-2 text-indigo-500 transition-all duration-500 bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/10 group-hover:scale-110 group-hover:rotate-3 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/5 animate-float-slow`}
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    {skill.icon}
                  </div>
                )}

                <h4 className="font-medium text-sm sm:text-base text-foreground font-body">
                  {skill.name}
                </h4>

                <div
                  className={`w-full bg-gray-200 dark:bg-[#1F1F1F] rounded-full h-1.5 mt-1 overflow-hidden transition-all duration-300 ${isHovered ? 'bg-[#0077FF]/20' : ''
                    }`}
                >
                  <div
                    className={`bg-[#D4AF37] h-full rounded-full transition-all duration-500 ${isVisible ? 'animate-path-progress' : 'w-0'
                      } ${isHovered ? 'animate-path-glow' : ''}`}
                    style={{
                      width: `${skill.proficiency}%`,
                      animationDelay: `${delay + 0.5}s`
                    }}
                  ></div>
                </div>

                <span className="text-xs text-muted-foreground font-body">
                  {skill.proficiency}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
