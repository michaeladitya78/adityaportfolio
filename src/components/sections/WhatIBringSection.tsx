
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function WhatIBringSection() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    const valueProps = [
        {
            title: "Proven Product Leadership",
            description: "Successfully delivered products across logistics, food-tech, and wellness domains",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "Technical Versatility",
            description: "Strong coding abilities combined with product thinking and business acumen",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            title: "AI/ML Expertise",
            description: "Hands-on experience building chatbots, agents, and training ML models",
            gradient: "from-green-500 to-teal-500"
        },
        {
            title: "Startup Mindset",
            description: "Founded and operated own venture, understand zero-to-one product building",
            gradient: "from-orange-500 to-red-500"
        },
        {
            title: "Mathematics Background",
            description: "Strong analytical and quantitative skills for data-driven decisions",
            gradient: "from-indigo-500 to-purple-500"
        },
        {
            title: "Global Experience",
            description: "Worked with international teams and managed remote distributed operations",
            gradient: "from-yellow-500 to-orange-500"
        },
        {
            title: "Fast Learner",
            description: "Quickly adapt to new technologies, tools, and industry domains",
            gradient: "from-pink-500 to-rose-500"
        },
        {
            title: "Communication Skills",
            description: "Experience creating content, presentations, and stakeholder communications",
            gradient: "from-teal-500 to-cyan-500"
        }
    ];

    return (
        <section id="what-i-bring" ref={ref} className="section-container py-24 relative overflow-hidden bg-white dark:bg-[#0a0a0f] transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-5 dark:opacity-5 pointer-events-none" style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                backgroundSize: "40px 40px",
            }} />
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#6366f1]/5 rounded-full filter blur-[100px] animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#06b6d4]/5 rounded-full filter blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionHeading
                    title="What I Bring"
                    subtitle="Unique value proposition combining product, technical, and business skills"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {valueProps.map((prop, idx) => (
                        <Card
                            key={prop.title}
                            className={`glass-card group relative overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111116] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                }`}
                            style={{ transitionDelay: `${idx * 75}ms` }}
                        >
                            <CardContent className="p-6">
                                <div className="flex flex-col gap-4">
                                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${prop.gradient} p-[1px] flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-indigo-500/10`}>
                                        <div className="w-full h-full rounded-2xl bg-white dark:bg-[#0f0f14] flex items-center justify-center">
                                            <CheckCircle2 className="h-6 w-6 text-[#6366f1]" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold font-display text-gray-900 dark:text-white leading-tight mb-2 group-hover:text-[#6366f1] transition-colors">{prop.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-white/40 leading-relaxed font-body">
                                            {prop.description}
                                        </p>
                                    </div>
                                </div>
                                {/* Subtle line accent */}
                                <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${prop.gradient}`}></div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
