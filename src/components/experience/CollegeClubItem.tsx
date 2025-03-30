
import { CalendarIcon, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CollegeClub } from "./ExperienceData";

interface CollegeClubItemProps {
  club: CollegeClub;
  index: number;
  isVisible: boolean;
  activeIndex: number;
}

export const CollegeClubItem = ({ club, index, isVisible, activeIndex }: CollegeClubItemProps) => {
  return (
    <div 
      data-index={index}
      className={`timeline-item relative pl-24 mb-16 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Animated path progress */}
      <div className="path-container absolute left-8 top-8 bottom-0 w-1 bg-[#0077FF]/30 overflow-hidden" style={{ height: index === 2 ? '0' : 'calc(100% + 4rem)' }}>
        <div className="path-progress h-full bg-[#0077FF]"></div>
      </div>
      
      {/* Glowing dot */}
      <div className="path-dot absolute left-8 top-8 w-4 h-4 rounded-full border-2 border-[#0077FF] bg-[#0A0A0A] -translate-x-1.5"></div>
      
      <div className="mb-1 flex flex-wrap items-center gap-2">
        <h3 className="text-xl font-semibold font-['SF_Pro_Display']">{club.role}</h3>
        <Badge className="bg-cursor-darker text-accent hover:bg-cursor-gray font-['SF_Pro_Text']">{club.organization}</Badge>
      </div>
      
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4 font-['SF_Pro_Text']">
        <div className="flex items-center gap-1">
          <CalendarIcon className="h-4 w-4" />
          <span>{club.period}</span>
        </div>
      </div>
      
      <div 
        className={`glass-card p-6 space-y-4 border border-cursor-light-gray/30 rounded-lg bg-black/20 backdrop-blur-sm ${
          activeIndex >= index ? 'border-accent/30 shadow-[0_0_15px_rgba(0,119,255,0.15)]' : ''
        }`}
      >
        <div className="flex flex-wrap gap-2 mb-2">
          {club.skills.map((skill, idx) => (
            <Badge 
              key={idx} 
              variant="outline"
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${(index * 150) + (idx * 50) + 100}ms` }}
            >
              {skill}
            </Badge>
          ))}
        </div>
        
        <div className="pt-2 mt-2 border-t border-cursor-light-gray/20">
          <a 
            href={club.organizationLink || "https://www.linkedin.com/in/michael-aditya/"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent text-sm cursor-highlight group font-['SF_Pro_Text']"
          >
            <span>Learn more</span>
            <ArrowUpRight size={14} className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
