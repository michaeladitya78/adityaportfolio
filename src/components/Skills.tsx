import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";

/* ─────────────────────────────────────────────
   SVG Icons (inline so they're always visible)
───────────────────────────────────────────── */
const IconBot = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <path d="M12 2v4M8 11V9a4 4 0 0 1 8 0v2" />
    <circle cx="9" cy="16" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="16" r="1" fill="currentColor" stroke="none" />
    <path d="M6 11h.01M18 11h.01" />
  </svg>
);

const IconCode = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="12.01" strokeWidth={2.5} />
    <path d="M2 12h20" />
  </svg>
);

const IconTrending = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const IconMegaphone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M3 11l19-9-9 19-2-8-8-2z" />
  </svg>
);

/* ─────────────────────────────────────────────
   Animated Progress Bar
───────────────────────────────────────────── */
function SkillBar({
  name,
  pct,
  color,
  animate,
  delay = 0,
  iconCode,
}: {
  name: string;
  pct: number;
  color: string;
  animate: boolean;
  delay?: number;
  iconCode?: string;
}) {
  const width = animate ? pct : 0;

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          {iconCode ? (
             <img 
               src={`https://skillicons.dev/icons?i=${iconCode}&theme=dark`} 
               alt={name} 
               className="h-6 transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-110 drop-shadow-md" 
             />
          ) : (
             <div 
               className="w-6 h-6 rounded flex items-center justify-center font-bold text-[10px] uppercase transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
               style={{ background: `${color}18`, color, border: `1px solid ${color}40` }}
             >
               {name.charAt(0)}
             </div>
          )}
          <span
            className="text-sm font-medium transition-colors"
            style={{ color: "hsl(var(--foreground))" }}
          >
            {name}
          </span>
        </div>
        <span
          className="text-xs font-bold tabular-nums px-2 py-0.5 rounded-full transition-all"
          style={{
            color: color,
            background: `${color}18`,
            border: `1px solid ${color}40`,
          }}
        >
          {pct}%
        </span>
      </div>
      <div
        className="h-2 w-full rounded-full overflow-hidden"
        style={{ background: "hsl(var(--border) / 0.5)" }}
      >
        <div
          className="h-full rounded-full relative overflow-hidden"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}cc, ${color})`,
            transition: `width 1.1s cubic-bezier(0.34,1.1,0.64,1) ${delay}ms`,
            boxShadow: `0 0 8px ${color}55`,
          }}
        >
          {/* shimmer */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
              animation: "shimmer 2.2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Category Card
───────────────────────────────────────────── */
function CategoryCard({
  icon,
  title,
  color,
  skills,
  isVisible,
  delay,
  defaultShow = 5,
}: {
  icon: React.ReactNode;
  title: string;
  color: string;
  skills: { name: string; pct: number; iconCode?: string }[];
  isVisible: boolean;
  delay: number;
  defaultShow?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? skills : skills.slice(0, defaultShow);
  const hasMore = skills.length > defaultShow;

  return (
    <div
      className="rounded-2xl p-6 transition-all duration-700 hover:shadow-xl"
      style={{
        background: "hsl(var(--card))",
        border: `1px solid hsl(var(--border))`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${delay}ms`,
        boxShadow: isVisible ? `0 4px 32px ${color}0d` : "none",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: `${color}18`,
            border: `1.5px solid ${color}40`,
            color: color,
          }}
        >
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-base" style={{ color: "hsl(var(--foreground))" }}>
            {title}
          </h3>
          <p className="text-xs mt-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>
            {skills.length} skill{skills.length !== 1 ? "s" : ""}
          </p>
        </div>
        {/* mini color accent strip */}
        <div className="ml-auto w-10 h-1.5 rounded-full opacity-60" style={{ background: color }} />
      </div>

      {/* Skill bars */}
      <div className="space-y-3.5">
        {visible.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            pct={skill.pct}
            color={color}
            animate={isVisible}
            delay={delay + i * 60}
            iconCode={skill.iconCode}
          />
        ))}
      </div>

      {/* Expand toggle */}
      {hasMore && (
        <button
          onClick={() => setExpanded((p) => !p)}
          className="mt-4 flex items-center gap-1 text-xs font-semibold transition-colors"
          style={{ color: color }}
        >
          {expanded ? (
            <>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><polyline points="18 15 12 9 6 15" /></svg>
              Show less
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><polyline points="6 9 12 15 18 9" /></svg>
              +{skills.length - defaultShow} more skills
            </>
          )}
        </button>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Skills Component
───────────────────────────────────────────── */
export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  // Accent colors per category (visible on both light/dark)
  const COLORS = {
    ai: "#3B82F6",        // blue
    dev: "#8B5CF6",       // purple
    pm: "#10B981",        // emerald
    finance: "#F59E0B",   // amber
    marketing: "#EC4899", // pink
  };

  const categories = [
    {
      icon: <IconBot />,
      title: "AI & Machine Learning",
      color: COLORS.ai,
      skills: [
        { name: "Python", pct: 92, iconCode: "py" },
        { name: "TensorFlow / Keras", pct: 85, iconCode: "tensorflow" },
        { name: "PyTorch", pct: 80, iconCode: "pytorch" },
        { name: "Scikit-learn", pct: 88, iconCode: "scikitlearn" },
        { name: "OpenAI APIs", pct: 90 },
        { name: "LangChain", pct: 78 },
        { name: "Hugging Face", pct: 75 },
        { name: "RAG Systems", pct: 72 },
        { name: "Sentiment Analysis", pct: 82 },
        { name: "Pandas / NumPy", pct: 90 },
      ],
    },
    {
      icon: <IconCode />,
      title: "Software Development",
      color: COLORS.dev,
      skills: [
        { name: "React.js", pct: 88, iconCode: "react" },
        { name: "TypeScript", pct: 82, iconCode: "ts" },
        { name: "Next.js", pct: 78, iconCode: "nextjs" },
        { name: "Tailwind CSS", pct: 90, iconCode: "tailwind" },
        { name: "Node.js", pct: 85, iconCode: "nodejs" },
        { name: "FastAPI", pct: 80, iconCode: "fastapi" },
        { name: "Flask", pct: 78, iconCode: "flask" },
        { name: "PostgreSQL / MongoDB", pct: 80, iconCode: "postgres,mongodb" },
        { name: "Firebase", pct: 76, iconCode: "firebase" },
        { name: "AWS", pct: 60, iconCode: "aws" },
      ],
    },
    {
      icon: <IconBriefcase />,
      title: "Product Management",
      color: COLORS.pm,
      skills: [
        { name: "Product Strategy", pct: 88 },
        { name: "Roadmapping", pct: 85 },
        { name: "Agile / Scrum", pct: 90 },
        { name: "User Research", pct: 80 },
        { name: "JIRA / Confluence", pct: 85, iconCode: "jira" },
        { name: "Figma Prototyping", pct: 75, iconCode: "figma" },
        { name: "A/B Testing", pct: 72 },
        { name: "Stakeholder Mgmt", pct: 82 },
      ],
    },
    {
      icon: <IconTrending />,
      title: "Finance & Analytics",
      color: COLORS.finance,
      skills: [
        { name: "Statistical Analysis", pct: 85 },
        { name: "Financial Modeling", pct: 78 },
        { name: "Excel / VBA", pct: 80 },
        { name: "Matplotlib / Plotly", pct: 82 },
        { name: "Quantitative Analysis", pct: 76 },
      ],
    },
    {
      icon: <IconMegaphone />,
      title: "Content & Marketing",
      color: COLORS.marketing,
      skills: [
        { name: "SEO (Ahrefs)", pct: 65 },
        { name: "WordPress / CMS", pct: 70, iconCode: "wordpress" },
        { name: "Social Media Mgmt", pct: 68 },
        { name: "Video Editing", pct: 60, iconCode: "pr,ae" },
      ],
    },
  ];

  return (
    <>
      {/* shimmer keyframe */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>

      <section
        id="skills"
        ref={ref}
        className="relative overflow-hidden py-24"
        style={{ background: "hsl(var(--background))" }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-5 pointer-events-none" />
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: `${COLORS.ai}0a` }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: `${COLORS.dev}0a` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <div
            className="text-center mb-16 transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5"
              style={{
                borderColor: `${COLORS.ai}40`,
                background: `${COLORS.ai}0d`,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: COLORS.ai }} />
              <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: COLORS.ai }}>
                Technical Arsenal
              </span>
            </div>

            <h2
              className="font-display font-bold mb-4"
              style={{
                fontSize: "clamp(2rem, 4vw + 0.5rem, 3.5rem)",
                lineHeight: 1.1,
                color: "hsl(var(--foreground))",
              }}
            >
              Skills that{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${COLORS.ai}, ${COLORS.dev})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ship Products
              </span>
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
              A meticulously curated stack of technologies and methodologies refined through real-world product engineering, AI research, and rapid prototyping.
            </p>

            {/* Category legend dots */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-6">
              {categories.map((cat) => (
                <span key={cat.title} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                  {cat.title}
                </span>
              ))}
            </div>
          </div>

          {/* Grid: 2 columns on md+, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <CategoryCard
                key={cat.title}
                icon={cat.icon}
                title={cat.title}
                color={cat.color}
                skills={cat.skills}
                isVisible={isVisible}
                delay={idx * 100}
                defaultShow={5}
              />
            ))}
          </div>

          {/* Bottom legend */}
          <div
            className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs transition-all duration-700"
            style={{
              color: "hsl(var(--muted-foreground))",
              opacity: isVisible ? 1 : 0,
              transitionDelay: "600ms",
            }}
          >
            <span className="flex items-center gap-2">
              <span className="inline-block w-8 h-1.5 rounded-full" style={{ background: "linear-gradient(90deg, hsl(var(--accent))cc, hsl(var(--accent)))" }} />
              90–100% — Expert
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-8 h-1.5 rounded-full opacity-70" style={{ background: "hsl(var(--accent))" }} />
              75–89% — Proficient
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-8 h-1.5 rounded-full opacity-40" style={{ background: "hsl(var(--accent))" }} />
              60–74% — Familiar
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
