// components/sections/Experience.tsx
// Professional Experience section.
// Renders a vertical timeline of work experience and a second timeline for
// college clubs & responsibilities. All data is colocated below the component
// since it is only ever used in this one place.

import { SectionHeading } from '@/components/ui/section-heading';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';
import { Briefcase, Users } from 'lucide-react';

// ── Experience data ──────────────────────────────────────────────────────────

interface ExperienceEntry {
  id: number;
  role: string;
  company: string;
  period: string;
  type: string; // e.g. "Full-time", "Internship", "Freelance"
  description: string;
  highlights: string[];
  tech?: string[];
}

const experiences: ExperienceEntry[] = [
  {
    id: 1,
    role: "Product Manager",
    company: "Singh Movers and Packers",
    period: "Aug 2025 - Dec 2025",
    type: "Remote",
    description: "Successfully launched product features supporting logistics operations, coordinating across multiple time zones and stakeholder groups",
    highlights: [
      "Led end-to-end product strategy and operations for logistics technology platform serving Australian market",
      "Managed cross-functional teams across sales, operations, and engineering to deliver product roadmap initiatives",
      "Implemented data-driven decision making processes, improving operational efficiency and customer satisfaction",
      "Spearheaded international sales operations and team management across remote distributed teams"
    ],
    tech: ["Product Management", "Sales Operations", "International Sales", "Team Leadership", "Public Relations"],
  },
  {
    id: 2,
    role: "Product Manager",
    company: "Mangiee",
    period: "April 2025 - Aug 2025",
    type: "Hybrid",
    description: "Delivered user-centric product features that enhanced platform usability and user engagement",
    highlights: [
      "Owned product operations and software product management for food-tech platform",
      "Created detailed wireframes and product specifications for mobile and web applications",
      "Collaborated with engineering teams to prioritize features and manage product backlog",
      "Conducted user research and competitive analysis to inform product decisions",
      "Managed Oracle Database integration and optimization for product features"
    ],
    tech: ["Product Operations", "Software Product Management", "Wireframing", "Oracle Database", "Agile Methodologies"],
  },
  {
    id: 3,
    role: "Product Manager",
    company: "ZenDen",
    period: "Feb 2024 - Nov 2024",
    type: "Remote",
    description: "Successfully launched multiple product iterations based on user feedback and market research",
    highlights: [
      "Drove product vision and strategy for wellness/lifestyle technology platform",
      "Led full product lifecycle from ideation to launch, including requirements gathering and feature prioritization",
      "Coordinated with design, engineering, and marketing teams to ensure successful product delivery",
      "Analyzed user feedback and metrics to iterate on product features and improve user experience",
      "Managed stakeholder communications and product roadmap presentations"
    ],
    tech: ["Product Strategy", "Roadmap Planning", "Cross-functional Collaboration", "User Research", "Data Analytics"],
  },
  {
    id: 4,
    role: "Content Creator",
    company: "Kalvium",
    period: "May 2024 - Aug 2024",
    type: "Remote",
    description: "Produced high-quality educational content that increased platform engagement and organic traffic",
    highlights: [
      "Created SEO-optimized technical content and blog posts for ed-tech platform",
      "Utilized WordPress and Google Docs for content management and collaboration",
      "Designed engaging educational content focused on programming and technology topics",
      "Implemented SEO best practices to improve content discoverability and organic reach"
    ],
    tech: ["SEO", "Content Creation", "WordPress", "Technical Writing", "Content Design", "Google Docs"],
  },
  {
    id: 5,
    role: "Social Media Manager",
    company: "Memeology",
    period: "Sep 2022 - Dec 2023",
    type: "Remote",
    description: "Significantly increased brand visibility and engagement through strategic content planning",
    highlights: [
      "Developed and executed comprehensive social media strategy for digital content brand",
      "Managed content marketing campaigns and advertising initiatives across multiple platforms",
      "Produced and edited video content for social media distribution",
      "Built and maintained online community through consistent content creation and engagement"
    ],
    tech: ["Social Media Strategy", "Content Marketing", "Video Editing", "Public Relations", "Advertising"],
  },
  {
    id: 6,
    role: "Content Writer",
    company: "MoreTasks",
    period: "Mar 2023 - May 2023",
    type: "Remote",
    description: "Delivered high-quality content that improved website SEO performance and user engagement",
    highlights: [
      "Created SEO-optimized web content and copywriting for B2B SaaS platform",
      "Developed content strategy aligned with marketing objectives and target audience needs",
      "Managed web content creation and optimization for improved search rankings"
    ],
    tech: ["SEO Copywriting", "Content Strategy", "Web Content Writing", "Search Engine Optimization"],
  },
  {
    id: 7,
    role: "Team Manager",
    company: "CDX Gaming",
    period: "May 2020 - Dec 2021",
    type: "Remote",
    description: "Managed competitive esports team operations and strategy",
    highlights: [
      "Managed competitive esports team operations and strategy",
      "Coordinated team schedules, practice sessions, and tournament participation",
      "Built team culture and managed player performance"
    ],
    tech: ["Team Management", "eSports Operations", "Leadership", "Strategic Planning"],
  }
];

