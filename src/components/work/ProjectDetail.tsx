import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, ChevronRight, Zap, Code2, Layers, Calendar } from 'lucide-react';
import type { Project } from '@/data/projects';
import { projects } from '@/data/projects';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  // Get related projects
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <article className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] blur-[120px] opacity-10"
          style={{ background: `radial-gradient(circle, ${project.accentColor} 0%, transparent 70%)` }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="relative z-10">
        {/* Navigation Bar */}
        <div className="max-w-5xl mx-auto px-6 py-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-mono tracking-wide"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO PROJECTS
          </Link>
        </div>

        {/* Hero Section */}
        <header className="max-w-5xl mx-auto px-6 pt-12 pb-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Visual Block */}
            <div className="w-full md:w-1/3 shrink-0">
              <div
                className="w-full aspect-square rounded-3xl overflow-hidden relative flex items-center justify-center p-8 border border-white/10 shadow-2xl"
                style={{
                  background: `linear-gradient(145deg, ${project.accentColor}22 0%, #16161e 100%)`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-30 blur-2xl"
                  style={{ background: project.accentColor }}
                />
                <div
                  className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl flex items-center justify-center text-4xl sm:text-5xl font-bold text-white shadow-xl"
                  style={{ background: `linear-gradient(135deg, ${project.accentColor} 0%, ${project.accentColor}99 100%)` }}
                >
                  {project.initials}
                </div>
              </div>
            </div>

            {/* Content Text */}
            <div className="w-full md:w-2/3 pt-4">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="px-3 py-1 text-xs font-mono uppercase tracking-widest rounded-full border"
                  style={{ color: project.accentColor, borderColor: `${project.accentColor}44`, background: `${project.accentColor}11` }}
                >
                  {project.category}
                </span>
                <span className="text-white/30 text-sm font-mono">{project.year}</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 tracking-tight">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/50 font-body max-w-2xl leading-relaxed mb-8">
                {project.subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    style={{ background: `linear-gradient(135deg, ${project.accentColor} 0%, ${project.accentColor}bb 100%)`, boxShadow: `0 10px 30px -10px ${project.accentColor}` }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Visit Live Site
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
                    style={{ border: `1px solid ${project.accentColor}44`, background: `${project.accentColor}0d` }}
                  >
                    <Github className="w-5 h-5" />
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Info Grid */}
        <section className="border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {project.client && (
                <div>
                  <div className="flex items-center gap-2 text-white/40 mb-2 font-mono text-xs tracking-widest uppercase">
                    <Layers className="w-4 h-4" /> Client
                  </div>
                  <div className="text-white font-medium">{project.client}</div>
                </div>
              )}
              {project.role && (
                <div>
                  <div className="flex items-center gap-2 text-white/40 mb-2 font-mono text-xs tracking-widest uppercase">
                    <Code2 className="w-4 h-4" /> Role
                  </div>
                  <div className="text-white font-medium">{project.role}</div>
                </div>
              )}
              {project.timeline && (
                <div>
                  <div className="flex items-center gap-2 text-white/40 mb-2 font-mono text-xs tracking-widest uppercase">
                    <Calendar className="w-4 h-4" /> Timeline
                  </div>
                  <div className="text-white font-medium">{project.timeline}</div>
                </div>
              )}
              {/* Tech Stack Summary */}
              <div>
                <div className="flex items-center gap-2 text-white/40 mb-2 font-mono text-xs tracking-widest uppercase">
                  <Zap className="w-4 h-4" /> Stack
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-sm bg-white/10 text-white/70 font-mono">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && <span className="text-[10px] px-2 py-0.5 rounded-sm bg-white/5 text-white/40 font-mono">+{project.tech.length - 3}</span>}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Content */}
        <section className="max-w-4xl mx-auto px-6 py-24 space-y-24">
          
          {/* Main Description */}
          <div>
            <h2 className="text-sm font-mono text-white/40 tracking-widest uppercase mb-8">Overview</h2>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-body">
              {project.description}
            </p>
          </div>

          {/* Detailed Sections Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {project.challenge && (
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10">
                  <span className="text-2xl" style={{ color: project.accentColor }}>01</span>
                </div>
                <h3 className="text-2xl font-display font-medium">The Challenge</h3>
                <p className="text-white/60 leading-relaxed min-h-[100px]">{project.challenge}</p>
              </div>
            )}
            
            {project.solution && (
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10">
                  <span className="text-2xl" style={{ color: project.accentColor }}>02</span>
                </div>
                <h3 className="text-2xl font-display font-medium">The Solution</h3>
                <p className="text-white/60 leading-relaxed min-h-[100px]">{project.solution}</p>
              </div>
            )}
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02]">
              <h2 className="text-2xl font-display font-medium mb-8">Key Features & Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/10" style={{ background: `${project.accentColor}11` }}>
                      <ChevronRight className="w-4 h-4" style={{ color: project.accentColor }} />
                    </div>
                    <p className="text-white/70 pt-1 leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Complete Tech Stack */}
          <div>
            <h2 className="text-sm font-mono text-white/40 tracking-widest uppercase mb-8">Complete Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-3 rounded-xl border font-mono text-sm shadow-sm transition-all hover:-translate-y-1"
                  style={{ borderColor: `${project.accentColor}33`, color: project.accentColor, background: `${project.accentColor}0a` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="border-t border-white/10 bg-[#0d0d13] py-24">
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-3xl font-display font-bold mb-12">More {categoryLabel[project.category] || project.category} Projects</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProjects.map((rp) => (
                  <Link
                    key={rp.id}
                    to={`/work/${rp.slug}`}
                    className="group block p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold mb-6" style={{ background: rp.accentColor, color: '#000' }}>
                      {rp.initials}
                    </div>
                    <h3 className="text-xl font-display font-medium mb-2 group-hover:text-white transition-colors">{rp.title}</h3>
                    <p className="text-white/50 text-sm line-clamp-2">{rp.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-24 px-6 border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6">Let's build something.</h2>
            <p className="text-xl text-white/60 mb-10">Interested in discussing a project or full-time role?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all duration-300 hover:-translate-y-1"
            >
              Get In Touch
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
};

// Helper for category label mapping
const categoryLabel: Record<string, string> = {
  fullstack: "Full-Stack",
  ai: "AI",
  systems: "Systems",
  web: "Web",
};

export default ProjectDetail;
