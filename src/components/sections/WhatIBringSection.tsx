
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

    const [isVisible, setIsVisible] = useState(false);

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
        <section id="what-i-bring" ref={ref} className="section-container py-16 md:py-24 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-5"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl animate-pulse-subtle"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-tech-600/5 rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionHeading
                    title="🎯 What I Bring to Your Team"
                    subtitle="Unique value proposition combining product, technical, and business skills"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {valueProps.map((prop, idx) => (
                        <Card
                            key={prop.title}
                            className={`glass-card group bg-black/60 border-dark-800 hover:border-accent/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                                }`}
                            style={{ transitionDelay: `${idx * 75}ms` }}
                        >
                            <CardContent className="p-5">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${prop.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform mt-0.5`}>
                                        <CheckCircle2 className="h-4 w-4 text-white" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold font-['SF_Pro_Display'] leading-tight">{prop.title}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed font-['SF_Pro_Text'] pl-9">
                                    {prop.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
