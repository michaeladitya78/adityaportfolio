
import { SectionHeading } from "@/components/ui/section-heading";
import { Progress } from "@/components/ui/progress";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

// Updated skill categories with logos
const programmingSkills = [
  { name: "C", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "HTML/CSS", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "JavaScript", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
];

const frameworkSkills = [
  { name: "React.js", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", level: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "VS Code", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

const contentSkills = [
  { name: "Content Writing", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" },
  { name: "SEO Optimization", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Social Media Marketing", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" },
  { name: "WordPress", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Editing & Proofreading", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
];

const softSkills = [
  { name: "Leadership", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Communication", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
  { name: "Team Work", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Problem Solving", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
  { name: "Continuous Learning", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

// SVG icons as fallbacks for content/soft skills
const fallbackIcons: Record<string, string> = {
  "Content Writing": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M4 12h8"></path><path d="M4 16h8"></path><path d="M4 20h8"></path></svg>`,
  "SEO Optimization": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  "Social Media Marketing": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
  "Editing & Proofreading": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`,
  "Leadership": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"></circle><path d="M20 21v-2a7 7 0 0 0-14 0v2"></path></svg>`,
  "Communication": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
  "Team Work": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  "Problem Solving": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  "Continuous Learning": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
};

interface SkillWithIcon {
  name: string;
  level: number;
  icon: string;
}

// Function to determine progress bar color based on skill level
const getSkillLevelColor = (level: number): string => {
  if (level >= 90) return "#20C997"; // Soft teal for expert (Accent 3)
  if (level >= 80) return "#D4AF37"; // Muted gold for advanced (Accent 2)
  if (level >= 60) return "#0077FF"; // Electric blue for intermediate (Accent 1)
  return "#0077FF80";                // Light blue for beginner
};

const SkillCategory = ({ 
  title, 
  skills, 
  isVisible,
  delayOffset = 0
}: { 
  title: string; 
  skills: SkillWithIcon[];
  isVisible: boolean;
  delayOffset?: number;
}) => (
  <div 
    className={`mb-16 transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
    style={{ transitionDelay: `${delayOffset * 100}ms` }}
  >
    <div className="flex items-center gap-3 mb-8">
      <div className="h-px flex-1 bg-dark-800"></div>
      <h3 className="text-xl font-semibold text-gradient whitespace-nowrap">{title}</h3>
      <div className="h-px flex-1 bg-dark-800"></div>
    </div>
    
    {/* Skill Icons Grid with staggered animation */}
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-5 mb-10">
      {skills.map((skill, index) => (
        <div 
          key={`icon-${skill.name}`}
          className={`skill-icon p-4 rounded-lg backdrop-blur-sm bg-background/30 border border-border/30 flex items-center justify-center hover:shadow-md hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-skill-pop' : 'opacity-0'}`}
          style={{ animationDelay: `${(index * 100) + (delayOffset * 50)}ms` }}
        >
          {skill.icon.startsWith('http') ? (
            <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
          ) : skill.icon.startsWith('/') ? (
            <img src={skill.icon} alt={skill.name} className="w-10 h-10" onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.innerHTML = fallbackIcons[skill.name];
            }} />
          ) : (
            <div className="w-10 h-10 text-accent" dangerouslySetInnerHTML={{ __html: fallbackIcons[skill.name] }} />
          )}
        </div>
      ))}
    </div>
    
    {/* Skill Bars with animated progress */}
    <div className="space-y-5">
      {skills.map((skill, index) => (
        <div 
          key={`bar-${skill.name}`} 
          className={`transition-all duration-700 p-3 rounded-lg hover:bg-background/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: `${(index * 100) + (delayOffset * 100) + 300}ms` }}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-foreground">{skill.name}</span>
            <span className="text-sm bg-background/30 px-2 py-0.5 rounded-full text-muted-foreground font-mono">{skill.level}%</span>
          </div>
          <Progress 
            value={isVisible ? skill.level : 0} 
            className="h-2.5 bg-dark-800"
            progressColor={getSkillLevelColor(skill.level)}
          />
        </div>
      ))}
    </div>
  </div>
);

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section 
      id="skills" 
      ref={ref}
      className="section-container bg-darker-gradient relative overflow-hidden py-20"
    >
      {/* Background elements with subtle animations */}
      <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-10"></div>
      
      {/* Glow effects with pulse animation */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#0077FF]/5 rounded-full filter blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-[#20C997]/5 rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="A comprehensive overview of my technical and professional abilities"
        />
        
        <div className="grid grid-cols-1 gap-4">
          <SkillCategory 
            title="Programming Languages" 
            skills={programmingSkills} 
            isVisible={isVisible}
            delayOffset={0}
          />
          <SkillCategory 
            title="Frameworks & Tools" 
            skills={frameworkSkills} 
            isVisible={isVisible}
            delayOffset={4}
          />
          <SkillCategory 
            title="Content Creation" 
            skills={contentSkills} 
            isVisible={isVisible}
            delayOffset={8}
          />
          <SkillCategory 
            title="Soft Skills" 
            skills={softSkills} 
            isVisible={isVisible}
            delayOffset={12}
          />
        </div>
      </div>
    </section>
  );
}
