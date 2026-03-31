
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
      className={`timeline-item relative pl-24 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Animated path progress */}
      <div className="path-container absolute left-8 top-8 bottom-0 w-1 bg-[#64CEFB]/30 overflow-hidden" style={{ height: index === 2 ? '0' : 'calc(100% + 4rem)' }}>
        <div className="path-progress h-full bg-[#64CEFB]"></div>
      </div>

      {/* Glowing dot */}
      <div className="path-dot absolute left-[31px] top-8 w-4 h-4 rounded-full border-2 border-[#64CEFB] bg-black translate-x-[-7px]"></div>

      <div className="mb-1 flex flex-wrap items-center gap-2">
        <h3 className="text-xl font-semibold font-display text-gray-900 dark:text-white">{club.role}</h3>
        <Badge className="font-body" style={{ background: 'rgba(100,206,251,0.1)', color: '#64CEFB', border: '1px solid rgba(100,206,251,0.2)' }}>{club.organization}</Badge>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-white/40 mb-4 font-body">
        <div className="flex items-center gap-1">
          <CalendarIcon className="h-4 w-4" />
          <span>{club.period}</span>
        </div>
      </div>

      <div
        className="glass-card p-6 space-y-4 rounded-xl transition-all duration-500 hover:-translate-y-1"
        style={{
          boxShadow: activeIndex >= index ? 'var(--glow-accent)' : undefined,
          borderColor: activeIndex >= index ? 'rgba(100,206,251,0.3)' : undefined
        }}
      >
        <div className="flex flex-wrap gap-2 mb-2">
          {club.skills.map((skill, idx) => (
            <Badge
              key={idx}
              className={`glass-tag transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              style={{ transitionDelay: `${(index * 150) + (idx * 50) + 100}ms` }}
            >
              {skill}
            </Badge>
          ))}
        </div>

        <div className="pt-2 mt-2 border-t border-black/5 dark:border-white/5">
          <a
            href={club.organizationLink || "https://www.linkedin.com/in/michael-aditya/"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm cursor-highlight group font-body"
            style={{ color: '#64CEFB' }}
          >
            <span className="group-hover:text-gray-900 dark:text-white transition-colors duration-300">Learn more</span>
            <ArrowUpRight size={14} className="ml-1 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gray-900 dark:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};
