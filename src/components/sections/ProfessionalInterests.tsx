
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
        {
            icon: Brain,
            title: "Artificial Intelligence & Machine Learning Applications",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: TrendingUp,
            title: "Product-Led Growth Strategies",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: Bot,
            title: "AI-Powered Product Development",
            gradient: "from-green-500 to-teal-500"
        },
        {
            icon: DollarSign,
            title: "Fintech & Financial Technology",
            gradient: "from-yellow-500 to-orange-500"
        },
        {
            icon: Layers,
            title: "SaaS Product Management",
            gradient: "from-indigo-500 to-purple-500"
        },
        {
            icon: Wrench,
            title: "Developer Tools & Platforms",
            gradient: "from-red-500 to-pink-500"
        },
        {
            icon: GraduationCap,
            title: "Ed-Tech Innovation",
            gradient: "from-orange-500 to-red-500"
        },
        {
            icon: LineChart,
            title: "Quantitative Finance & Trading Systems",
            gradient: "from-teal-500 to-cyan-500"
        }
    ];

    return (
        <section id="professional-interests" ref={ref} className="section-container py-16 md:py-24 bg-darker-gradient relative">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-5"></div>
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-tech-600/5 rounded-full filter blur-3xl animate-float-slow" style={{ animationDelay: '1.5s' }}></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionHeading
                    title="📊 Professional Interests"
                    subtitle="Areas of passion and continuous exploration"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {interests.map((interest, idx) => {
                        const Icon = interest.icon;
                        return (
                            <Card
                                key={interest.title}
                                className={`glass-card ${deviceType === 'desktop' ? 'group hover:scale-105' : ''} bg-black/60 border-dark-800 hover:border-accent/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                                    }`}
                                style={{ transitionDelay: `${idx * 75}ms` }}
                            >
                                <CardContent className="p-5 flex flex-col items-center text-center">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${interest.gradient} p-0.5 mb-4 ${deviceType === 'desktop' ? 'group-hover:scale-110 group-hover:rotate-6' : ''} transition-all duration-300`}>
                                        <div className="w-full h-full rounded-xl bg-black/90 flex items-center justify-center">
                                            <Icon className="text-white h-6 w-6" />
                                        </div>
                                    </div>
                                    <h3 className="text-sm md:text-base font-semibold font-['SF_Pro_Display'] leading-tight">
                                        {interest.title}
                                    </h3>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
