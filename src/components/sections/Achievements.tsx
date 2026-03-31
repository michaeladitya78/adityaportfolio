
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
        <section id="achievements" ref={ref} className="section-container py-24 relative overflow-hidden bg-white dark:bg-[#0a0a0f] transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-5 dark:opacity-5 pointer-events-none" style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                backgroundSize: "40px 40px",
            }} />
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#6366f1]/5 rounded-full filter blur-[100px] animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#06b6d4]/5 rounded-full filter blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionHeading
                    title="Key Achievements"
                    subtitle="Measurable results and contributions across multiple domains"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
                    {achievements.map((achievement, idx) => {
                        const Icon = achievement.icon;
                        const [fromColor] = achievement.color.split(' ');
                        const colorHex = fromColor.includes('blue') ? '#3b82f6' : fromColor.includes('purple') ? '#a855f7' : fromColor.includes('orange') ? '#f97316' : fromColor.includes('green') ? '#10b981' : fromColor.includes('indigo') ? '#6366f1' : '#eab308';

                        return (
                            <Card
                                key={achievement.title}
                                className={`glass-card group relative overflow-hidden border border-gray-200 dark:border-black/10 dark:border-white/10 bg-white dark:bg-[#111116] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                    }`}
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                <CardContent className="p-8">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} p-[1px] mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-indigo-500/10`}>
                                        <div className="w-full h-full rounded-2xl bg-white dark:bg-[#0f0f14] flex items-center justify-center">
                                            <Icon className="h-7 w-7" style={{ color: colorHex }} />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 font-display text-gray-900 dark:text-gray-900 dark:text-white group-hover:text-[#6366f1] transition-colors">{achievement.title}</h3>
                                    <p className="text-base text-gray-500 dark:text-white/60 leading-relaxed font-body">
                                        {achievement.description}
                                    </p>
                                </CardContent>
                                {/* Subtle decorative circle */}
                                <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${achievement.color} opacity-[0.03] dark:opacity-[0.05] blur-xl group-hover:scale-150 transition-transform duration-700`}></div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
