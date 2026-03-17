import { motion } from 'motion/react';
import { Building2, BarChart, Users2, ShieldAlert } from 'lucide-react';

export default function Companies() {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Institutional Value</div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8">Resilience is your <span className="text-brand-accent italic">competitive edge.</span></h1>
          <p className="text-xl text-brand-muted leading-relaxed">
            For organizations, the SME Resilience Toolkit™ provides a systematic way to detect fragilities before they become crises. Reduce turnover, eliminate burnout, and build a high-performance culture backed by science.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          <div className="bg-brand-deepblue text-white p-12 rounded-[2.5rem] flex flex-col justify-between">
            <div>
              <Building2 className="w-12 h-12 text-brand-accent mb-8" />
              <h3 className="text-3xl font-bold mb-6">Enterprise Licensing</h3>
              <p className="text-brand-muted text-lg mb-8 leading-relaxed">
                Bring the framework in-house. License the methodology for your internal HR teams and standardize your resilience monitoring across all departments.
              </p>
            </div>
            <button className="w-fit bg-brand-accent text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              Discuss Licensing
            </button>
          </div>
          <div className="bg-brand-offwhite border border-brand-deepblue/5 p-12 rounded-[2.5rem] flex flex-col justify-between">
            <div>
              <Users2 className="w-12 h-12 text-brand-accent mb-8" />
              <h3 className="text-3xl font-bold mb-6">Group Certification</h3>
              <p className="text-brand-muted text-lg mb-8 leading-relaxed">
                Certify your entire People Operations team. Ensure every leader is equipped with the same high-level diagnostic and intervention tools.
              </p>
            </div>
            <button className="w-fit bg-brand-deepblue text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              Request Group Quote
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <BarChart className="w-8 h-8 text-brand-accent" />,
              title: "Data-Driven Decisions",
              desc: "Stop guessing why people leave. Use the ORI™ index to identify the root causes of organizational friction."
            },
            {
              icon: <ShieldAlert className="w-8 h-8 text-brand-accent" />,
              title: "Risk Detection",
              desc: "Identify burnout and turnover intent months in advance, allowing for low-cost, high-impact interventions."
            },
            {
              icon: <BarChart className="w-8 h-8 text-brand-accent" />,
              title: "Fiscal Stability",
              desc: "Reduce the massive hidden costs of turnover and operational volatility through structural resilience."
            }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-brand-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
