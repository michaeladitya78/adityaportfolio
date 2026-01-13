
import { MapPin, Briefcase, Calendar, Globe, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function ProfessionalProfile() {
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

    const profileInfo = [
        {
            icon: MapPin,
            label: "Location",
            value: "Patna, Bihar, India"
        },
        {
            icon: Briefcase,
            label: "Work Preference",
            value: "Open to Remote, Hybrid, and On-site opportunities"
        },
        {
            icon: Calendar,
            label: "Availability",
            value: "Immediate"
        },
        {
            icon: Globe,
            label: "Visa Status",
            value: "Open to relocation and international opportunities"
        }
    ];

    const openTo = [
        "Full-time Product Manager roles",
        "Software Engineer / Full-Stack Developer positions",
        "AI/ML Engineer opportunities",
        "Finance Analyst/Manager roles (leveraging Mathematics background)",
        "Freelance projects in AI Development, Web Development, and Product Consulting",
        "Remote collaboration with global teams"
    ];

    return (
        <section id="professional-profile" ref={ref} className="section-container py-16 md:py-24 bg-darker-gradient relative">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-5"></div>
            <div className="absolute top-1/3 right-0 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl animate-float-slow"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionHeading
                    title="📫 Professional Profile"
                    subtitle="Current status and career opportunities I'm pursuing"
                />

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Profile Information Card */}
                    <Card
                        className={`glass-card bg-black/60 border-dark-800 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
                            }`}
                    >
                        <CardContent className="p-6 md:p-8">
                            <h3 className="text-2xl font-bold mb-6 font-['SF_Pro_Display'] flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                    <Briefcase className="h-4 w-4 text-white" />
                                </div>
                                Profile Details
                            </h3>

                            <div className="space-y-5">
                                {profileInfo.map((info, idx) => {
                                    const Icon = info.icon;
                                    return (
                                        <div
                                            key={info.label}
                                            className="flex items-start gap-4 group"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                                                <Icon className="h-5 w-5 text-accent" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground mb-1 font-['SF_Pro_Text']">{info.label}</p>
                                                <p className="text-base font-semibold font-['SF_Pro_Display']">{info.value}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Open To Card */}
                    <Card
                        className={`glass-card bg-black/60 border-dark-800 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
                            }`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <CardContent className="p-6 md:p-8">
                            <h3 className="text-2xl font-bold mb-6 font-['SF_Pro_Display'] flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                                    <CheckCircle2 className="h-4 w-4 text-white" />
                                </div>
                                Open To
                            </h3>

                            <ul className="space-y-3.5">
                                {openTo.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3 group"
                                    >
                                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                            <CheckCircle2 className="h-3 w-3 text-white" />
                                        </div>
                                        <span className="text-sm md:text-base text-muted-foreground leading-relaxed font-['SF_Pro_Text'] group-hover:text-white transition-colors">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
