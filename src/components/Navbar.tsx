import { Page } from '../types';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Methodology', value: 'methodology' },
    { label: 'Certification', value: 'certification' },
    { label: 'For Consultants', value: 'consultants' },
    { label: 'For Companies', value: 'companies' },
    { label: 'FAQ', value: 'faq' },
    { label: 'Pricing', value: 'pricing' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-offwhite/90 backdrop-blur-md border-b border-brand-deepblue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="leading-none">
              <span className="block text-xs font-bold tracking-widest uppercase text-brand-muted">Strategic Human Systems & Governance LLC</span>
              <span className="block text-lg font-display font-bold tracking-tighter text-brand-deepblue">
                SME Resilience <span className="text-brand-accent">Academy™</span>
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                  currentPage === item.value ? 'text-brand-accent' : 'text-brand-deepblue/70'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate('pricing')}
              className="bg-brand-accent text-white px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-all flex items-center gap-2 group shadow-lg shadow-brand-accent/30"
            >
              Get Certified Now
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-deepblue p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-brand-offwhite border-b border-brand-deepblue/5 px-4 pt-2 pb-6 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                onNavigate(item.value);
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-4 text-base font-medium text-brand-deepblue hover:bg-brand-deepblue/5 rounded-lg"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              onNavigate('pricing');
              setIsOpen(false);
            }}
            className="block w-full text-center bg-brand-accent text-white px-3 py-4 rounded-lg text-base font-bold"
          >
            Get Certified Now
          </button>
        </div>
      )}
    </nav>
  );
}
