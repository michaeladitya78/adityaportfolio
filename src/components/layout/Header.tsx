
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const headerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine active section
      const sections = document.querySelectorAll("section[id]");
      let currentActive = "";
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          currentActive = section.getAttribute("id") || "";
        }
      });
      
      setActiveSection(currentActive);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  
  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0A]/90 shadow-lg backdrop-blur-lg py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo/Name for mobile */}
          <div className="md:hidden">
            <a href="#" className="text-xl font-bold text-white hover:text-[#0077FF] transition-colors">
              Aditya
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 mx-auto">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-[#0077FF] group ${
                  activeSection === item.href.substring(1) 
                    ? "text-[#0077FF]" 
                    : "text-white/90"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                <span className={`absolute bottom-0 left-0 w-full h-[2px] transform origin-left transition-transform duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "bg-[#0077FF] scale-x-100"
                    : "bg-[#0077FF] scale-x-0 group-hover:scale-x-100"
                }`}></span>
                
                <span className={`absolute -inset-1 rounded-md opacity-0 group-hover:opacity-10 ${
                  activeSection === item.href.substring(1) ? "bg-[#0077FF]/20" : "bg-[#0077FF]"
                } blur-sm transition-opacity duration-300`}></span>
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 rounded-full hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          {/* Mobile Menu */}
          <div 
            className={`fixed inset-y-0 right-0 w-[85%] sm:w-64 bg-[#0A0A0A]/95 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-5 h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white hover:text-[#0077FF] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <nav className="flex flex-col space-y-1 mt-2">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeSection === item.href.substring(1)
                        ? "bg-[#0077FF]/10 text-[#0077FF]" 
                        : "text-white hover:bg-white/5"
                    } ${isOpen ? "animate-fade-in" : ""}`}
                    style={{ animationDelay: `${index * 50 + 100}ms` }}
                    onClick={() => setIsOpen(false)}
                  >
                    <ChevronRight className={`h-4 w-4 mr-2 transition-transform ${
                      activeSection === item.href.substring(1) ? "text-[#0077FF]" : "text-white/50"
                    }`} />
                    {item.label}
                  </a>
                ))}
              </nav>
              
              <div className="mt-auto">
                <div className="border-t border-white/10 pt-4 mt-6">
                  <p className="text-xs text-white/50 text-center">
                    &copy; {new Date().getFullYear()} Aditya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
