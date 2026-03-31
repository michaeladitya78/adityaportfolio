
import { Brain, TrendingUp, Bot, DollarSign, Layers, Wrench, GraduationCap, LineChart } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { useDeviceType } from "@/hooks/use-mobile";

export default function ProfessionalInterests() {
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

    const interests = [
        { icon: Brain, title: "Artificial Intelligence & Machine Learning Applications", gradient: "from-purple-500 to-pink-500" },
        { icon: TrendingUp, title: "Product-Led Growth Strategies", gradient: "from-blue-500 to-cyan-500" },
        { icon: Bot, title: "AI-Powered Product Development", gradient: "from-green-500 to-teal-500" },
        { icon: DollarSign, title: "Fintech & Financial Technology", gradient: "from-yellow-500 to-orange-500" },
        { icon: Layers, title: "SaaS Product Management", gradient: "from-indigo-500 to-purple-500" },
        { icon: Wrench, title: "Developer Tools & Platforms", gradient: "from-red-500 to-pink-500" },
        { icon: GraduationCap, title: "Ed-Tech Innovation", gradient: "from-orange-500 to-red-500" },
        { icon: LineChart, title: "Quantitative Finance & Trading Systems", gradient: "from-teal-500 to-cyan-500" }
    ];

    return (
        <section id="professional-interests" ref={ref} className="section-container py-24 relative overflow-hidden bg-gray-50 dark:bg-[#0a0a0f] transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-5 dark:opacity-5 pointer-events-none" style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                backgroundSize: "40px 40px",
            }} />
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#6366f1]/10 rounded-full filter blur-[100px] animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#06b6d4]/10 rounded-full filter blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }}></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionHeading
                    title="Professional Interests"
                    subtitle="Areas of passion and continuous exploration"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {interests.map((interest, idx) => {
                        const Icon = interest.icon;
                        const [fromColor] = interest.gradient.split(' ');
                        const colorHex = fromColor.includes('purple') ? '#a855f7' : fromColor.includes('blue') ? '#3b82f6' : fromColor.includes('green') ? '#10b981' : fromColor.includes('yellow') ? '#eab308' : fromColor.includes('indigo') ? '#6366f1' : fromColor.includes('red') ? '#ef4444' : fromColor.includes('orange') ? '#f97316' : '#14b8a6';

                        return (
                            <Card
                                key={interest.title}
                                className={`glass-card group relative overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111116] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                    }`}
                                style={{ transitionDelay: `${idx * 75}ms` }}
                            >
                                <CardContent className="p-8 flex flex-col items-center text-center">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${interest.gradient} p-[1px] mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-indigo-500/10`}>
                                        <div className="w-full h-full rounded-2xl bg-white dark:bg-[#0f0f14] flex items-center justify-center">
                                            <Icon className="h-7 w-7" style={{ color: colorHex }} />
                                        </div>
                                    </div>
                                    <h3 className="text-sm md:text-base font-bold font-display leading-snug text-gray-900 dark:text-white group-hover:text-[#6366f1] transition-colors">
                                        {interest.title}
                                    </h3>
                                </CardContent>
                                {/* Bottom accent bar */}
                                <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${interest.gradient}`}></div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
