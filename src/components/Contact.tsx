
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Send, User, AtSign, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Email redirection logic - using mailto for frontend-only solution
    // In a real-world scenario, you'd use a service like EmailJS or a serverless function
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:adityar.dd22.ma@nitp.ac.in?subject=${encodeURIComponent(
      `Portfolio Contact: ${subject}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.open(mailtoLink, "_blank");

    // Simulate completion
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="contact" ref={ref} className="section-container bg-darker-gradient relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-10"></div>
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-tech-600/5 rounded-full filter blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          title="🤝 Let's Connect"
          subtitle="I'm actively seeking opportunities where I can leverage my unique combination of product management, software engineering, and AI/ML skills to build impactful products. Whether you're looking for a Product Manager who can code, a Software Engineer who understands business, or an AI Developer who can strategize, let's discuss how I can contribute to your team's success."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div
            className={`lg:col-span-2 space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
          >
            <div className="glass-card p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  I'm actively seeking opportunities where I can leverage my unique combination of product management,
                  software engineering, and AI/ML skills to build impactful products. Whether you're looking for a Product Manager
                  who can code, a Software Engineer who understands business, or an AI Developer who can strategize,
                  let's discuss how I can contribute to your team's success.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <h4 className="font-medium text-sm text-foreground">Available for:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2 items-start"><span className="text-accent">•</span> Product Management roles (Junior to Mid-level)</li>
                  <li className="flex gap-2 items-start"><span className="text-accent">•</span> Software Engineering positions (Full-stack, Backend, AI/ML)</li>
                  <li className="flex gap-2 items-start"><span className="text-accent">•</span> Freelance projects (AI Chatbots, Web Development, Product Consulting)</li>
                  <li className="flex gap-2 items-start"><span className="text-accent">•</span> Contract work and consulting engagements</li>
                  <li className="flex gap-2 items-start"><span className="text-accent">•</span> Collaborative open-source projects</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-4 pt-4">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-dark-800 border border-dark-700 flex-shrink-0 flex items-center justify-center">
                    <Mail className="text-accent h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:adityar.dd22.ma@nitp.ac.in" className="text-foreground hover:text-accent transition-colors">
                      adityar.dd22.ma@nitp.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-dark-800 border border-dark-700 flex-shrink-0 flex items-center justify-center">
                    <Phone className="text-accent h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-muted-foreground mb-1">Phone</p>
                    <a href="tel:+919771626100" className="text-foreground hover:text-accent transition-colors">
                      +91 9771626100
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/aditya-raj-8764a3205/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-800 border border-dark-700 flex items-center justify-center hover:bg-dark-700 hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/michaeladitya78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-800 border border-dark-700 flex items-center justify-center hover:bg-dark-700 hover:text-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:adityar.dd22.ma@nitp.ac.in"
                  className="w-10 h-10 rounded-full bg-dark-800 border border-dark-700 flex items-center justify-center hover:bg-dark-700 hover:text-accent transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div
            className={`lg:col-span-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
          >
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-muted-foreground flex items-center gap-2">
                      <User className="h-4 w-4 text-accent" />
                      <span>Name</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-dark-800 border-dark-700 focus:border-accent"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-muted-foreground flex items-center gap-2">
                      <AtSign className="h-4 w-4 text-accent" />
                      <span>Email</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="bg-dark-800 border-dark-700 focus:border-accent"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-muted-foreground flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-accent" />
                    <span>Subject</span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    className="bg-dark-800 border-dark-700 focus:border-accent"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-muted-foreground flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-accent" />
                    <span>Message</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    className="min-h-[150px] bg-dark-800 border-dark-700 focus:border-accent"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-accent hover:bg-accent-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
