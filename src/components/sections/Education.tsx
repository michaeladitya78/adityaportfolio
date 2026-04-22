// components/sections/Education.tsx
// Education & Achievements section.
// Displays academic education, certifications/achievements, and a summary
// of ongoing learning activities. All data is colocated below the component
// since it is only ever used in this one place.

import { SectionHeading } from '@/components/ui/section-heading';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { BookOpen, Award, Code2, Brain, Cpu } from 'lucide-react';

// ── Education data ──────────────────────────────────────────────────────────

interface EducationEntry {
  id: number;
  institution: string;
  degree: string;
  field: string;
  period: string;
  grade?: string;
  highlights: string[];
}

const educationData: EducationEntry[] = [
  {
    id: 1,
    institution: "National Institute of Technology (NIT) Patna",
    degree: "Dual Degree Bachelor and Masters of Technology (B.Tech + M.Tech)",
    field: "Mathematics and Computing Technology",
    period: "2022 - 2027 (Expected)",
    highlights: [
      "Data Structures",
      "Design and Analysis of Algorithms",
      "Object Oriented Programming",
      "Database and Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Artificial Intelligence and Machine Learning",
      "Digital Logic and Computer Organization",
      "Differential Equations and Linear Algebra",
      "Discrete Mathematics",
      "Probability and Statistics",
      "Optimization Techniques",
      "Graph Theory and Applications",
      "Statistical Simulation and Data Analysis",
      "Cryptography"
    ],
  },
];

// ── Achievement data ─────────────────────────────────────────────────────────

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: '5+ Products Shipped',
    description: 'Built and launched real MVPs for clients across logistics, food-tech, and wellness.',
    icon: <Code2 className="h-5 w-5" />,
    color: '#64CEFB',
  },
  {
    id: 2,
    title: '4+ PM Roles',
    description: 'Managed product roadmaps and cross-functional teams across multiple industries.',
    icon: <Award className="h-5 w-5" />,
    color: '#6366F1',
  },
  {
    id: 3,
    title: 'AI/ML Research',
    description: 'Trained models with TensorFlow and PyTorch; built LangChain-based AI agents.',
    icon: <Brain className="h-5 w-5" />,
    color: '#10B981',
  },
  {
    id: 4,
    title: '100+ Content Pieces',
    description: 'Created technical and marketing content for global audiences.',
    icon: <Cpu className="h-5 w-5" />,
    color: '#F59E0B',
  },
];

// ── Learning journey tags ────────────────────────────────────────────────────

const learningTopics = [
  'Advanced LLM Fine-tuning',
  'MLOps & Model Deployment',
  'System Design at Scale',
  'Quantitative Finance',
  'Distributed Systems',
  'Product-Led Growth',
];

// ── Component ────────────────────────────────────────────────────────────────

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  return (
    <section id="education" ref={ref} className="section-container py-24 relative">
      {/* Ambient background blobs */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-muted/5 rounded-full filter blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          title="Education & Achievements"
          subtitle="My academic journey and notable accomplishments"
        />

        {/* Education cards */}
        <div className="grid grid-cols-1 gap-6 mb-16">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className="glass-card p-8 transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#64CEFB]/10 border border-[#64CEFB]/20 flex items-center justify-center shrink-0">
                  <BookOpen className="h-6 w-6 text-[#64CEFB]" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <span className="text-sm font-mono text-gray-500 dark:text-white/50">{edu.period}</span>
                  </div>
                  <p className="text-base text-[#64CEFB] font-semibold mb-1">
                    {edu.degree} · {edu.field}
                  </p>
                  {edu.grade && (
                    <p className="text-sm text-gray-500 dark:text-white/60 mb-3">{edu.grade}</p>
                  )}
                  <ul className="space-y-1">
                    {edu.highlights.map((h) => (
                      <li key={h} className="text-sm text-gray-600 dark:text-white/70 flex items-start gap-2">
                        <span className="text-[#64CEFB] mt-1.5 shrink-0">·</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key achievements grid */}
        <SectionHeading
          title="Key Achievements"
          subtitle="Impact delivered across roles and disciplines"
          className="mt-8"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 mb-16">
          {achievements.map((item, index) => (
            <div
              key={item.id}
              className="glass-card p-6 flex items-start gap-4 transition-all duration-700 hover:-translate-y-1"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${(index + 1) * 120}ms`,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${item.color}18`, color: item.color, border: `1px solid ${item.color}30` }}
              >
                {item.icon}
              </div>
              <div>
                <h4 className="text-base font-bold font-display text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-white/60 leading-relaxed font-body">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous learning tags */}
        <div
          className="transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '600ms',
          }}
        >
          <h4 className="text-lg font-bold font-display text-gray-900 dark:text-white mb-4">
            Currently Exploring
          </h4>
          <div className="flex flex-wrap gap-3">
            {learningTopics.map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 rounded-full text-sm font-medium border text-gray-700 dark:text-white/80 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:border-[#64CEFB]/40 hover:text-[#64CEFB] transition-colors"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
