import { Page } from '../types';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { label: string; value: Page }[] = [
  { label: 'About', value: 'about' },
  { label: 'Methodology', value: 'methodology' },
  { label: 'Services', value: 'services' },
  { label: 'Contact', value: 'contact' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigate = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled ? 'rgba(248,247,245,0.98)' : 'rgba(248,247,245,0.85)',
          boxShadow: scrolled ? '0 1px 0 rgba(27,58,92,0.10)' : '0 1px 0 rgba(27,58,92,0.05)',
        }}
        transition={{ duration: 0.25 }}
        className="sticky top-0 z-50 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">

            {/* Logo */}
            <button
              onClick={() => navigate('home')}
              className="flex items-center gap-3 group"
              aria-label="Strategic Human Systems & Governance LLC — Home"
            >
              <div className="w-9 h-9 rounded-md bg-brand-navy flex items-center justify-center flex-shrink-0 group-hover:bg-brand-navy-deep transition-colors">
                <span className="text-white font-display font-bold text-[10px] tracking-wider leading-none">SHSG</span>
              </div>
              <div className="leading-none hidden sm:block">
                <span className="block text-sm font-sans font-semibold tracking-tight text-brand-navy">
                  Strategic Human
                </span>
                <span className="block text-[10px] font-medium tracking-wider uppercase text-brand-muted mt-0.5">
                  Systems &amp; Governance LLC
                </span>
              </div>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const active = currentPage === item.value;
                return (
                  <button
                    key={item.value}
                    onClick={() => navigate(item.value)}
                    className="relative px-4 py-2 text-sm font-medium rounded transition-colors group"
                  >
                    <span className={active ? 'text-brand-navy' : 'text-brand-navy/50 group-hover:text-brand-navy transition-colors'}>
                      {item.label}
                    </span>
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0.5 left-4 right-4 h-px rounded-full bg-brand-teal"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => navigate('contact')}
                className="bg-brand-navy text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-brand-navy-deep transition-colors"
              >
                Schedule a Consultation
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded hover:bg-brand-navy/5 transition-colors text-brand-navy"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-brand-navy/20 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed top-[68px] left-4 right-4 z-50 lg:hidden bg-white rounded-xl shadow-xl border border-brand-border overflow-hidden"
            >
              <div className="p-2">
                {navItems.map((item) => {
                  const active = currentPage === item.value;
                  return (
                    <button
                      key={item.value}
                      onClick={() => navigate(item.value)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        active ? 'bg-brand-navy text-white' : 'text-brand-navy hover:bg-brand-warm'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
              <div className="px-2 pb-2">
                <button
                  onClick={() => navigate('contact')}
                  className="w-full bg-brand-navy text-white py-3 rounded-lg font-medium text-sm hover:bg-brand-navy-deep transition-colors"
                >
                  Schedule a Consultation
                </button>
              </div>
              <div className="px-5 py-3 border-t border-brand-border">
                <p className="text-[10px] text-brand-muted uppercase tracking-widest">
                  Strategic Human Systems &amp; Governance LLC — St. Petersburg, FL
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
