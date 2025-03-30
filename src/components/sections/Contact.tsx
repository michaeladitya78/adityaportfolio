
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Github, 
  Linkedin, 
  Send, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink,
  Code
} from "lucide-react";
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send email using mailto for frontend-only solution
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:michaeladitya150@gmail.com?subject=${encodeURIComponent(
      `Portfolio Contact: ${subject}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    
    window.open(mailtoLink, "_blank");
    
    // Show success toast
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="contact" ref={ref} className="section-container py-24 bg-cursor-dark relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-md opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Let's connect and discuss how we can work together"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-12">
          {/* Contact information */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-semibold mb-4 text-[#F0F0F0] font-['SF_Pro_Display']">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div 
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <h4 className="text-muted-foreground text-sm mb-2 font-['SF_Pro_Text']">Email</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-accent" />
                    <a 
                      href="mailto:michaeladitya150@gmail.com" 
                      className="text-[#F0F0F0] hover:text-accent transition-colors font-['SF_Pro_Text']"
                    >
                      michaeladitya150@gmail.com <span className="text-xs text-muted-foreground">(Primary)</span>
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <a 
                      href="mailto:adityar.dd22.ma@nitp.ac.in" 
                      className="text-[#F0F0F0] hover:text-accent transition-colors font-['SF_Pro_Text']"
                    >
                      adityar.dd22.ma@nitp.ac.in <span className="text-xs text-muted-foreground">(Secondary)</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div 
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <h4 className="text-muted-foreground text-sm mb-2 font-['SF_Pro_Text']">Location</h4>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  <p className="text-[#F0F0F0] font-['SF_Pro_Text']">Patna, Bihar, India</p>
                </div>
              </div>
              
              <div 
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <h4 className="text-muted-foreground text-sm mb-2 font-['SF_Pro_Text']">Phone</h4>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-accent" />
                  <a 
                    href="tel:+919771626100" 
                    className="text-[#F0F0F0] hover:text-accent transition-colors font-['SF_Pro_Text']"
                  >
                    +91 9771626100
                  </a>
                </div>
              </div>
              
              <div 
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <h4 className="text-muted-foreground text-sm mb-2 font-['SF_Pro_Text']">Social Profiles</h4>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://github.com/mitcheladitya" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-2 bg-cursor-darker hover:bg-cursor-darker/80 rounded-full transition-colors"
                  >
                    <Github className="h-5 w-5 text-[#F0F0F0]" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/aditya-raj-8764a3205/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-2 bg-cursor-darker hover:bg-cursor-darker/80 rounded-full transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-[#F0F0F0]" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-2 bg-cursor-darker hover:bg-cursor-darker/80 rounded-full transition-colors"
                  >
                    <Code className="h-5 w-5 text-[#F0F0F0]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:col-span-3 glass-card p-6 border border-cursor-light-gray/30 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-[#F0F0F0] font-['SF_Pro_Display']">
              Send a Message
            </h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div 
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '300ms' }}
                >
                  <label htmlFor="name" className="block mb-2 text-sm text-muted-foreground font-['SF_Pro_Text']">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="bg-cursor-darker border-cursor-light-gray/30 focus:border-accent placeholder:text-cursor-light-gray/50"
                    required
                  />
                </div>
                
                <div 
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '400ms' }}
                >
                  <label htmlFor="email" className="block mb-2 text-sm text-muted-foreground font-['SF_Pro_Text']">
                    Your Email
                  </label>
                  <Input 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="johndoe@example.com" 
                    className="bg-cursor-darker border-cursor-light-gray/30 focus:border-accent placeholder:text-cursor-light-gray/50"
                    required
                  />
                </div>
              </div>
              
              <div 
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <label htmlFor="subject" className="block mb-2 text-sm text-muted-foreground font-['SF_Pro_Text']">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry" 
                  className="bg-cursor-darker border-cursor-light-gray/30 focus:border-accent placeholder:text-cursor-light-gray/50"
                  required
                />
              </div>
              
              <div 
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <label htmlFor="message" className="block mb-2 text-sm text-muted-foreground font-['SF_Pro_Text']">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I'd like to discuss a potential project..." 
                  className="bg-cursor-darker border-cursor-light-gray/30 focus:border-accent placeholder:text-cursor-light-gray/50 min-h-[150px]"
                  required
                />
              </div>
              
              <div 
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '700ms' }}
              >
                <Button 
                  type="submit"
                  className="w-full sm:w-auto px-8 py-5 bg-accent hover:bg-accent/90 text-black flex items-center gap-2 font-['SF_Pro_Text']"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
              
              <p className="text-sm text-cursor-light-gray mt-4 italic">
                * I'll get back to you within 24-48 hours.
              </p>
            </form>
          </div>
        </div>
        
        {/* Calendar scheduling link */}
        <div 
          className={`mt-16 p-4 rounded-lg border border-cursor-light-gray/20 bg-cursor-darker/50 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <a 
            href="https://calendar.app.google/ZRDA4GfmVGNHTL6V9" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            <span className="font-['SF_Pro_Text']">Schedule a meeting directly on my calendar</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