// ── College clubs data ───────────────────────────────────────────────────────

interface ClubEntry {
  id: number;
  role: string;
  club: string;
  period: string;
  description: string;
  highlights: string[];
}

const collegeClubs: ClubEntry[] = [
  {
    id: 1,
    role: "Content Team",
    club: "Training and Placement Cell, NIT Patna",
    period: "Mar 2024 - Present",
    description: "Contributions to the Training and Placement Cell content strategy and outreach.",
    highlights: ["Data Conversion", "Web Content Writing", "Blogging"],
  },
  {
    id: 2,
    role: "Social Media Team",
    club: "HackSlash",
    period: "Sep 2023 - Sep 2024",
    description: "Core member of the social media strategy and execution team.",
    highlights: ["Social Media Optimization (SMO)", "Social Media Writing", "Media Strategy", "Content Creation", "Social Media Outreach", "Social Media"],
  },
  {
    id: 3,
    role: "Content and Media Team",
    club: "Google Developer Student Clubs NIT Patna",
    period: "Sep 2023 - Sep 2024",
    description: "Managed content creation, media production, and community management.",
    highlights: ["Media Production", "Content Management", "Web Content Creation", "Content Development", "Content Management Systems (CMS)"],
  }
];

// ── Timeline item helpers ────────────────────────────────────────────────────

