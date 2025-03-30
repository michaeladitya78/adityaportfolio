
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
      className={`timeline-item relative pl-24 mb-16 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Animated path progress */}
      <div className="path-container absolute left-8 top-8 bottom-0 w-1 bg-[#0077FF]/30 overflow-hidden" style={{ height: index === 5 ? '0' : 'calc(100% + 4rem)' }}>
        <div className="path-progress h-full bg-[#0077FF]"></div>
      </div>
      
      {/* Glowing dot */}
      <div className="path-dot absolute left-8 top-8 w-4 h-4 rounded-full border-2 border-[#0077FF] bg-[#0A0A0A] -translate-x-1.5"></div>
      
      <div className="mb-1 flex flex-wrap items-center gap-2">
        <h3 className="text-xl font-semibold font-['SF_Pro_Display']">{experience.role}</h3>
        <Badge className="bg-cursor-darker text-accent hover:bg-cursor-gray font-['SF_Pro_Text']">{experience.company}</Badge>
      </div>
      
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4 font-['SF_Pro_Text']">
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
        className={`glass-card p-6 space-y-4 border border-cursor-light-gray/30 rounded-lg bg-black/20 backdrop-blur-sm ${
          activeIndex >= index ? 'border-accent/30 shadow-[0_0_15px_rgba(0,119,255,0.15)]' : ''
        }`}
      >
        {experience.duties.map((item, idx) => (
          <div 
            key={idx}
            className={`flex items-start gap-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${(index * 150) + (idx * 100) + 100}ms` }}
          >
            <div className={`h-2 w-2 rounded-full ${activeIndex >= index ? 'bg-accent' : 'bg-cursor-light-gray'} mt-2 flex-shrink-0`}></div>
            <p className="text-foreground font-['SF_Pro_Text']">{item}</p>
          </div>
        ))}
        
        {/* Only show the learn more button if hideLearnMore is not true */}
        {!experience.hideLearnMore && (
          <div className="pt-2 mt-2 border-t border-cursor-light-gray/20">
            <a 
              href={experience.companyLink || "https://www.linkedin.com/in/michael-aditya/"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent text-sm cursor-highlight group font-['SF_Pro_Text']"
            >
              <span>Learn more</span>
              <ArrowUpRight size={14} className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
