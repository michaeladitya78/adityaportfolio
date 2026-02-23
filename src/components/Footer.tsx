
import { ArrowUpIcon, Github, Linkedin, Mail } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function Footer() {
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

  return (
    <footer ref={ref} className="bg-dark-950 text-white py-16 border-t border-dark-800 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern-dark bg-grid-sm opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-heading font-bold text-gradient">Aditya Raj</h2>
              <p className="text-accent text-sm">Product Manager | Software Engineer | AI Developer</p>
            </div>

            <p className="text-muted-foreground mb-6 max-w-md">
              Crafting digital experiences through elegant code and compelling content.
              Let's create something amazing together.
            </p>

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

          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#about" className="text-muted-foreground hover:text-accent transition-colors py-1">About</a>
              <a href="#experience" className="text-muted-foreground hover:text-accent transition-colors py-1">Experience</a>
              <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors py-1">Projects</a>
              <a href="#skills" className="text-muted-foreground hover:text-accent transition-colors py-1">Skills</a>
              <a href="#education" className="text-muted-foreground hover:text-accent transition-colors py-1">Education</a>
              <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors py-1">Contact</a>
            </div>

            <div className="mt-8 pt-8 border-t border-dark-800">
              <p className="text-muted-foreground text-sm">
                &copy; {new Date().getFullYear()} Aditya. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 z-40">
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent-600 transition-colors shadow-lg shadow-accent/20"
          aria-label="Back to top"
        >
          <ArrowUpIcon className="h-5 w-5 text-white" />
        </a>
      </div>
    </footer>
  );
}
