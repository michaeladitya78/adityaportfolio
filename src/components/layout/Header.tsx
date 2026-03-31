import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

/* ── Apple-style nav: transparent → frosted glass on scroll ── */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false); }, [location.pathname]);

  const navLinks = [
    { path: '/about',   label: 'About'      },
    { path: '/resume',  label: 'Experience' },
    { path: '/work',    label: 'Projects'   },
  ];

  const isActive = (path: string) => {
    if (path.includes('#')) {
      return location.pathname + location.hash === path;
    }
    return location.pathname === path;
  };

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-[60] transition-all duration-500"
        style={{
          /* Apple-style: transparent → frosted glass */
          background: isScrolled
            ? 'rgba(255,255,255,0.72)'
            : 'transparent',
          backdropFilter: isScrolled ? 'saturate(180%) blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'saturate(180%) blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.10)' : '1px solid transparent',
          paddingTop: isScrolled ? '0.5rem' : '1.25rem',
          paddingBottom: isScrolled ? '0.5rem' : '1.25rem',
        }}
      >
        {/* Dark mode glass override via CSS variable */}
        <style>{`
          .dark header[role="banner"] {
            background: ${isScrolled ? 'rgba(0,0,0,0.72)' : 'transparent'} !important;
            border-bottom-color: ${isScrolled ? 'rgba(255,255,255,0.07)' : 'transparent'} !important;
          }
        `}</style>

        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex items-center">

            {/* ── Abstract Geometric Logo — from Reference ── */}
            <Link to="/" aria-label="Home" className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 group">
              <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors duration-300"
                   style={{
                     borderColor: isScrolled ? 'hsl(var(--foreground) / 0.8)' : 'hsl(var(--foreground))',
                   }}>
                <div className="w-3 h-3 rounded-full transition-transform duration-300 group-hover:scale-110"
                     style={{ background: 'hsl(var(--foreground))' }} />
              </div>
            </Link>

            {/* Middle spacer */}
            <div className="hidden md:flex flex-1" />

            {/* ── Desktop nav (UI/UX Pro Max Glass System) ── */}
            <nav
              className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 transition-all duration-300 ${isScrolled ? 'glass-nav' : ''}`}
              aria-label="Main navigation"
              style={{
                border: isScrolled ? undefined : '1px solid transparent',
                background: isScrolled ? undefined : 'transparent',
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                  className="relative px-4 py-2 rounded-full text-sm transition-all duration-300 group"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: isActive(link.path)
                      ? 'var(--weight-semibold)'
                      : 'var(--weight-regular)',
                    color: isActive(link.path)
                      ? 'hsl(var(--foreground))'
                      : 'hsl(var(--muted-foreground))',
                    letterSpacing: 'var(--tracking-body)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(link.path))
                      e.currentTarget.style.color = 'hsl(var(--foreground))';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.path))
                      e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
                  }}
                  onClick={(e) => {
                    if (link.path.includes('#') && location.pathname === link.path.split('#')[0]) {
                      e.preventDefault();
                      const id = link.path.split('#')[1];
                      const element = document.getElementById(id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', link.path);
                      }
                    }
                  }}
                >
                  {link.label}
                  {/* Active underline indicator — Apple-style minimal dot */}
                  {isActive(link.path) && (
                    <span
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: 'hsl(var(--accent))' }}
                    />
                  )}
                </Link>
              ))}

              {/* Divider */}
              <div className="w-px h-5 mx-2" style={{ background: 'hsl(var(--border))' }} />

              <ThemeToggle />

              {/* Reference-style CTA Button inside Nav with Glass Wrapper */}
              <div className="glass-btn-wrapper ml-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 group"
                  style={{
                    fontFamily: 'var(--font-body)',
                    background: 'var(--bg-base)',
                    color: 'white',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  Contact
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </nav>

            {/* ── Mobile: right-aligned theme + burger ── */}
            <div className="flex items-center gap-3 md:hidden ml-auto">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{
                  background: 'hsl(var(--secondary))',
                  color: 'hsl(var(--foreground))',
                }}
              >
                {isMobileMenuOpen
                  ? <X size={18} />
                  : <Menu size={18} />
                }
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════
          Mobile Drawer — Full-screen overlay
          ══════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-[55] md:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Frosted glass backdrop */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(255,255,255,0.88)',
            backdropFilter: 'saturate(180%) blur(24px)',
            WebkitBackdropFilter: 'saturate(180%) blur(24px)',
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer panel */}
        <nav
          className="absolute top-0 right-0 bottom-0 w-full sm:w-80 flex flex-col p-8 pt-20"
          style={{
            background: 'hsl(var(--background))',
            borderLeft: '1px solid hsl(var(--border))',
          }}
          aria-label="Mobile navigation"
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-5 right-6 w-9 h-9 flex items-center justify-center rounded-full"
            style={{ background: 'hsl(var(--secondary))', color: 'hsl(var(--foreground))' }}
          >
            <X size={18} />
          </button>

          {/* Nav links */}
          <div className="flex flex-col gap-1 mb-auto">
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center px-4 py-3.5 rounded-2xl text-base font-semibold transition-all duration-200"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: isActive(link.path) ? 700 : 500,
                  color: isActive(link.path)
                    ? 'hsl(var(--accent))'
                    : 'hsl(var(--foreground))',
                  background: isActive(link.path)
                    ? 'hsl(var(--accent) / 0.08)'
                    : 'transparent',
                  transform: isMobileMenuOpen
                    ? 'translateX(0)'
                    : 'translateX(20px)',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transition: `transform 400ms ${i * 60}ms cubic-bezier(0.0,0.0,0.2,1),
                               opacity 400ms ${i * 60}ms cubic-bezier(0.0,0.0,0.2,1),
                               background 200ms, color 200ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-auto pt-8 border-t" style={{ borderColor: 'hsl(var(--border))' }}>
            <Link
              to="/contact"
              className="block w-full py-3.5 text-center rounded-2xl text-sm font-bold transition-all active:scale-95"
              style={{
                background: 'hsl(var(--accent))',
                color: 'hsl(var(--accent-foreground))',
                boxShadow: '0 4px 20px hsl(var(--accent) / 0.3)',
              }}
            >
              Contact
            </Link>
            <p
              className="text-center text-xs mt-3"
              style={{ color: 'hsl(var(--muted-foreground))', fontFamily: 'var(--font-body)' }}
            >
              Open to global opportunities
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
