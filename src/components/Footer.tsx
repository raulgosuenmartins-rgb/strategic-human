import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-md bg-white/15 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-display font-bold text-[9px] tracking-wider">SHSG</span>
              </div>
              <span className="text-sm font-semibold tracking-tight text-white">
                Strategic Human Systems &amp; Governance LLC
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-md mb-6">
              Workforce stability and operational governance for American small and medium businesses
              in frontline operations — retail, foodservice, hospitality, contact centers, and consumer logistics.
            </p>
            <div className="text-xs text-white/40 space-y-1">
              <p>Registered in the State of Florida</p>
              <p>Articles of Organization filed April 24, 2026</p>
              <p>7901 4th St N STE 300, St. Petersburg FL 33702</p>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-5">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => onNavigate('about')} className="text-white/60 hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('methodology')} className="text-white/60 hover:text-white transition-colors">
                  Methodology
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="text-white/60 hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-white/60 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Strategic Human Systems &amp; Governance LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* LinkedIn icon — href to be updated when Aline provides profile URL */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/40 hover:text-white/80 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:contact@strategic-human.com"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              contact@strategic-human.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
