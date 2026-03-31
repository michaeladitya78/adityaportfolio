
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
        <section id="core-competencies" ref={ref} className="section-container py-24 relative overflow-hidden bg-gray-50 dark:bg-[#0a0a0f] transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-5 dark:opacity-5 pointer-events-none" style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                backgroundSize: "40px 40px",
            }} />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6366f1]/10 rounded-full filter blur-[100px] animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#06b6d4]/10 rounded-full filter blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionHeading
                    title="Core Competencies"
                    subtitle="Multidisciplinary expertise across product, engineering, and AI"
                />

                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-12">
                    {competencies.map((competency, idx) => {
                        const Icon = competency.icon;
                        const [fromColor, toColor] = competency.color.split(' ');
                        const colorHex = fromColor.includes('blue') ? '#3b82f6' : fromColor.includes('purple') ? '#a855f7' : fromColor.includes('green') ? '#10b981' : '#f97316';
                        
                        return (
                            <Card
                                key={competency.title}
                                className={`glass-card relative overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111116] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                    }`}
                                style={{ transitionDelay: `${idx * 150}ms` }}
                            >
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-5 mb-8">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${competency.color} p-[1px] flex-shrink-0 shadow-lg shadow-${fromColor.split('-')[1]}-500/20`}>
                                            <div className="w-full h-full rounded-2xl bg-white dark:bg-[#0f0f14] flex items-center justify-center">
                                                <Icon className="h-6 w-6" style={{ color: colorHex }} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-1">{competency.title}</h3>
                                            <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${competency.color}`}></div>
                                        </div>
                                    </div>

                                    <ul className="space-y-4">
                                        {competency.skills.map((skill, skillIdx) => (
                                            <li
                                                key={skillIdx}
                                                className="flex items-center gap-4 group"
                                            >
                                                <div className={`w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-125 bg-gradient-to-r ${competency.color}`}></div>
                                                <span className="text-base text-gray-600 dark:text-white/60 font-body group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                {/* Decorative corner accent */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${competency.color} opacity-[0.03] dark:opacity-[0.05] -mr-16 -mt-16 rounded-full blur-2xl`}></div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
