import { motion } from 'motion/react';
import { Page } from '../types';
import { ArrowRight, ShieldCheck, BarChart3, Users, Award } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="editorial-grid">
            <div className="col-span-12 lg:col-span-7 z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  SME Resilience Toolkit™ Official Portal
                </div>
                <h1 className="text-6xl lg:text-8xl font-bold leading-[1] mb-8">
                  Stop Selling HR. <br/>
                  <span className="text-brand-accent italic">Start Governing Profit.</span>
                </h1>
                <p className="text-xl text-brand-muted mb-10 max-w-xl leading-relaxed">
                  Turnover is a financial hemorrhage. Master the only framework that translates human volatility into executive intelligence and operational stability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="bg-brand-deepblue text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-blue transition-all flex items-center justify-center gap-2 shadow-2xl shadow-brand-deepblue/40"
                  >
                    Request Executive Access
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => onNavigate('methodology')}
                    className="bg-white text-brand-deepblue border border-brand-deepblue/20 px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-deepblue/5 transition-all"
                  >
                    View the Protocol
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="hidden lg:block lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-full"
              >
                <div className="relative w-full h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                    alt="Corporate Headquarters" 
                    className="rounded-3xl shadow-2xl grayscale brightness-75 hover:grayscale-0 transition-all duration-1000 w-full h-[600px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deepblue/60 to-transparent rounded-3xl" />
                  
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 -left-10 glass-card p-6 rounded-2xl border-l-4 border-brand-accent shadow-2xl"
                  >
                    <div className="text-brand-accent font-bold text-3xl mb-1">$2.4M</div>
                    <div className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">Avg. Annual Loss Detected</div>
                  </motion.div>

                  <motion.div 
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-10 -right-10 bg-brand-deepblue p-8 rounded-2xl shadow-2xl border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-brand-accent animate-ping" />
                      <span className="text-xs font-bold uppercase tracking-widest text-white/80">Live Governance</span>
                    </div>
                    <div className="text-lg font-bold text-white">Predictive Risk: 84% Accuracy</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Aggressive Proof Section */}
      <section className="py-24 bg-white border-y border-brand-deepblue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-6">Built for the <br/><span className="text-brand-accent">Boardroom.</span></h2>
              <p className="text-brand-muted leading-relaxed">
                We don't teach "soft skills." We provide the technical architecture to govern human systems with the same precision as financial systems.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-brand-offwhite border border-brand-deepblue/5">
                <BarChart3 className="w-10 h-10 text-brand-accent mb-6" />
                <h3 className="text-xl font-bold mb-3">Fiscal Impact Modeling</h3>
                <p className="text-brand-muted text-sm">Stop guessing. Quantify the exact cost of organizational fragility and present it in the language of the CFO.</p>
              </div>
              <div className="p-8 rounded-2xl bg-brand-offwhite border border-brand-deepblue/5">
                <ShieldCheck className="w-10 h-10 text-brand-accent mb-6" />
                <h3 className="text-xl font-bold mb-3">Systemic Governance</h3>
                <p className="text-brand-muted text-sm">Implement protocols that ensure business continuity, regardless of individual turnover volatility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Methodological Authority Section */}
      <section className="py-32 bg-brand-deepblue overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="w-full lg:w-5/12 sticky top-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
                  className="rounded-3xl shadow-2xl border border-white/10" 
                  alt="Aline Cristina de Sousa Gosuen - Strategist in Human Systems Governance" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-brand-accent p-6 rounded-2xl shadow-2xl">
                  <div className="text-brand-deepblue font-bold text-lg leading-tight">
                    Aline Cristina de Sousa Gosuen<br/>
                    <span className="text-sm opacity-80 font-medium">Founder & Chief Strategist</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-7/12 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Strategist in <span className="text-brand-accent italic">Human Systems Governance.</span>
                </h2>
                <p className="text-xl text-brand-muted mb-12 leading-relaxed italic">
                  "My mission is to transform corporate structures into ecosystems of high performance, sustainability, and social impact through the synergy of exact sciences and behavioral depth."
                </p>

                <div className="space-y-12">
                  <div>
                    <h3 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">High-Impact Academic Background</h3>
                    <p className="text-white/80 leading-relaxed">
                      Master’s degree in Regional Development (Uni-FACEF), specializing in Public Policy and Business Incubation. Strengthened by an MBA in Controllership and Finance (USP), postgraduate specialization in Labor Law, and a background in Organizational Psychology, complemented by certifications in Agile Methodologies and Behavioral Profile Analysis.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Experience and Proven Results</h3>
                    <div className="space-y-6">
                      <div className="border-l-2 border-brand-accent/30 pl-6">
                        <h4 className="font-bold text-lg mb-2">Institutional Leadership (Brazilian Paralympic Committee)</h4>
                        <p className="text-brand-muted text-sm">Led national-scale projects responsible for generating over 900 direct jobs for people with disabilities and providing technical training to hundreds of professionals and companies nationwide.</p>
                      </div>
                      <div className="border-l-2 border-brand-accent/30 pl-6">
                        <h4 className="font-bold text-lg mb-2">Operational Excellence (U.S. Multinationals)</h4>
                        <p className="text-brand-muted text-sm">Managed strategic business units for global giants (McDonald’s and Burger King), mastering international standards of controllership, auditing, and budgetary efficiency.</p>
                      </div>
                      <div className="border-l-2 border-brand-accent/30 pl-6">
                        <h4 className="font-bold text-lg mb-2">Proprietary Methodologies</h4>
                        <p className="text-brand-muted text-sm">Developed exclusive frameworks for Productive Inclusion and High-Performance Career Transition, integrating financial indicators, legal compliance, and emotional intelligence.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                    <h3 className="text-white font-bold mb-4">Global Vision</h3>
                    <p className="text-brand-muted leading-relaxed">
                      Currently channeling expertise into Strategic Human Systems & Governance LLC, applying resilience management models to strengthen SMEs by bridging the gap between data analysis and human governance.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Aggressive CTA */}
      <section className="py-32 bg-brand-accent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-5xl lg:text-8xl font-bold mb-10 tracking-tighter">
            DOMINATE THE <br/>MARKET.
          </h2>
          <p className="text-2xl mb-12 max-w-2xl mx-auto font-medium opacity-90">
            The era of "soft" HR is over. Join the elite governing the future of human systems.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-brand-deepblue text-white px-16 py-6 rounded-full font-bold text-2xl hover:scale-105 transition-transform shadow-3xl shadow-black/40"
          >
            Apply for Certification
          </button>
        </div>
      </section>
    </div>
  );
}
