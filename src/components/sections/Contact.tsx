// components/sections/Contact.tsx
// Contact section with an enquiry form (via formsubmit.co) and social links.
// Themed with a dark HUD-inspired aesthetic and animated background overlays.

import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MapPin, Clock, Cpu, Radio, ShieldCheck } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name] : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/michaeladitya150@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="section-container relative overflow-hidden py-32 bg-[#0B1120]">

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-[2] opacity-10 pointer-events-none" style={{
        backgroundImage: "linear-gradient(to right, #64CEFB 1px, transparent 1px), linear-gradient(to bottom, #64CEFB 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Abstract Tech Doodles Floating Overlay */}
      <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none">
        {/* Floating Code Snippets */}
        <div className="absolute top-[10%] left-[5%] text-gray-400/20 font-mono text-sm animate-[float_6s_ease-in-out_infinite]">&lt;API/ML&gt;</div>
        <div className="absolute top-[80%] left-[12%] text-gray-400/20 font-mono text-sm animate-[float_8s_ease-in-out_infinite] delay-1000">export default Module;</div>
        <div className="absolute top-[40%] right-[8%] text-[#64CEFB]/10 font-mono text-xs animate-[float_5s_ease-in-out_infinite] delay-500">git merge upstream</div>
        
        {/* Circuit / Line art traces */}
        <svg className="absolute top-[20%] left-[-5%] w-64 h-64 text-[#64CEFB]/5 animate-pulse" viewBox="0 0 100 100">
          <path d="M 0 50 L 30 50 L 40 20 L 60 80 L 70 50 L 100 50" fill="transparent" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="40" cy="20" r="2" fill="currentColor" />
          <circle cx="60" cy="80" r="2" fill="currentColor" />
        </svg>

        {/* Particles */}
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-[#64CEFB] rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <style>{`
        @keyframes customWiggle {
          0%, 100% { transform: rotate(0deg) translateX(0); }
          25% { transform: rotate(-5deg) translateX(-2px); }
          75% { transform: rotate(5deg) translateX(2px); }
        }
        .group-hover\\:animate-wiggle:hover .wiggle-icon {
          animation: customWiggle 0.4s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
      
      {/* ── Main Content Container ── */}
      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <div className={`transition-all duration-1000 flex flex-col items-center text-center mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl md:text-6xl font-black font-display text-white mb-4 tracking-tight">Let's Connect</h2>
          <p className="text-base text-white/60 max-w-xl font-body leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you. Fill out the form below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* ── Left Column: Form ── */}
          <div className={`lg:col-span-7 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative group">
              {/* Purple-Orange Halo Glow (Static layout, opacity increases on hover) */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl blur-xl opacity-10 group-hover:opacity-25 transition-opacity duration-1000"></div>
              
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl shadow-purple-900/20" style={{ borderTop: '1px solid rgba(168,85,247,0.25)' }}>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="relative">
                      <label htmlFor="name" className="block mb-2 text-xs tracking-wider text-slate-400 uppercase font-body">Your Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedInput('name')}
                        onBlur={() => setFocusedInput(null)}
                        placeholder="John Doe"
                        className="bg-black/40 border border-white/10 text-white placeholder:text-slate-500 h-14 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200 shadow-inner"
                        required
                      />
                      <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-orange-400 transition-all duration-300 pointer-events-none ${focusedInput === 'name' ? 'w-full' : 'w-0'}`}></div>
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <label htmlFor="email" className="block mb-2 text-xs tracking-wider text-slate-400 uppercase font-body">Your Email</label>
                      <Input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedInput('email')}
                        onBlur={() => setFocusedInput(null)}
                        type="email"
                        placeholder="john@example.com"
                        className="bg-black/40 border border-white/10 text-white placeholder:text-slate-500 h-14 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200 shadow-inner"
                        required
                      />
                      <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-orange-400 transition-all duration-300 pointer-events-none ${focusedInput === 'email' ? 'w-full' : 'w-0'}`}></div>
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="relative">
                    <label htmlFor="subject" className="block mb-2 text-xs tracking-wider text-slate-400 uppercase font-body">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput('subject')}
                      onBlur={() => setFocusedInput(null)}
                      placeholder="Project Inquiry"
                      className="bg-black/40 border border-white/10 text-white placeholder:text-slate-500 h-14 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200 shadow-inner"
                      required
                    />
                    <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-orange-400 transition-all duration-300 pointer-events-none ${focusedInput === 'subject' ? 'w-full' : 'w-0'}`}></div>
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                    <label htmlFor="message" className="block mb-2 text-xs tracking-wider text-slate-400 uppercase font-body">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput('message')}
                      onBlur={() => setFocusedInput(null)}
                      placeholder="I'd like to discuss a potential project..."
                      className="bg-black/40 border border-white/10 text-white placeholder:text-slate-500 p-4 rounded-xl min-h-[160px] focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-200 shadow-inner"
                      required
                    />
                    <div className={`absolute bottom-[6px] left-0 h-[2px] rounded-xl bg-gradient-to-r from-purple-500 to-orange-400 transition-all duration-300 pointer-events-none ${focusedInput === 'message' ? 'w-[99%]' : 'w-0'}`}></div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="group group-hover:animate-wiggle relative overflow-hidden bg-gradient-to-r from-purple-600 to-orange-500 hover:opacity-90 text-white font-bold h-14 px-8 rounded-xl w-full sm:w-auto shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_32px_rgba(234,88,12,0.4)] transition-all duration-300 ease-in-out"
                    >
                      <div className="flex items-center justify-center gap-3 relative z-10">
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <>
                            <span className="text-lg">Send Message</span>
                            <Send className="h-5 w-5 wiggle-icon" />
                          </>
                        )}
                      </div>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* ── Right Column: Stack of Cards ── */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card 1: Contact Info */}
            <div 
              className={`relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl transition-all duration-700 shadow-2xl shadow-purple-900/20 hover:-translate-y-2 hover:bg-white/[0.08] hover:shadow-purple-900/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '500ms', borderTop: '1px solid rgba(168,85,247,0.2)' }}
            >
              <Radio className="absolute top-6 right-6 h-12 w-12 text-white/5 stroke-1" />
              <h3 className="text-xl font-display font-bold text-white mb-6 tracking-tight">Contact Info</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#64CEFB]/10 flex items-center justify-center border border-[#64CEFB]/20">
                    <Mail className="h-4 w-4 text-[#64CEFB]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-medium">Email</p>
                    <p className="text-lg font-medium text-white">michaeladitya150@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                    <MapPin className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-medium">Location</p>
                    <p className="text-lg font-medium text-white">Available for remote & hybrid work</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                    <Clock className="h-4 w-4 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-medium">Response Time</p>
                    <p className="text-lg font-medium text-white">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Social Media */}
            <div 
              className={`relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl transition-all duration-700 shadow-2xl shadow-purple-900/20 hover:-translate-y-2 hover:bg-white/[0.08] hover:shadow-purple-900/30 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '650ms', borderTop: '1px solid rgba(251,146,60,0.2)' }}
            >
              <Cpu className="absolute top-6 right-6 h-12 w-12 text-white/5 stroke-1" />
              <h3 className="text-xl font-display font-bold text-white mb-6 tracking-tight">Social Media</h3>
              <div className="flex flex-col gap-3">
                <a href="https://github.com/michaeladitya78" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-white/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group/social">
                  <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center group-hover/social:bg-white/20 transition-all duration-300 group-hover/social:shadow-[0_0_18px_rgba(255,255,255,0.6)]">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white/60 group-hover/social:text-white transition-colors duration-300" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <span className="text-white/70 group-hover/social:text-white font-medium transition-colors duration-300">@michaeladitya78</span>
                </a>
                <a href="https://www.linkedin.com/in/aditya-raj-8764a3205/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-[#0077b5]/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group/social">
                  <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center group-hover/social:bg-[#0077b5]/20 transition-all duration-300 group-hover/social:shadow-[0_0_18px_rgba(0,119,181,0.6)]">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white/60 group-hover/social:text-[#0077b5] transition-colors duration-300" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span className="text-white/70 group-hover/social:text-white font-medium transition-colors duration-300">Aditya Raj</span>
                </a>
                <a href="https://x.com/aadi_8888" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-white/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group/social">
                  <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center group-hover/social:bg-white/20 transition-all duration-300 group-hover/social:shadow-[0_0_18px_rgba(255,255,255,0.6)]">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white/60 group-hover/social:text-white transition-colors duration-300" fill="currentColor">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                    </svg>
                  </div>
                  <span className="text-white/70 group-hover/social:text-white font-medium transition-colors duration-300">@aadi_8888</span>
                </a>
              </div>
            </div>

            {/* Card 3: Availability */}
            <div 
              className={`relative bg-white/[0.03] backdrop-blur-md border border-white/10 border-t-2 border-t-emerald-500 p-6 rounded-3xl transition-all duration-700 hover:-translate-y-2 hover:bg-white/5 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="absolute right-0 top-0 h-32 w-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
              
              <div className="flex items-start gap-4 mb-3 relative z-10">
                <div className="relative flex h-3 w-3 mt-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                </div>
                <h3 className="text-xl font-display font-semibold text-white tracking-wide">Currently Available</h3>
              </div>
              <p className="text-white/70 font-medium leading-relaxed relative z-10">
                I'm currently open to new opportunities and freelance projects. Let's discuss how we can work together!
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
