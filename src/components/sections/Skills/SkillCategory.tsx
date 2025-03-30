
import { useState } from "react";
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
      <h3 className="text-2xl font-semibold mb-4 text-[#F0F0F0] font-['SF_Pro_Display']">
        {title}
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {skills.map((skill, idx) => {
          const delay = delayOffset + idx * 0.1;
          const isHovered = hoveredSkill === skill.name;
          
          return (
            <div
              key={skill.name}
              className={`relative p-4 rounded-xl border border-[#1F1F1F] bg-[#0A0A0A]/50 transition-all duration-300 transform hover:scale-105 hover:border-[#0077FF]/30 hover:shadow-lg hover:shadow-[#0077FF]/5 ${
                isVisible ? 'animate-skill-pop' : 'opacity-0'
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
                      className={`w-12 h-12 p-2 flex items-center justify-center rounded-lg mb-2 transition-all duration-300 ${
                        isHovered ? 'bg-[#0077FF]/10' : ''
                      }`}
                      dangerouslySetInnerHTML={{ __html: skill.icon }}
                    />
                  ) : (
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className={`w-12 h-12 p-2 object-contain flex items-center justify-center rounded-lg mb-2 transition-all duration-300 ${
                        isHovered ? 'bg-[#0077FF]/10' : ''
                      }`}
                    />
                  )
                ) : (
                  <div 
                    className={`w-12 h-12 p-2 flex items-center justify-center rounded-lg mb-2 text-[#0077FF] transition-all duration-300 ${
                      isHovered ? 'text-white bg-[#0077FF]' : 'bg-[#0077FF]/10'
                    }`}
                  >
                    {skill.icon}
                  </div>
                )}
                
                <h4 className="font-medium text-sm sm:text-base text-[#F0F0F0] font-['SF_Pro_Text']">
                  {skill.name}
                </h4>
                
                <div 
                  className={`w-full bg-[#1F1F1F] rounded-full h-1.5 mt-1 overflow-hidden transition-all duration-300 ${
                    isHovered ? 'bg-[#0077FF]/20' : ''
                  }`}
                >
                  <div 
                    className={`bg-[#D4AF37] h-full rounded-full transition-all duration-500 ${
                      isVisible ? 'animate-path-progress' : 'w-0'
                    } ${isHovered ? 'animate-path-glow' : ''}`}
                    style={{ 
                      width: `${skill.proficiency}%`,
                      animationDelay: `${delay + 0.5}s` 
                    }}
                  ></div>
                </div>
                
                <span className="text-xs text-[#F0F0F0]/70 font-['SF_Pro_Text']">
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
