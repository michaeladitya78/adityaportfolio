// components/layout/Footer.tsx
// Site-wide footer rendered on every page.
// Displays brand identity, navigation links, social icons, current availability
// status, and a scroll-to-top button that appears after scrolling 300px.

import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    explore: [
      { label: 'Work', path: '/work' },
      { label: 'About', path: '/about' },
      { label: 'Experience', path: '/resume' },
    ],
    connect: [
      { label: 'GitHub', url: 'https://github.com/mitcheladitya', icon: Github },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/aditya-raj-8764a3205/', icon: Linkedin },
      { label: 'Email', url: 'mailto:michaeladitya150@gmail.com', icon: Mail },
    ],
  };

  return (
    <>
      <footer className="relative border-t border-black/5 dark:border-white/5 bg-transparent backdrop-blur-3xl transition-colors duration-500 z-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            {/* Brand Section */}
            <div className="space-y-6">
              <Link to="/" className="text-3xl font-bold font-display text-gray-900 dark:text-white hover:text-[#64CEFB] transition-colors">
                Aditya<span className="text-[#64CEFB]">.</span>
              </Link>
              <p className="text-gray-600 dark:text-white/60 max-w-xs font-body leading-relaxed">
                Engineering digital products with a focus on AI, data, and user-centric design.
              </p>
              <div className="flex items-center gap-4">
                {footerLinks.connect.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-white/40 hover:text-[#64CEFB] hover:border-[#64CEFB]/30 hover:bg-[#64CEFB]/5 transition-all"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Explore Links */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 dark:text-white/40 uppercase tracking-[0.2em] mb-8 font-body">
                Navigation
              </h3>
              <ul className="space-y-4">
                {footerLinks.explore.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-600 dark:text-white/60 hover:text-[#64CEFB] transition-colors font-body text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-600 dark:text-white/60 hover:text-[#64CEFB] transition-colors font-body text-base"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter/Status Section */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 dark:text-white/40 uppercase tracking-[0.2em] mb-8 font-body">
                Current Status
              </h3>
              <div className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-sm font-bold text-gray-900 dark:text-white font-body">Available for opportunities</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-white/40 leading-relaxed font-body">
                  Exploring new horizons in Product Management and AI Engineering.
                </p>
              </div>
            </div>
          </div>


        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="glass-btn-wrapper fixed bottom-8 right-8 z-50 w-14 h-14 rounded-2xl text-gray-900 dark:text-white shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center p-0"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};


export default Footer;
