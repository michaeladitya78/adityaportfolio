
import { Bot, Lightbulb, Code, Users, Briefcase, Brain, Globe, CheckCircle2, MapPin, Clock, Target, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function About() {
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

  const coreCompetencies = [
    {
      category: "Product Management",
      icon: <Lightbulb className="h-5 w-5 text-accent" />,
      items: [
        "Product Strategy & Vision",
        "Roadmap Planning & Execution",
        "User-Centered Design",
        "Agile Methodologies",
        "Stakeholder Management",
        "Market Research & Analysis"
      ]
    },
    {
      category: "Software Engineering",
      icon: <Code className="h-5 w-5 text-accent" />,
      items: [
        "Full-Stack Web Development",
        "System Design & Architecture",
        "Database Design & Optimization",
        "API Development & Integration",
        "Code Review & Quality Assurance",
        "CI/CD & DevOps Practices"
      ]
    },
    {
      category: "AI/ML Development",
      icon: <Bot className="h-5 w-5 text-accent" />,
      items: [
        "Machine Learning Model Development",
        "Natural Language Processing",
        "AI Chatbot Development",
        "AI Agent & Workflow Automation",
        "Model Training & Fine-tuning",
        "MLOps & Model Deployment"
      ]
    },
    {
      category: "Leadership & Management",
      icon: <Users className="h-5 w-5 text-accent" />,
      items: [
        "Team Leadership & Mentoring",
        "Cross-functional Collaboration",
        "Strategic Planning",
        "Project Management",
        "Communication & Presentation",
        "Problem Solving & Critical Thinking"
      ]
    }
  ];

  const valueProps = [
    "Proven Product Leadership: Successfully delivered products across logistics, food-tech, and wellness domains",
    "Technical Versatility: Strong coding abilities combined with product thinking and business acumen",
    "AI/ML Expertise: Hands-on experience building chatbots, agents, and training ML models",
    "Startup Mindset: Founded and operated own venture, understand zero-to-one product building",
    "Mathematics Background: Strong analytical and quantitative skills for data-driven decisions",
    "Global Experience: Worked with international teams and managed remote distributed operations",
    "Fast Learner: Quickly adapt to new technologies, tools, and industry domains",
    "Communication Skills: Experience creating content, presentations, and stakeholder communications"
  ];

  const interests = [
    "Artificial Intelligence & Machine Learning Applications",
    "Product-Led Growth Strategies",
    "AI-Powered Product Development",
    "Fintech & Financial Technology",
    "SaaS Product Management",
    "Developer Tools & Platforms",
    "Ed-Tech Innovation",
    "Quantitative Finance & Trading Systems"
  ];

  return (
    <section id="about" ref={ref} className="section-container py-24 bg-black relative">
      <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-5"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-tech-600/5 rounded-full filter blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          title="About Me"
          subtitle="Product Manager | Software Engineer | AI Developer"
        />

        {/* Professional Summary */}
        <div className={`mt-12 max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card bg-zinc-900/40 border-zinc-800 p-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                <strong className="text-white">Product Manager and Software Engineer</strong> with proven expertise in AI/ML development,
                full-stack engineering, and cross-functional team leadership. Specialized in building AI chatbots, intelligent
                automation systems, and scalable software solutions.
              </p>
              <p>
                Strong foundation in <strong className="text-white">Mathematics and Computing Technology from NIT Patna</strong>,
                with hands-on experience in product strategy, software development, and content operations across diverse industries
                including logistics, fintech, and ed-tech.
              </p>
              <p className="text-accent font-medium">
                Currently seeking opportunities in: Product Management | Software Engineering | AI Development | Machine Learning Engineering | Finance Management
              </p>
            </div>
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mt-20">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Sparkles className="h-6 w-6 text-accent" />
            <h3 className="text-3xl font-bold text-white">💡 Core Competencies</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCompetencies.map((comp, idx) => (
              <Card
                key={idx}
                className={`glass-card bg-zinc-900/30 border-zinc-800 hover:border-accent/30 transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    {comp.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-4 text-white group-hover:text-accent transition-colors">
                    {comp.category}
                  </h3>
                  <ul className="space-y-2">
                    {comp.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-accent transition-colors mt-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Profile & What I Bring */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {/* Professional Profile */}
          <div className={`lg:col-span-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <Card className="glass-card bg-zinc-900/40 border-zinc-800 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Globe className="h-5 w-5 text-accent" />
                  📫 Professional Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm text-white mb-1">Location</h4>
                      <p className="text-sm text-muted-foreground">Patna, Bihar, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Briefcase className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm text-white mb-1">Work Preference</h4>
                      <p className="text-sm text-muted-foreground">Open to Remote, Hybrid, and On-site opportunities</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm text-white mb-1">Availability</h4>
                      <p className="text-sm text-muted-foreground">Immediate</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm text-white mb-1">Visa Status</h4>
                      <p className="text-sm text-muted-foreground">Open to relocation and international opportunities</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  <h4 className="font-semibold text-white mb-3 text-sm">Open to:</h4>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>Full-time Product Manager roles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>Software Engineer / Full-Stack Developer positions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>AI/ML Engineer opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>Finance Analyst/Manager roles (leveraging Mathematics background)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>Freelance projects in AI Development, Web Development, and Product Consulting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>Remote collaboration with global teams</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What I Bring */}
          <div className={`lg:col-span-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <Card className="glass-card bg-zinc-900/40 border-zinc-800 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Target className="h-5 w-5 text-accent" />
                  🎯 What I Bring to Your Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {valueProps.map((prop, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-lg bg-accent/5 border border-accent/10 hover:border-accent/30 transition-all group"
                    >
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90 group-hover:text-foreground transition-colors">
                        {prop}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Professional Interests */}
        <div className={`mt-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Brain className="h-6 w-6 text-accent" />
            <h3 className="text-2xl font-bold text-white">📊 Professional Interests</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {interests.map((interest, i) => (
              <Badge
                key={i}
                variant="outline"
                className="bg-zinc-900/50 hover:bg-accent/10 border-zinc-700 hover:border-accent/50 transition-all px-4 py-2 text-sm"
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
