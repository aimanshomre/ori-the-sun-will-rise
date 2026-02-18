import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  activeSection: string;
  onNavigate: (href: string) => void;
}

export default function MobileMenu({ isOpen, onClose, navLinks, activeSection, onNavigate }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg lg:hidden"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
                onClick={() => onNavigate(link.href)}
                className={`text-xl transition-colors cursor-pointer ${
                  activeSection === link.href.slice(1)
                    ? 'text-[#C9B59C] font-bold'
                    : 'text-[#7A7068] hover:text-[#C9B59C]'
                }`}
              >
                {link.label}
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onClick={() => onNavigate('#contact')}
              className="mt-4 bg-[#C9B59C] text-white font-bold text-lg px-8 py-3 rounded-lg cursor-pointer"
            >
              לתיאום הרצאה
            </motion.button>
          </div>

          {/* Close tap area */}
          <button
            onClick={onClose}
            className="absolute top-6 left-6 text-[#7A7068] text-sm cursor-pointer"
            aria-label="סגור תפריט"
          >
            סגור
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
