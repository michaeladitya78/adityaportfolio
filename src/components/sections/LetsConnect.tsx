
import { Mail, MessageCircle, Briefcase, Code, FileText, Users, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { useDeviceType } from "@/hooks/use-mobile";

export default function LetsConnect() {
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

    const availableFor = [
        {
            icon: Briefcase,
            title: "Product Management roles",
            subtitle: "Junior to Mid-level",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: Code,
            title: "Software Engineering positions",
            subtitle: "Full-stack, Backend, AI/ML",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: FileText,
            title: "Freelance projects",
            subtitle: "AI Chatbots, Web Dev, Product Consulting",
            gradient: "from-green-500 to-teal-500"
        },
        {
            icon: Users,
            title: "Contract work and consulting",
            subtitle: "Short-term and long-term engagements",
            gradient: "from-orange-500 to-red-500"
        },
        {
            icon: MessageCircle,
            title: "Collaborative open-source projects",
            subtitle: "Community-driven development",
            gradient: "from-indigo-500 to-purple-500"
        }
    ];

    return (
        <section id="lets-connect" ref={ref} className="section-container py-16 md:py-24 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-5"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent/10 to-tech-600/10 rounded-full filter blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl animate-float-slow" style={{ animationDelay: '1s' }}></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionHeading
                    title="🤝 Let's Connect"
                    subtitle="I'm actively seeking opportunities to make an impact"
                />

                <div
                    className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                        }`}
                >
                    <Card className="glass-card bg-gradient-to-br from-accent/5 to-tech-600/5 border-accent/20">
                        <CardContent className="p-6 md:p-8">
                            <p className="text-base md:text-lg text-center leading-relaxed font-['SF_Pro_Text'] mb-6">
                                I'm actively seeking opportunities where I can leverage my unique combination of{" "}
                                <span className="text-accent font-semibold">product management</span>,{" "}
                                <span className="text-tech-400 font-semibold">software engineering</span>, and{" "}
                                <span className="text-purple-400 font-semibold">AI/ML skills</span> to build impactful products.
                            </p>
                            <p className="text-base md:text-lg text-center text-muted-foreground leading-relaxed font-['SF_Pro_Text']">
                                Whether you're looking for a <strong>Product Manager who can code</strong>, a{" "}
                                <strong>Software Engineer who understands business</strong>, or an{" "}
                                <strong>AI Developer who can strategize</strong>, let's discuss how I can contribute to your team's success.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {availableFor.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <Card
                                key={item.title}
                                className={`glass-card ${deviceType === 'desktop' ? 'group hover:scale-105' : ''} bg-black/60 border-dark-800 hover:border-accent/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                                    }`}
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                <CardContent className="p-6">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} p-0.5 mb-4 ${deviceType === 'desktop' ? 'group-hover:scale-110' : ''} transition-transform duration-300`}>
                                        <div className="w-full h-full rounded-xl bg-black/90 flex items-center justify-center">
                                            <Icon className="text-white h-5 w-5" />
                                        </div>
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold mb-1 font-['SF_Pro_Display']">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground font-['SF_Pro_Text']">{item.subtitle}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                <div
                    className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                        }`}
                    style={{ transitionDelay: '600ms' }}
                >
                    <a href="#contact">
                        <Button
                            size="lg"
                            className="group bg-gradient-to-r from-accent to-tech-600 hover:from-accent/90 hover:to-tech-600/90 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-300"
                        >
                            Get In Touch
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
