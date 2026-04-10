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
            <div className="col-span-12 lg:col-span-8 z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Strategic Human Systems & Governance
                </div>
                <h1 className="text-6xl lg:text-8xl font-bold leading-[1] mb-8">
                  Turn Human Volatility into <br/>
                  <span className="text-brand-accent italic">Exceptional Profit.</span>
                </h1>
                <p className="text-xl text-brand-muted mb-10 max-w-2xl leading-relaxed">
                  Turnover and diversity mandates don't have to be financial hemorrhages. 
                  Deploy our proprietary SME Resilience Toolkit™ to integrate control, governance, and psychology — protecting your margins and maximizing your human capital.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="bg-brand-deepblue text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-blue transition-all flex items-center justify-center gap-2 shadow-2xl shadow-brand-deepblue/40"
                  >
                    DEPLOY FOR MY COMPANY
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => onNavigate('methodology')}
                    className="bg-white text-brand-deepblue border border-brand-deepblue/20 px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-deepblue/5 transition-all"
                  >
                    GET CERTIFIED AS A CONSULTANT
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="hidden lg:block lg:col-span-4 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-full"
              >
                <div className="relative w-full h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                    alt="Corporate Business Structure" 
                    className="rounded-3xl shadow-2xl grayscale brightness-75 hover:grayscale-0 transition-all duration-1000 w-full h-[600px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deepblue/60 to-transparent rounded-3xl" />
                  
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 -left-10 glass-card p-6 rounded-2xl border-l-4 border-brand-accent shadow-2xl"
                  >
                    <div className="text-brand-accent font-bold text-3xl mb-1">-22%</div>
                    <div className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">Turnover Reduction</div>
                  </motion.div>

                  <motion.div 
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-10 -right-10 bg-brand-deepblue p-8 rounded-2xl shadow-2xl border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-brand-accent animate-ping" />
                      <span className="text-xs font-bold uppercase tracking-widest text-white/80">SME Resilience Toolkit</span>
                    </div>
                    <div className="text-sm font-bold text-white">DEIA Compliance converted into Assets</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies Section */}
      <section className="py-24 bg-white border-y border-brand-deepblue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <div className="text-brand-accent font-bold text-sm tracking-widest uppercase mb-4">Pilar 1: For SME Executives</div>
              <h2 className="text-4xl font-bold mb-6">Stop managing people. <br/><span className="text-brand-accent">Start Governing Metrics.</span></h2>
              <p className="text-brand-muted leading-relaxed">
                Traditional HR solves engagement; we solve financial hemorrhage. The SME Resilience Toolkit™ provides the technical architecture to integrate vulnerable populations and mitigate turnover cost with absolute precision.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-brand-offwhite border border-brand-deepblue/5">
                <BarChart3 className="w-10 h-10 text-brand-accent mb-6" />
                <h3 className="text-xl font-bold mb-3">Fiscal Impact Mitigation</h3>
                <p className="text-brand-muted text-sm">Convert inclusion mandates into productivity assets. Transform compliance requirements into measurable financial gain.</p>
              </div>
              <div className="p-8 rounded-2xl bg-brand-offwhite border border-brand-deepblue/5">
                <ShieldCheck className="w-10 h-10 text-brand-accent mb-6" />
                <h3 className="text-xl font-bold mb-3">Systemic Resilience</h3>
                <p className="text-brand-muted text-sm">Implement exact frameworks (ORI™, SRZ™, FCE™, NFG™) ensuring operational continuity independent of individual volatility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Consultants Section */}
      <section className="py-24 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-2 order-2 lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-white shadow-sm border border-brand-deepblue/5">
                <Award className="w-10 h-10 text-brand-deepblue mb-6" />
                <h3 className="text-xl font-bold mb-3">Certified Network Access</h3>
                <p className="text-brand-muted text-sm">Gain exclusive rights to utilize SHSG’s 60+ page intellectual property portfolio and resilience frameworks.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white shadow-sm border border-brand-deepblue/5">
                <Users className="w-10 h-10 text-brand-deepblue mb-6" />
                <h3 className="text-xl font-bold mb-3">High-Ticket Transition</h3>
                <p className="text-brand-muted text-sm">Move away from discretionary soft-skills consulting toward highly strategic, C-Level Governance advisory.</p>
              </div>
            </div>
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="text-brand-deepblue font-bold text-sm tracking-widest uppercase mb-4 opacity-70">Pilar 2: For Consultants & Advisors</div>
              <h2 className="text-4xl font-bold mb-6">Scale your practice with <br/><span className="text-brand-deepblue">Proprietary IP.</span></h2>
              <p className="text-brand-muted leading-relaxed">
                Join our national network of licensed experts. Become the authority in Human Systems Governance by deploying methodologies that speak directly to the CFO's bottom line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
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
                  src="/strategic-human/founder.png" 
                  className="rounded-3xl shadow-2xl border border-white/10" 
                  alt="Aline Cristina de Souza - CEO and Founder" 
                />
                <div className="absolute -bottom-6 -right-6 bg-brand-accent p-6 rounded-2xl shadow-2xl">
                  <div className="text-brand-deepblue font-bold text-lg leading-tight">
                    Aline Cristina de Souza<br/>
                    <span className="text-sm opacity-80 font-medium">Founder & CEO</span>
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
                  Architect of <span className="text-brand-accent italic">Productive Inclusion.</span>
                </h2>
                <p className="text-xl text-brand-muted mb-12 leading-relaxed italic">
                  "My mission is to transform corporate structures into ecosystems of high performance and social impact, bridging the gap between exact sciences and behavioral depth."
                </p>

                <div className="space-y-12">
                  <div>
                    <h3 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">High-Impact Academic Background</h3>
                    <p className="text-white/80 leading-relaxed">
                      Master’s degree in Regional Development (UNIFACEF) and MBA in Controllership and Finance (USP). Background in Mathematics, fortified by executive specializations in Labor Law and Organizational Psychology. 
                    </p>
                  </div>

                  <div>
                    <h3 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Executive Leadership</h3>
                    <div className="space-y-6">
                      <div className="border-l-2 border-brand-accent/30 pl-6">
                        <h4 className="font-bold text-lg mb-2">Institutional Leadership (National Scale)</h4>
                        <p className="text-brand-muted text-sm">Led large-scale projects at the Brazilian Paralympic Committee generating almost 1,000 direct jobs for vulnerable populations, aligning inclusion with technical performance.</p>
                      </div>
                      <div className="border-l-2 border-brand-accent/30 pl-6">
                        <h4 className="font-bold text-lg mb-2">Operational Excellence (U.S. Brands)</h4>
                        <p className="text-brand-muted text-sm">Guided global operations managing strategic units for McDonald's and Burger King, executing controllership and budgetary efficiency.</p>
                      </div>
                      <div className="border-l-2 border-brand-accent/30 pl-6">
                        <h4 className="font-bold text-lg mb-2">Proprietary IP Creator</h4>
                        <p className="text-brand-muted text-sm">Developer of the SME Resilience Toolkit™, providing the blueprint for resilient organizational continuity through unique frameworks.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-32 bg-brand-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-5xl lg:text-7xl font-bold mb-10 tracking-tighter">
            PROFIT THROUGH <br/>GOVERNANCE.
          </h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto font-medium opacity-90">
            Choose your trajectory. Transform your company's turnover into equity, or elevate your consulting practice to the C-Level.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-brand-deepblue text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl"
            >
              For Companies: Deploy Toolkit
            </button>
            <button 
              onClick={() => onNavigate('methodology')}
              className="bg-white text-brand-deepblue px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl"
            >
              For Consultants: Get Certified
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