/** Renders a single experience card with a timeline dot. */
function ExperienceCard({
  entry,
  index,
  isVisible,
  isActive,
}: {
  entry: ExperienceEntry;
  index: number;
  isVisible: boolean;
  isActive: boolean;
}) {
  return (
    <div
      className="timeline-item relative pl-20 pb-12"
      data-index={index}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
        transitionDelay: `${index * 120}ms`,
        transition: 'opacity 700ms ease-out, transform 700ms ease-out',
      }}
    >
      {/* Timeline dot */}
      <div
        className={`path-dot absolute left-5 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
          isActive
            ? 'border-[#64CEFB] bg-[#64CEFB]/20 shadow-[0_0_12px_rgba(100,206,251,0.6)]'
            : 'border-gray-300 dark:border-white/20 bg-white dark:bg-[#0a0a0f]'
        }`}
      >
        <Briefcase size={10} className={isActive ? 'text-[#64CEFB]' : 'text-gray-400 dark:text-white/40'} />
      </div>

      {/* Card */}
      <div className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="text-lg font-bold font-display text-gray-900 dark:text-white">{entry.role}</h3>
            <p className="text-sm text-[#64CEFB] font-semibold">{entry.company}</p>
          </div>
          <div className="flex flex-col items-end gap-1 shrink-0">
            <span className="text-xs font-mono text-gray-500 dark:text-white/50">{entry.period}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#64CEFB]/10 text-[#64CEFB] border border-[#64CEFB]/20">
              {entry.type}
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed mb-3 font-body">
          {entry.description}
        </p>

        <ul className="space-y-1 mb-4">
          {entry.highlights.map((h) => (
            <li key={h} className="text-sm text-gray-600 dark:text-white/65 flex items-start gap-2">
              <span className="text-[#64CEFB] mt-1.5 shrink-0">·</span>
              {h}
            </li>
          ))}
        </ul>

        {entry.tech && (
          <div className="flex flex-wrap gap-2">
            {entry.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/60 border border-gray-200 dark:border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/** Renders a single college club card with a timeline dot. */
function ClubCard({
  entry,
  index,
  isVisible,
  isActive,
}: {
  entry: ClubEntry;
  index: number;
  isVisible: boolean;
  isActive: boolean;
}) {
  return (
    <div
      className="timeline-item relative pl-20 pb-12"
      data-index={index}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
        transitionDelay: `${index * 120}ms`,
        transition: 'opacity 700ms ease-out, transform 700ms ease-out',
      }}
    >
      {/* Timeline dot */}
      <div
        className={`path-dot absolute left-5 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
          isActive
            ? 'border-[#6366F1] bg-[#6366F1]/20 shadow-[0_0_12px_rgba(99,102,241,0.6)]'
            : 'border-gray-300 dark:border-white/20 bg-white dark:bg-[#0a0a0f]'
        }`}
      >
        <Users size={10} className={isActive ? 'text-[#6366F1]' : 'text-gray-400 dark:text-white/40'} />
      </div>

      {/* Card */}
      <div className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="text-lg font-bold font-display text-gray-900 dark:text-white">{entry.role}</h3>
            <p className="text-sm text-[#6366F1] font-semibold">{entry.club}</p>
          </div>
          <span className="text-xs font-mono text-gray-500 dark:text-white/50 shrink-0">{entry.period}</span>
        </div>

        <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed mb-3 font-body">
          {entry.description}
        </p>

        <ul className="space-y-1">
          {entry.highlights.map((h) => (
            <li key={h} className="text-sm text-gray-600 dark:text-white/65 flex items-start gap-2">
              <span className="text-[#6366F1] mt-1.5 shrink-0">·</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const clubsTimelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeClubIndex, setActiveClubIndex] = useState(-1);

  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  // Activate the timeline dot of whichever card is centered in the viewport.
  useEffect(() => {
    const setupObserver = (
      containerRef: React.RefObject<HTMLDivElement>,
      setActive: (i: number) => void
    ) => {
      if (!containerRef.current) return () => {};
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const idx = parseInt(entry.target.getAttribute('data-index') ?? '-1');
              setActive(idx);
              (entry.target.querySelector('.path-dot') as HTMLElement | null)
                ?.classList.add('animate-path-glow');
            }
          });
        },
        { threshold: 0.5 }
      );
      const items = containerRef.current.querySelectorAll('.timeline-item');
      items.forEach((item) => observer.observe(item));
      return () => items.forEach((item) => observer.unobserve(item));
    };

    const cleanupExp = setupObserver(timelineRef, setActiveIndex);
    const cleanupClub = setupObserver(clubsTimelineRef, setActiveClubIndex);
    return () => { cleanupExp(); cleanupClub(); };
  }, [isVisible]);

  return (
    <section
      id="experience"
      ref={ref}
      className="section-container py-24 relative overflow-hidden transition-colors duration-300"
    >
      {/* Ambient background blobs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full blur-[100px] opacity-20 dark:opacity-10 pointer-events-none" style={{ background: '#6366f1' }} />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full blur-[100px] opacity-20 dark:opacity-10 pointer-events-none" style={{ background: '#06b6d4' }} />

      <div className="max-w-4xl mx-auto relative z-10 text-gray-900 dark:text-white">
        <SectionHeading
          title="Professional Experience"
          subtitle="My journey building products, leading teams, and engineering solutions"
        />

        {/* Work experience timeline */}
        <div className="relative mt-16" ref={timelineRef}>
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-white/5" />
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              entry={exp}
              index={index}
              isVisible={isVisible}
              isActive={activeIndex >= index}
            />
          ))}
        </div>

        {/* College clubs timeline */}
        <div className="mt-24" id="college-clubs">
          <SectionHeading
            title="College Clubs & Responsibilities"
            subtitle="Extracurricular activities that shaped my skills and leadership"
            className="mt-16"
          />
          <div className="relative mt-16" ref={clubsTimelineRef}>
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-white/5" />
            {collegeClubs.map((club, index) => (
              <ClubCard
                key={club.id}
                entry={club}
                index={index}
                isVisible={isVisible}
                isActive={activeClubIndex >= index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
