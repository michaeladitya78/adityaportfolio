import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Send, Mail, MapPin, Twitter, Clock, Cpu, Radio, ShieldCheck } from "lucide-react";
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

  const [isVisible, setIsVisible] = useState(false);

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
      {/* ── Background Video & Blending ── */}
      {/* NOTE: Please download the Pinterest video from https://pin.it/6cnCv4FBR and save it as "hud-bg.mp4" in your public folder */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-[0] mix-blend-color-dodge opacity-60 blur-[4px] scale-125 md:scale-150 translate-x-[20%] pointer-events-none"
      >
        <source src="/hud-bg.mp4" type="video/mp4" />
      </video>
      
      {/* Heavy Dark Overlay to enforce text readability */}
      <div className="absolute inset-0 bg-[#0B1120]/85 z-[1] pointer-events-none"></div>

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
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-[#64CEFB] rounded-full opacity-30 animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-40 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">Let's Connect</h2>
          <p className="text-lg text-white/70 max-w-2xl font-body">
            Have a project in mind or just want to chat? I'd love to hear from you. Fill out the form below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* ── Left Column: Form ── */}
          <div className={`lg:col-span-7 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative group">
              {/* Pulsating Light Blue Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#64CEFB] to-[#8B5CF6] rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000 animate-pulse"></div>
              
              <div className="relative bg-[#0B1120]/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="relative">
                      <label htmlFor="name" className="block mb-2 text-sm text-white/70 font-body">Your Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedInput('name')}
                        onBlur={() => setFocusedInput(null)}
                        placeholder="John Doe"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-14 rounded-xl focus:ring-0 focus:border-transparent transition-all"
                        required
                      />
                      <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#64CEFB] to-transparent transition-all duration-300 pointer-events-none ${focusedInput === 'name' ? 'w-full' : 'w-0'}`}></div>
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <label htmlFor="email" className="block mb-2 text-sm text-white/70 font-body">Your Email</label>
                      <Input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedInput('email')}
                        onBlur={() => setFocusedInput(null)}
                        type="email"
                        placeholder="john@example.com"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-14 rounded-xl focus:ring-0 focus:border-transparent transition-all"
                        required
                      />
                      <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#64CEFB] to-transparent transition-all duration-300 pointer-events-none ${focusedInput === 'email' ? 'w-full' : 'w-0'}`}></div>
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="relative">
                    <label htmlFor="subject" className="block mb-2 text-sm text-white/70 font-body">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput('subject')}
                      onBlur={() => setFocusedInput(null)}
                      placeholder="Project Inquiry"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-14 rounded-xl focus:ring-0 focus:border-transparent transition-all"
                      required
                    />
                    <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#64CEFB] to-transparent transition-all duration-300 pointer-events-none ${focusedInput === 'subject' ? 'w-full' : 'w-0'}`}></div>
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                    <label htmlFor="message" className="block mb-2 text-sm text-white/70 font-body">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput('message')}
                      onBlur={() => setFocusedInput(null)}
                      placeholder="I'd like to discuss a potential project..."
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 p-4 rounded-xl min-h-[160px] focus:ring-0 focus:border-transparent transition-all"
                      required
                    />
                    <div className={`absolute bottom-[6px] left-0 h-[2px] rounded-xl bg-gradient-to-r from-[#64CEFB] to-transparent transition-all duration-300 pointer-events-none ${focusedInput === 'message' ? 'w-[99%]' : 'w-0'}`}></div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="group group-hover:animate-wiggle relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold h-14 px-8 rounded-xl w-full sm:w-auto shadow-[0_0_15px_rgba(79,70,229,0.4)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] transition-all duration-300 ease-in-out"
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
              className={`relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl transition-all duration-700 hover:-translate-y-2 hover:bg-white/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <Radio className="absolute top-6 right-6 h-12 w-12 text-white/5 stroke-1" />
              <h3 className="text-xl font-display font-semibold text-white mb-6">Contact Info</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#64CEFB]/10 flex items-center justify-center border border-[#64CEFB]/20">
                    <Mail className="h-4 w-4 text-[#64CEFB]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-white font-medium">michaeladitya150@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#64CEFB]/10 flex items-center justify-center border border-[#64CEFB]/20">
                    <MapPin className="h-4 w-4 text-[#64CEFB]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-white font-medium">Available for remote work</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#64CEFB]/10 flex items-center justify-center border border-[#64CEFB]/20">
                    <Clock className="h-4 w-4 text-[#64CEFB]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Response Time</p>
                    <p className="text-white font-medium">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Social Media */}
            <div 
              className={`relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl transition-all duration-700 hover:-translate-y-2 hover:bg-white/10 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '650ms' }}
            >
              <Cpu className="absolute top-6 right-6 h-12 w-12 text-white/5 stroke-1" />
              <h3 className="text-xl font-display font-semibold text-white mb-6">Social Media</h3>
              <div className="flex flex-col gap-3">
                <a href="https://github.com/michaeladitya78" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-[#64CEFB]/40 transition-all group/social">
                  <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center group-hover/social:bg-[#64CEFB]/20 transition-all group-hover/social:shadow-[0_0_15px_rgba(100,206,251,0.5)]">
                    <Github className="h-4 w-4 text-white/70 group-hover/social:text-[#64CEFB]" />
                  </div>
                  <span className="text-white/80 group-hover/social:text-white font-medium">@michaeladitya78</span>
                </a>
                <a href="https://www.linkedin.com/in/aditya-raj-8764a3205/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-[#64CEFB]/40 transition-all group/social">
                  <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center group-hover/social:bg-[#64CEFB]/20 transition-all group-hover/social:shadow-[0_0_15px_rgba(100,206,251,0.5)]">
                    <Linkedin className="h-4 w-4 text-white/70 group-hover/social:text-[#64CEFB]" />
                  </div>
                  <span className="text-white/80 group-hover/social:text-white font-medium">Aditya Raj</span>
                </a>
                <a href="https://x.com/aadi_8888" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-[#64CEFB]/40 transition-all group/social">
                  <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center group-hover/social:bg-[#64CEFB]/20 transition-all group-hover/social:shadow-[0_0_15px_rgba(100,206,251,0.5)]">
                    <Twitter className="h-4 w-4 text-white/70 group-hover/social:text-[#64CEFB]" />
                  </div>
                  <span className="text-white/80 group-hover/social:text-white font-medium">@aadi_8888</span>
                </a>
              </div>
            </div>

            {/* Card 3: Availability */}
            <div 
              className={`relative bg-white/[0.03] backdrop-blur-md border border-white/10 border-t-2 border-t-emerald-500 p-6 rounded-3xl transition-all duration-700 hover:-translate-y-2 hover:bg-white/5 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="absolute right-0 top-0 h-32 w-32 bg-emerald-500/10 rounded-full blur-2xl animate-pulse"></div>
              
              <div className="flex items-start gap-4 mb-3 relative z-10">
                <div className="relative flex h-4 w-4 mt-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
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
