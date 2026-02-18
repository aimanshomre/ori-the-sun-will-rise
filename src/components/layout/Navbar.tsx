import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import MobileMenu from './MobileMenu';

const navLinks = [
  { label: 'ראשי', href: '#hero' },
  { label: 'אודות', href: '#about' },
  { label: 'למה אני', href: '#why' },
  { label: 'שירותים', href: '#services' },
  { label: 'איך זה עובד', href: '#how' },
  { label: 'המלצות', href: '#testimonials' },
  { label: 'לזכרם', href: '#memorial' },
  { label: 'הפלוגה בתקשורת', href: '#media' },
  { label: 'צור קשר', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-[#E5DDD4] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20 overflow-hidden">
          {/* Logo */}
          <button onClick={() => scrollTo('#hero')} className={`text-xl font-bold tracking-wide cursor-pointer transition-colors shrink-0 ${scrolled ? 'text-[#C9B59C]' : 'text-white'}`}>
            אורי חוכימה
          </button>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-sm transition-colors duration-200 cursor-pointer ${
                  activeSection === link.href.slice(1)
                    ? 'text-[#C9B59C] font-medium'
                    : scrolled
                      ? 'text-[#7A7068] hover:text-[#C9B59C]'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden lg:block bg-[#C9B59C] text-white font-bold text-sm px-6 py-2.5 rounded-lg hover:bg-[#B8A48A] transition-colors cursor-pointer"
          >
            לתיאום הרצאה
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden text-2xl cursor-pointer transition-colors ${
              scrolled ? 'text-[#1A1A1A]' : 'text-white'
            }`}
            aria-label="תפריט"
          >
            {mobileOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </motion.nav>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
        onNavigate={scrollTo}
      />
    </>
  );
}
