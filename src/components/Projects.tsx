import { Badge } from "@/components/ui/badge";
import {
  ExternalLink, Github, ChevronRight, ArrowUpRight,
  Cpu, Globe, Boxes, Zap, Bot, Monitor,
  Play, Eye, Star, Calendar, Clock, User2
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { projects, categories, categoryMap, type Project } from "@/data/projects";

/* ─── Category icon map ─────────────────────────────────────────────────── */
const CategoryIcon: Record<string, React.ReactNode> = {
  ai:       <Bot size={13} />,
  fullstack:<Boxes size={13} />,
  web:      <Globe size={13} />,
  systems:  <Cpu size={13} />,
};

/* ─── Tech color map (curated) ──────────────────────────────────────────── */
const TECH_COLORS: Record<string, { bg: string; text: string }> = {
  "React"           : { bg: "#61DAFB18", text: "#06B6D4" },
  "TypeScript"      : { bg: "#3178C618", text: "#3178C6" },
  "Python"          : { bg: "#3776AB18", text: "#3776AB" },
  "Firebase"        : { bg: "#FFCA2818", text: "#F57C00" },
  "Next.js"         : { bg: "#00000018", text: "#888" },
  "Tailwind CSS"    : { bg: "#06B6D418", text: "#0891B2" },
  "Node.js"         : { bg: "#3C873A18", text: "#3C873A" },
  "Three.js"        : { bg: "#00000018", text: "#888" },
  "C++"             : { bg: "#00549D18", text: "#00549D" },
  "SDL2"            : { bg: "#17406D18", text: "#17406D" },
  "GenKit AI"       : { bg: "#4285F418", text: "#4285F4" },
  "discord.js"      : { bg: "#5865F218", text: "#5865F2" },
  "Reddit API"      : { bg: "#FF451918", text: "#FF4500" },
};

function getTechStyle(tech: string, accent: string) {
  return TECH_COLORS[tech] ?? { bg: `${accent}14`, text: accent };
}

/* ─── Live Preview Pane ─────────────────────────────────────────────────── */
function LivePreview({ url, accent, title }: { url: string; accent: string; title: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div
      className="absolute inset-0 z-20 overflow-hidden"
      style={{ borderRadius: "inherit" }}
    >
      {/* Iframe preview */}
      <iframe
        ref={iframeRef}
        src={url}
        title={`${title} preview`}
        sandbox="allow-scripts allow-same-origin"
        scrolling="no"
        className="w-full h-full border-0 pointer-events-none"
        style={{
          transform: "scale(0.45)",
          transformOrigin: "top left",
          width: "222%",
          height: "222%",
        }}
      />
      {/* Gradient overlay so bottom content is still readable */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, transparent 40%, ${accent}dd 100%)`,
        }}
      />
      {/* "Live preview" badge */}
      <div
        className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm"
        style={{ background: `${accent}cc` }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        Live Preview
      </div>
    </div>
  );
}

/* ─── Static gradient placeholder (no live URL) ─────────────────────────── */
function GradientPlaceholder({ project }: { project: Project }) {
  return (
    <div className="absolute inset-0 z-10">
      {/* Animated gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 30% 30%, ${project.accentColor}30 0%, transparent 60%),
                       radial-gradient(ellipse at 70% 70%, ${project.accentColor}20 0%, transparent 60%)`,
        }}
      />
      {/* Floating initials */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-20 h-20 rounded-3xl flex items-center justify-center text-2xl font-black text-white shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${project.accentColor} 0%, ${project.accentColor}99 100%)`,
            boxShadow: `0 20px 60px ${project.accentColor}55`,
          }}
        >
          {project.initials}
        </div>
      </div>
    </div>
  );
}

/* ─── Project Card ──────────────────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  isVisible,
  onClick,
}: {
  project: Project;
  index: number;
  isVisible: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [previewReady, setPreviewReady] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Delayed preview load — show after 400ms hover
  useEffect(() => {
    if (hovered && project.liveUrl) {
      hoverTimer.current = setTimeout(() => setPreviewReady(true), 400);
    } else {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
      setPreviewReady(false);
    }
    return () => { if (hoverTimer.current) clearTimeout(hoverTimer.current); };
  }, [hovered, project.liveUrl]);

  const showPreview = hovered && previewReady && !!project.liveUrl;

  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-card group cursor-pointer overflow-hidden transition-all duration-500"
      style={{
        borderColor: hovered ? `${project.accentColor}70` : undefined,
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? hovered ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)"
          : "translateY(32px)",
        transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
        boxShadow: hovered
          ? `0 24px 64px ${project.accentColor}22, var(--glow-accent)`
          : undefined,
        willChange: "transform",
      }}
    >
      {/* ── Card thumbnail area ── */}
      <div
        className="relative overflow-hidden"
        style={{ height: 200 }}
      >
        {/* Base gradient always present */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${project.accentColor}12 0%, ${project.accentColor}35 100%)`,
          }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff22 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* Static placeholder (always visible under preview) */}
        <GradientPlaceholder project={project} />

        {/* Live preview (overlaid on hover after delay) */}
        {project.liveUrl && (
          <div
            className="absolute inset-0 z-20 transition-opacity duration-500"
            style={{ opacity: showPreview ? 1 : 0, pointerEvents: "none" }}
          >
            {(hovered || previewReady) && (
              <LivePreview url={project.liveUrl} accent={project.accentColor} title={project.title} />
            )}
          </div>
        )}

        {/* Hover overlay — "hover to preview" hint */}
        {project.liveUrl && !showPreview && hovered && (
          <div
            className="absolute inset-0 z-30 flex items-center justify-center transition-opacity duration-300"
            style={{ pointerEvents: "none" }}
          >
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white backdrop-blur-md"
              style={{ background: `${project.accentColor}cc` }}
            >
              <Eye size={13} className="animate-pulse" />
              Loading preview…
            </div>
          </div>
        )}

        {/* Top badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-40 pointer-events-none">
          <div className="flex items-center gap-2">
            {project.featured && (
              <span
                className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-semibold text-white"
                style={{ background: `${project.accentColor}ee` }}
              >
                <Star size={10} fill="currentColor" /> Featured
              </span>
            )}
            <span
              className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium backdrop-blur-sm"
              style={{
                background: `${project.accentColor}22`,
                color: project.accentColor,
                border: `1px solid ${project.accentColor}35`,
              }}
            >
              {CategoryIcon[project.category]}
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
          </div>
          <span
            className="text-xs px-2 py-0.5 rounded-full font-mono backdrop-blur-sm"
            style={{
              background: "hsl(var(--card) / 0.8)",
              color: "hsl(var(--muted-foreground))",
              border: "1px solid hsl(var(--border))",
            }}
          >
            {project.year}
          </span>
        </div>

        {/* Play icon center-bottom when no preview active */}
        {project.liveUrl && !hovered && (
          <div
            className="absolute inset-0 z-30 flex items-end justify-center pb-3 opacity-0 group-hover:opacity-0 pointer-events-none"
          />
        )}
        {!project.liveUrl && (
          <div className="absolute bottom-3 right-3 z-30 pointer-events-none">
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ background: "hsl(var(--card) / 0.7)", color: "hsl(var(--muted-foreground))", border: "1px solid hsl(var(--border) / 0.5)" }}
            >
              No live demo
            </span>
          </div>
        )}
      </div>

      {/* ── Card body ── */}
      <div className="p-5">
        {/* Title + subtitle */}
        <div className="mb-3">
          <h3
            className="text-base font-bold font-display leading-tight transition-colors"
            style={{ color: hovered ? project.accentColor : "hsl(var(--foreground))" }}
          >
            {project.title}
          </h3>
          <p className="text-xs mt-0.5 font-mono" style={{ color: "hsl(var(--muted-foreground))" }}>
            {project.subtitle}
          </p>
        </div>

        <p className="text-sm leading-relaxed mb-4 line-clamp-2 font-body" style={{ color: "hsl(var(--muted-foreground))" }}>
          {project.excerpt}
        </p>

        {/* Meta row */}
        {(project.role || project.timeline) && (
          <div className="flex flex-wrap gap-3 mb-4 text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
            {project.role && (
              <span className="flex items-center gap-1">
                <User2 size={11} />
                {project.role}
              </span>
            )}
            {project.timeline && (
              <span className="flex items-center gap-1">
                <Clock size={11} />
                {project.timeline}
              </span>
            )}
          </div>
        )}

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t, i) => {
            const style = getTechStyle(t, project.accentColor);
            return (
              <span
                key={i}
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ background: style.bg, color: style.text, border: `1px solid ${style.text}25` }}
              >
                {t}
              </span>
            );
          })}
          {project.tech.length > 4 && (
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ background: "hsl(var(--muted) / 0.5)", color: "hsl(var(--muted-foreground))", border: "1px solid hsl(var(--border))" }}
            >
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* CTA row */}
        <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "hsl(var(--border))" }}>
          <span
            className="flex items-center gap-1 text-xs font-semibold transition-all duration-200 group-hover:gap-1.5"
            style={{ color: project.accentColor }}
          >
            View Details <ChevronRight size={13} />
          </span>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="Open live site"
                className="w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110"
                style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = project.accentColor; e.currentTarget.style.color = project.accentColor; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "hsl(var(--border))"; e.currentTarget.style.color = "hsl(var(--muted-foreground))"; }}
              >
                <ArrowUpRight size={12} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="View source"
                className="w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-110"
                style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = project.accentColor; e.currentTarget.style.color = project.accentColor; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "hsl(var(--border))"; e.currentTarget.style.color = "hsl(var(--muted-foreground))"; }}
              >
                <Github size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─── Section ───────────────────────────────────────────────────────────── */
