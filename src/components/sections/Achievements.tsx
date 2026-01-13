
import { Trophy, Users, FileText, Globe, Code, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { useDeviceType } from "@/hooks/use-mobile";

export default function Achievements() {
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

    const achievements = [
        {
            icon: Briefcase,
            title: "Product Leadership",
            description: "Successfully managed 4+ product management roles across diverse industries (logistics, food-tech, wellness)",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Users,
            title: "Cross-functional Collaboration",
            description: "Led distributed teams across multiple time zones and geographies",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: FileText,
            title: "Content Impact",
            description: "Created 100+ pieces of technical and marketing content across various platforms",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: Globe,
            title: "Community Building",
            description: "Grew social media presence and engagement for multiple tech communities",
            color: "from-green-500 to-teal-500"
        },
        {
            icon: Code,
            title: "Technical Proficiency",
            description: "Built full-stack applications, AI chatbots, and ML models from scratch",
            color: "from-indigo-500 to-purple-500"
        },
        {
            icon: Globe,
            title: "International Experience",
            description: "Managed remote product operations for Australian and Indian markets",
            color: "from-yellow-500 to-orange-500"
        }
    ];

    return (
        <section id="achievements" ref={ref} className="section-container py-16 md:py-24 bg-darker-gradient relative">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-5"></div>
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-tech-600/5 rounded-full filter blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionHeading
                    title="Key Achievements & Impact"
                    subtitle="Measurable results and contributions across multiple domains"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {achievements.map((achievement, idx) => {
                        const Icon = achievement.icon;
                        return (
                            <Card
                                key={achievement.title}
                                className={`glass-card ${deviceType === 'desktop' ? 'group hover:scale-105' : ''} bg-black/60 border-dark-800 hover:border-accent/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                                    }`}
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                <CardContent className="p-6">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} p-0.5 mb-4 ${deviceType === 'desktop' ? 'group-hover:scale-110' : ''} transition-transform duration-300`}>
                                        <div className="w-full h-full rounded-xl bg-black/90 flex items-center justify-center">
                                            <Icon className="text-white h-6 w-6" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 font-['SF_Pro_Display']">{achievement.title}</h3>
                                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-['SF_Pro_Text']">
                                        {achievement.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
