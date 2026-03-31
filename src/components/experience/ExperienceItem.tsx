
import { CalendarIcon, MapPinIcon, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Experience } from "./ExperienceData";

interface ExperienceItemProps {
  experience: Experience;
  index: number;
  isVisible: boolean;
  activeIndex: number;
}

export const ExperienceItem = ({ experience, index, isVisible, activeIndex }: ExperienceItemProps) => {
  return (
    <div
      data-index={index}
      className={`timeline-item relative pl-24 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Animated path progress */}
      <div className="path-container absolute left-8 top-8 bottom-0 w-[2px] overflow-hidden" style={{ height: index === 5 ? '0' : 'calc(100% + 4rem)' }}>
        <div className="path-progress h-full w-full" style={{ background: 'linear-gradient(180deg, #6366f1 0%, transparent 100%)', opacity: activeIndex >= index ? 1 : 0, transition: 'opacity 1s ease' }}></div>
      </div>

      {/* Glowing dot */}
      <div className={`path-dot absolute left-[31px] top-8 w-4 h-4 rounded-full border-2 transition-all duration-500 ${activeIndex >= index ? 'border-[#64CEFB] bg-black' : 'border-black/10 dark:border-white/10 bg-transparent'}`} style={{ 
        boxShadow: activeIndex >= index ? '0 0 15px rgba(100,206,251,0.5)' : 'none'
      }}></div>

      <div className="mb-1 flex flex-wrap items-center gap-2">
        <h3 className="text-xl font-semibold font-display text-gray-900 dark:text-white group-hover:text-[#64CEFB] transition-colors">{experience.role}</h3>
        <Badge className="font-body" style={{ background: 'rgba(100,206,251,0.1)', color: '#64CEFB', border: '1px solid rgba(100,206,251,0.2)' }}>{experience.company}</Badge>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-white/40 mb-4 font-body">
        <div className="flex items-center gap-1">
          <CalendarIcon className="h-4 w-4" />
          <span>{experience.period}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPinIcon className="h-4 w-4" />
          <span>{experience.location}</span>
        </div>
      </div>

      <div
        className="glass-card p-6 space-y-4 rounded-xl transition-all duration-500 hover:-translate-y-1"
        style={{ 
          boxShadow: activeIndex >= index ? 'var(--glow-accent)' : undefined
        }}
      >
        {experience.duties.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            style={{ transitionDelay: `${(index * 150) + (idx * 100) + 100}ms` }}
          >
            <div className={`h-1.5 w-1.5 rounded-full mt-2.5 flex-shrink-0 transition-colors duration-500 ${activeIndex >= index ? 'bg-[#64CEFB]' : 'bg-black/20 dark:bg-white/20'}`}></div>
            <p className="text-gray-600 dark:text-white/70 font-body leading-relaxed">{item}</p>
          </div>
        ))}

        {/* Only show the learn more button if hideLearnMore is not true */}
        {!experience.hideLearnMore && (
          <div className="pt-2 mt-4 border-t border-black/5 dark:border-white/5">
            <a
              href={experience.companyLink || "https://www.linkedin.com/in/michael-aditya/"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm cursor-highlight group font-body"
              style={{ color: '#64CEFB' }}
            >
              <span className="group-hover:text-gray-900 dark:text-white transition-colors duration-300">Learn more</span>
              <ArrowUpRight size={14} className="ml-1 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gray-900 dark:text-white" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
