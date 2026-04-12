import { Page } from '../types';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { label: string; value: Page }[] = [
  { label: 'Methodology', value: 'methodology' },
  { label: 'Certification', value: 'certification' },
  { label: 'Consultants', value: 'consultants' },
  { label: 'Companies', value: 'companies' },
  { label: 'Investment', value: 'pricing' },
  { label: 'FAQ', value: 'faq' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close mobile menu on navigation
  const navigate = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled ? 'rgba(253,252,251,0.97)' : 'rgba(253,252,251,0.80)',
          boxShadow: scrolled ? '0 1px 0 rgba(10,25,47,0.08)' : '0 1px 0 rgba(10,25,47,0.04)',
        }}
        transition={{ duration: 0.25 }}
        className="sticky top-0 z-50 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">

            {/* ── Logo ── */}
            <button
              onClick={() => navigate('home')}
              className="flex items-center gap-3 group"
            >
              {/* Monogram */}
              <div className="w-9 h-9 rounded-lg bg-brand-deepblue flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors">
                <span className="text-white font-display font-bold text-sm tracking-tight">SRA</span>
              </div>
              {/* Text */}
              <div className="leading-none">
                <span className="block text-base font-display font-bold tracking-tight text-brand-deepblue">
                  SME Resilience <span className="text-brand-accent">Academy™</span>
                </span>
                <span className="block text-[10px] font-medium tracking-wider uppercase text-brand-muted/70 mt-0.5">
                  Strategic Human Systems & Governance
                </span>
              </div>
            </button>

            {/* ── Desktop nav ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const active = currentPage === item.value;
                return (
                  <button
                    key={item.value}
                    onClick={() => navigate(item.value)}
                    className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors group"
                  >
                    <span className={active ? 'text-brand-deepblue' : 'text-brand-deepblue/55 group-hover:text-brand-deepblue transition-colors'}>
                      {item.label}
                    </span>
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-brand-accent"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* ── CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => navigate('contact')}
                className="flex items-center gap-2 bg-brand-deepblue text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-brand-blue transition-all group shadow-sm"
              >
                Book a Call
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* ── Mobile toggle ── */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-brand-deepblue/5 transition-colors text-brand-deepblue"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-brand-deepblue/20 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="fixed top-[72px] left-4 right-4 z-50 lg:hidden bg-white rounded-2xl shadow-2xl shadow-brand-deepblue/15 border border-brand-deepblue/5 overflow-hidden"
            >
              {/* Nav links */}
              <div className="p-3">
                {navItems.map((item, i) => {
                  const active = currentPage === item.value;
                  return (
                    <motion.button
                      key={item.value}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => navigate(item.value)}
                      className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-left text-sm font-medium transition-colors ${
                        active
                          ? 'bg-brand-deepblue text-white'
                          : 'text-brand-deepblue hover:bg-brand-offwhite'
                      }`}
                    >
                      {item.label}
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />}
                    </motion.button>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="px-3 pb-3">
                <button
                  onClick={() => navigate('contact')}
                  className="w-full flex items-center justify-center gap-2 bg-brand-accent text-white py-4 rounded-xl font-bold text-sm hover:bg-brand-accent/90 transition-colors"
                >
                  Book a Discovery Call
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Footer brand */}
              <div className="px-5 pb-4 pt-1 border-t border-brand-deepblue/5">
                <p className="text-[10px] text-brand-muted/60 uppercase tracking-widest font-medium">
                  Strategic Human Systems & Governance LLC
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
