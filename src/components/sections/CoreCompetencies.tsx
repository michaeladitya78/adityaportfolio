
import { Lightbulb, Target, Code, Bot, Users, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { useDeviceType } from "@/hooks/use-mobile";

export default function CoreCompetencies() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const [isVisible, setIsVisible] = useState(false);
    const deviceType = useDeviceType();

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    const competencies = [
        {
            icon: Target,
            title: "Product Management",
            skills: [
                "Product Strategy & Vision",
                "Roadmap Planning & Execution",
                "User-Centered Design",
                "Agile Methodologies",
                "Stakeholder Management",
                "Market Research & Analysis"
            ],
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Code,
            title: "Software Engineering",
            skills: [
                "Full-Stack Web Development",
                "System Design & Architecture",
                "Database Design & Optimization",
                "API Development & Integration",
                "Code Review & Quality Assurance",
                "CI/CD & DevOps Practices"
            ],
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: Bot,
            title: "AI/ML Development",
            skills: [
                "Machine Learning Model Development",
                "Natural Language Processing",
                "AI Chatbot Development",
                "AI Agent & Workflow Automation",
                "Model Training & Fine-tuning",
                "MLOps & Model Deployment"
            ],
            color: "from-green-500 to-teal-500"
        },
        {
            icon: Users,
            title: "Leadership & Management",
            skills: [
                "Team Leadership & Mentoring",
                "Cross-functional Collaboration",
                "Strategic Planning",
                "Project Management",
                "Communication & Presentation",
                "Problem Solving & Critical Thinking"
            ],
            color: "from-orange-500 to-red-500"
        }
    ];

    return (
        <section id="core-competencies" ref={ref} className="section-container py-16 md:py-24 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-5"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl animate-pulse-subtle"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tech-600/5 rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionHeading
                    title="💡 Core Competencies"
                    subtitle="Multidisciplinary expertise across product, engineering, and AI"
                />

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {competencies.map((competency, idx) => {
                        const Icon = competency.icon;
                        return (
                            <Card
                                key={competency.title}
                                className={`glass-card ${deviceType === 'desktop' ? 'group hover:scale-[1.02]' : ''} bg-black/60 border-dark-800 hover:border-accent/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
                                    }`}
                                style={{ transitionDelay: `${idx * 150}ms` }}
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${competency.color} p-0.5 flex-shrink-0`}>
                                            <div className="w-full h-full rounded-lg bg-black/90 flex items-center justify-center">
                                                <Icon className="text-white h-5 w-5" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold font-['SF_Pro_Display'] mt-1">{competency.title}</h3>
                                    </div>

                                    <ul className="space-y-2.5">
                                        {competency.skills.map((skill, skillIdx) => (
                                            <li
                                                key={skillIdx}
                                                className="flex items-start gap-3 text-muted-foreground font-['SF_Pro_Text']"
                                            >
                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${competency.color} mt-2 flex-shrink-0`}></div>
                                                <span className="text-sm md:text-base leading-relaxed">{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
