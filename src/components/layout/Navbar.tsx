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
  { label: 'מדיה', href: '#media' },
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
            ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#2A2A2A]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo — right side in RTL */}
          <button onClick={() => scrollTo('#hero')} className="text-xl font-bold text-[#D4A843] tracking-wide cursor-pointer">
            אורי חוכימה
          </button>

          {/* Desktop nav links — center */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-sm transition-colors duration-200 cursor-pointer ${
                  activeSection === link.href.slice(1)
                    ? 'text-[#D4A843] font-medium'
                    : 'text-[#A0A0A0] hover:text-[#D4A843]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA — left side in RTL */}
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden lg:block bg-[#D4A843] text-[#0A0A0A] font-bold text-sm px-6 py-2.5 rounded-lg hover:bg-[#E8C96A] transition-colors cursor-pointer"
          >
            לתיאום הרצאה
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[#F5F5F5] text-2xl cursor-pointer"
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