export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("All");
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === categoryMap[activeCategory]);

  const featuredCount = projects.filter((p) => p.featured).length;

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ background: "hsl(var(--background))" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.4,
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(217 91% 60% / 0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(250 91% 65% / 0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section header ── */}
        <div
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)" }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5"
            style={{ borderColor: "hsl(var(--accent) / 0.35)", background: "hsl(var(--accent) / 0.07)" }}
          >
            <Monitor size={12} style={{ color: "hsl(var(--accent))" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "hsl(var(--accent))" }}>
              Client Work
            </span>
          </div>

          <h2
            className="font-display font-bold tracking-tight mb-3"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.15, color: "hsl(var(--foreground))" }}
          >
            Projects &amp;{" "}
            <span style={{
              background: "linear-gradient(135deg, hsl(var(--accent)), hsl(250 91% 65%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Case Studies
            </span>
          </h2>
          <p className="text-base max-w-xl mx-auto mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
            Freelance MVPs built for real clients. Hover a card to see a live preview.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm mb-8"
            style={{ color: "hsl(var(--muted-foreground))" }}>
            <span className="flex items-center gap-1.5">
              <Zap size={13} style={{ color: "hsl(var(--accent))" }} />
              {projects.length} projects
            </span>
            <span className="w-1 h-1 rounded-full" style={{ background: "hsl(var(--border))" }} />
            <span className="flex items-center gap-1.5">
              <Star size={13} style={{ color: "#F59E0B" }} fill="#F59E0B" />
              {featuredCount} featured
            </span>
            <span className="w-1 h-1 rounded-full" style={{ background: "hsl(var(--border))" }} />
            <span className="flex items-center gap-1.5">
              <Eye size={13} />
              Hover to preview live sites
            </span>
          </div>
        </div>

        {/* ── Category filters ── */}
        <div
          className="flex flex-wrap gap-2 justify-center mb-12 transition-all duration-700"
          style={{ opacity: isVisible ? 1 : 0, transitionDelay: "150ms" }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 hover:scale-[1.03] active:scale-95"
                style={
                  isActive
                    ? {
                        background: "hsl(var(--accent))",
                        color: "hsl(var(--accent-foreground))",
                        borderColor: "transparent",
                        boxShadow: "0 0 20px hsl(var(--accent) / 0.3)",
                      }
                    : {
                        background: "hsl(var(--card))",
                        borderColor: "hsl(var(--border))",
                        color: "hsl(var(--muted-foreground))",
                      }
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ── Project grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
              onClick={() => navigate(`/work/${project.slug}`)}
            />
          ))}
        </div>

        {/* ── Footer note ── */}
        <p
          className="text-center text-xs mt-12 transition-all duration-700"
          style={{ color: "hsl(var(--muted-foreground) / 0.6)", opacity: isVisible ? 1 : 0, transitionDelay: "600ms" }}
        >
          Click any card for full case study · Hover to load live site preview · All projects are real client MVPs
        </p>
      </div>

      {/* Global shimmer keyframe */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .project-card-preview-enter { animation: previewFadeIn 0.5s ease forwards; }
          @keyframes previewFadeIn { from { opacity: 0; } to { opacity: 1; } }
        }
      `}</style>
    </section>
  );
}
