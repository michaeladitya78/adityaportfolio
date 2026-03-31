import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  SiPython, SiTensorflow, SiKeras, SiScikitlearn, SiOpenai, SiLangchain, SiPytorch, SiHuggingface, SiPandas, SiNumpy,
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs, SiFastapi, SiPostgresql, SiHaskell, SiCplusplus, SiNvidia, SiDocker, SiVercel,
  SiJira, SiFigma, SiFramer,
  SiWordpress, SiGoogleanalytics, SiSemrush
} from "react-icons/si";
import { FaAws, FaChartLine, FaSearch, FaProjectDiagram, FaVideo, FaFileExcel } from "react-icons/fa";

/* ── Skills Data ───────────────────────────────────────────────────────── */
const ALL_SKILLS = [
  // AI/ML
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'Keras', icon: SiKeras, color: '#D00000' },
  { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
  { name: 'OpenAI', icon: SiOpenai, color: '#412991' },
  { name: 'LangChain', icon: SiLangchain, color: '#1C3C3C' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
  { name: 'Hugging Face', icon: SiHuggingface, color: '#FFD21E' },
  { name: 'Pandas', icon: SiPandas, color: '#150458' },
  { name: 'NumPy', icon: SiNumpy, color: '#013243' },
  // Dev & Compute
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'AWS', icon: FaAws, color: '#232F3E' },
  { name: 'Haskell', icon: SiHaskell, color: '#5e5086' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'CUDA', icon: SiNvidia, color: '#76B900' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  // Product & Finance
  { name: 'Jira', icon: SiJira, color: '#0052CC' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Framer', icon: SiFramer, color: '#0055FF' },
  { name: 'Excel', icon: FaFileExcel, color: '#217346' },
  { name: 'Financial Modeling', icon: FaChartLine, color: '#10B981' },
  { name: 'Quantitative Analysis', icon: FaSearch, color: '#6366F1' },
  { name: 'Agile/Scrum', icon: FaProjectDiagram, color: '#F59E0B' },
  // Content & Growth
  { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
  { name: 'SEO', icon: SiSemrush, color: '#FF642D' },
  { name: 'Google Analytics', icon: SiGoogleanalytics, color: '#E37400' },
  { name: 'Video Editing', icon: FaVideo, color: '#EC4899' },
];

/* Partition into 5 rows with deterministic pseudo-randomization */
const rows = [
  ALL_SKILLS.slice(0, 7),
  ALL_SKILLS.slice(7, 14),
  ALL_SKILLS.slice(14, 21),
  ALL_SKILLS.slice(21, 28),
  ALL_SKILLS.slice(28, 34).concat(ALL_SKILLS.slice(0, 1)), // Pad last row slightly
];

const SIZES = [
  'w-14 h-14 md:w-16 md:h-16 text-3xl',
  'w-12 h-12 md:w-14 md:h-14 text-2xl',
  'w-16 h-16 md:w-20 md:h-20 text-4xl'
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  return (
    <>
      <style>{`
        @keyframes marquee-horizontal {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-marquee-1 { animation: marquee-horizontal 45s linear infinite; }
        .animate-marquee-2 { animation: marquee-horizontal 55s linear infinite; }
        .animate-marquee-3 { animation: marquee-horizontal 40s linear infinite; }
        .animate-marquee-4 { animation: marquee-horizontal 50s linear infinite; }
        .animate-marquee-5 { animation: marquee-horizontal 60s linear infinite; }
        
        @keyframes float-icon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-icon {
          animation: float-icon 4s ease-in-out infinite;
        }
      `}</style>

      <section
        id="skills"
        ref={ref}
        className="py-24 relative overflow-hidden bg-background dark:bg-[#0B1120] transition-colors duration-500"
      >
        {/* Background Gradients */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Skills & Expertise"
            subtitle="A curated stack refined through real-world product engineering, AI research, and rapid prototyping."
            className="text-center"
          />

          <div
            className="mt-16 flex flex-col gap-6 md:gap-8 relative w-full overflow-hidden"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 1s ease-out, transform 1s ease-out",
            }}
          >
            {/* Vignettes for smooth fade on left/right edges */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background dark:from-[#0B1120] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background dark:from-[#0B1120] to-transparent z-20 pointer-events-none" />

            {rows.map((row, rowIndex) => {
              // Duplicate the row enough times to fill more than screen width. 4 copies is usually plenty.
              const extendedRow = [...row, ...row, ...row, ...row];

              const iconSet = extendedRow.map((skill, index) => {
                const Icon = skill.icon;
                const sizeClass = SIZES[(rowIndex + index) % SIZES.length];
                
                return (
                  <div
                    key={`${rowIndex}-${index}`}
                    className="relative flex flex-col items-center justify-center group shrink-0"
                  >
                    <div
                      className={`flex items-center justify-center bg-gray-100 dark:bg-[#151c2f] backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-2xl md:rounded-3xl shadow-lg transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-110 animate-float-icon ${sizeClass}`}
                      style={{ animationDelay: `${(index % 5) * 0.4}s` }}
                    >
                      <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                           style={{ boxShadow: '0 0 20px rgba(168,85,247,0.3), inset 0 0 20px rgba(249,115,22,0.1)' }} 
                      />
                      <Icon 
                        className="transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]" 
                        style={{ color: skill.color }} 
                      />
                    </div>
                    <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
                      <span className="whitespace-nowrap bg-black/80 dark:bg-white/90 text-white dark:text-black text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-xl">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                );
              });

              return (
                <div key={rowIndex} className="w-full flex items-center overflow-hidden">
                  <div className={`flex w-max animate-marquee-${rowIndex + 1} hover:[animation-play-state:paused]`}>
                    <div className="flex gap-6 md:gap-10 pr-6 md:pr-10 shrink-0">
                      {iconSet}
                    </div>
                    <div className="flex gap-6 md:gap-10 pr-6 md:pr-10 shrink-0" aria-hidden="true">
                      {iconSet}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
