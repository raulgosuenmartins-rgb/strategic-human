import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-brand-deepblue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-xl font-display font-bold tracking-tighter mb-6 block leading-tight">
              STRATEGIC HUMAN<br/>
              <span className="text-brand-accent">SYSTEM & GOVERNANCE LLC</span>
            </span>
            <p className="text-brand-muted max-w-md mb-8">
              The definitive framework for organizational resilience and human governance. Empowering HR consultants to transform businesses through data-driven methodology and executive-level insight.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-6 text-white/90">Platform</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li><button onClick={() => onNavigate('methodology')} className="hover:text-brand-accent transition-colors">Methodology</button></li>
              <li><button onClick={() => onNavigate('certification')} className="hover:text-brand-accent transition-colors">Certification</button></li>
              <li><button onClick={() => onNavigate('consultants')} className="hover:text-brand-accent transition-colors">For Consultants</button></li>
              <li><button onClick={() => onNavigate('companies')} className="hover:text-brand-accent transition-colors">For Companies</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-6 text-white/90">Legal</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li><button className="hover:text-brand-accent transition-colors">Privacy Policy</button></li>
              <li><button className="hover:text-brand-accent transition-colors">Terms of Service</button></li>
              <li><button className="hover:text-brand-accent transition-colors">Compliance</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-brand-accent transition-colors">Contact</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-muted">
            © {new Date().getFullYear()} SME Resilience Toolkit™. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-brand-muted">
            <span>Based in the United States</span>
            <span>Methodological Authority</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
