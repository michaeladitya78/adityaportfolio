
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
        { icon: MapPin, label: "Location", value: "Patna, Bihar, India" },
        { icon: Briefcase, label: "Work Preference", value: "Open to Remote, Hybrid, and On-site opportunities" },
        { icon: Calendar, label: "Availability", value: "Immediate" },
        { icon: Globe, label: "Visa Status", value: "Open to relocation and international opportunities" }
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
        <section id="professional-profile" ref={ref} className="section-container py-24 relative overflow-hidden bg-white dark:bg-[#0a0a0f] transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-5 dark:opacity-5 pointer-events-none" style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                backgroundSize: "40px 40px",
            }} />
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#6366f1]/10 rounded-full filter blur-[100px] animate-pulse pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionHeading
                    title="Professional Profile"
                    subtitle="Current status and career opportunities I'm pursuing"
                />

                <div className="grid lg:grid-cols-2 gap-8 mt-12">
                    {/* Profile Information Card */}
                    <Card
                        className={`glass-card relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}
                    >
                        <CardContent className="p-6 md:p-8">
                            <h3 className="text-2xl font-bold mb-8 font-display flex items-center gap-3 text-gray-900 dark:text-white">
                                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                    <Briefcase className="h-5 w-5 text-white" />
                                </span>
                                Profile Details
                            </h3>

                            <div className="space-y-6">
                                {profileInfo.map((info, idx) => {
                                    const Icon = info.icon;
                                    return (
                                        <div
                                            key={info.label}
                                            className="flex items-start gap-5 group"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/10 transition-colors border border-gray-100 dark:border-white/5">
                                                <Icon className="h-5 w-5 text-[#6366f1]" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold tracking-wider uppercase text-gray-400 dark:text-gray-500 mb-1 font-body">{info.label}</p>
                                                <p className="text-base md:text-lg text-gray-700 dark:text-white/80 font-body leading-relaxed">{info.value}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Open To Card */}
                    <Card
                        className={`glass-card relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <CardContent className="p-6 md:p-8">
                            <h3 className="text-2xl font-bold mb-8 font-display flex items-center gap-3 text-gray-900 dark:text-white">
                                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#6366f1] flex items-center justify-center shadow-lg shadow-cyan-500/20">
                                    <CheckCircle2 className="h-5 w-5 text-white" />
                                </span>
                                Open To
                            </h3>

                            <ul className="space-y-4">
                                {openTo.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-indigo-100 dark:border-indigo-800/30 group-hover:scale-110 transition-transform">
                                            <CheckCircle2 className="h-3.5 w-3.5 text-[#6366f1]" />
                                        </div>
                                        <span className="text-base text-gray-600 dark:text-white/60 leading-relaxed font-body group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
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
