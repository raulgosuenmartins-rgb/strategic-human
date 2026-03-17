import { motion } from 'motion/react';
import { BookOpen, Target, Zap, TrendingUp, Shield, Database } from 'lucide-react';

export default function Methodology() {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">The Framework</div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8">SME Resilience Toolkit™</h1>
          <p className="text-xl text-brand-muted leading-relaxed">
            A proprietary architecture designed to transform human capital signals into operational intelligence. Our methodology bridges the gap between traditional HR and executive business strategy.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: <Database className="w-6 h-6" />,
              title: "ORI™ Index",
              desc: "The Organizational Resilience Index. A weighted metric that quantifies structural fragility across 12 key dimensions."
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "Predictive Turnover",
              desc: "Algorithms that identify flight risk patterns before they impact the bottom line, allowing for proactive intervention."
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Operational Stability",
              desc: "Protocols to reduce dependency on key individuals and ensure business continuity through human capital design."
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Inclusive Productivity",
              desc: "A data-driven approach to DEI that focuses on measurable output and organizational health rather than just quotas."
            },
            {
              icon: <Target className="w-6 h-6" />,
              title: "Fiscal Impact",
              desc: "Translating HR metrics into the language of the CFO. Calculate the real cost of burnout and turnover volatility."
            },
            {
              icon: <BookOpen className="w-6 h-6" />,
              title: "Integrity Protocol",
              desc: "A rigorous ethical framework that ensures data privacy and methodological consistency across all applications."
            }
          ].map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-brand-deepblue/5 shadow-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-deepblue/5 text-brand-accent flex items-center justify-center mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-brand-muted leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Scientific Foundation */}
        <div className="bg-brand-deepblue text-white rounded-[3rem] p-12 lg:p-20 overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">Scientific Rigor meets Commercial Reality.</h2>
              <p className="text-brand-muted text-lg mb-8 leading-relaxed">
                The SME Resilience Toolkit™ isn't just a collection of best practices. It's a system built on decades of research in organizational psychology and process engineering, adapted for the modern, high-velocity US market.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-brand-accent mb-1">12+</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-white/60">Core Dimensions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-accent mb-1">Proprietary</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-white/60">ORI™ Algorithms</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center">
                <div className="aspect-square w-3/4 rounded-full border border-brand-accent/30 flex items-center justify-center animate-pulse">
                  <div className="text-center">
                    <div className="text-brand-accent font-display text-6xl font-bold">ORI</div>
                    <div className="text-xs font-bold uppercase tracking-widest">Core Engine</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
