
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Bot, Code, Megaphone, TrendingUp, Briefcase } from "lucide-react";

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Bot className="h-6 w-6 text-accent" />,
      subsections: [
        {
          subtitle: "Languages",
          skills: ["Python", "R"]
        },
        {
          subtitle: "ML Frameworks",
          skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"]
        },
        {
          subtitle: "AI Tools",
          skills: ["LangChain", "OpenAI APIs", "Hugging Face Transformers"]
        },
        {
          subtitle: "NLP",
          skills: ["DistilBERT", "Sentiment Analysis", "Text Classification"]
        },
        {
          subtitle: "ML Applications",
          skills: ["Model Training", "Fine-tuning", "Feature Engineering"]
        },
        {
          subtitle: "AI Chatbots",
          skills: ["Conversational AI", "Intent Recognition", "RAG Systems"]
        },
        {
          subtitle: "AI Agents",
          skills: ["Workflow Automation", "Multi-Agent Systems"]
        }
      ]
    },
    {
      title: "Product Management",
      icon: <Briefcase className="h-6 w-6 text-accent" />,
      subsections: [
        {
          subtitle: "",
          skills: [
            "Product Strategy & Roadmapping",
            "User Research & Requirements Gathering",
            "Wireframing & Prototyping (Figma, Adobe XD)",
            "Agile/Scrum Methodologies",
            "A/B Testing & Analytics",
            "SQL & Database Management (Oracle, PostgreSQL, MongoDB)",
            "JIRA, Confluence, Trello",
            "Data-Driven Decision Making",
            "Stakeholder Management"
          ]
        }
      ]
    },
    {
      title: "Software Development",
      icon: <Code className="h-6 w-6 text-accent" />,
      subsections: [
        {
          subtitle: "Frontend",
          skills: ["JavaScript", "React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
        },
        {
          subtitle: "Backend",
          skills: ["Node.js", "Express.js", "Flask", "FastAPI", "Django"]
        },
        {
          subtitle: "Databases",
          skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Oracle DB"]
        },
        {
          subtitle: "Version Control",
          skills: ["Git", "GitHub", "GitLab"]
        },
        {
          subtitle: "APIs",
          skills: ["RESTful APIs", "GraphQL"]
        },
        {
          subtitle: "Cloud",
          skills: ["AWS", "Vercel", "Netlify", "Heroku"]
        },
        {
          subtitle: "Testing",
          skills: ["Jest", "Pytest", "Unit Testing"]
        }
      ]
    },
    {
      title: "Content & Marketing Tools",
      icon: <Megaphone className="h-6 w-6 text-accent" />,
      subsections: [
        {
          subtitle: "",
          skills: [
            "WordPress, CMS Platforms",
            "SEO Tools (Google Analytics, SEMrush, Ahrefs)",
            "Social Media Management Tools",
            "Content Management Systems",
            "Google Workspace, Microsoft Office Suite",
            "Video Editing (Adobe Premiere, Final Cut Pro)"
          ]
        }
      ]
    },
    {
      title: "Finance & Analytics",
      icon: <TrendingUp className="h-6 w-6 text-accent" />,
      subsections: [
        {
          subtitle: "",
          skills: [
            "Financial Modeling",
            "Statistical Analysis",
            "Data Visualization (Matplotlib, Seaborn, Plotly)",
            "Excel Advanced (VBA, Pivot Tables, Financial Functions)",
            "Quantitative Analysis"
          ]
        }
      ]
    }
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="section-container bg-darker-gradient relative overflow-hidden py-24"
    >
      <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-10"></div>
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#0077FF]/5 rounded-full filter blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-[#20C997]/5 rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          title="🛠️ Technical Skills Stack"
          subtitle="Comprehensive expertise across AI/ML, Product, Engineering, and Analytics"
        />

        <div className="mt-16 space-y-8">
          {skillCategories.map((category, catIdx) => (
            <Card
              key={catIdx}
              className={`glass-card bg-zinc-900/40 border-zinc-800 hover:border-accent/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${catIdx * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  {category.icon}
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.subsections.map((subsection, subIdx) => (
                  <div key={subIdx}>
                    {subsection.subtitle && (
                      <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                        {subsection.subtitle}
                      </h4>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {subsection.skills.map((skill, skillIdx) => (
                        <Badge
                          key={skillIdx}
                          variant="outline"
                          className="bg-zinc-900/50 hover:bg-accent/10 border-zinc-700 hover:border-accent/50 transition-all px-3 py-1.5 text-sm"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
