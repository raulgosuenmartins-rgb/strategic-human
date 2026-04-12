import { motion } from 'motion/react';
import {
  BookOpen, Database, Users, LineChart, DollarSign, Award,
  ArrowRight, CheckCircle
} from 'lucide-react';
import { Page } from '../types';

interface MethodologyProps {
  onNavigate?: (page: Page) => void;
}

const modules = [
  {
    num: '01',
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Scientific Foundations',
    subtitle: 'Interdisciplinary Framework',
    desc: 'An integrated framework drawing from Applied Mathematics, Organizational Psychology, and Process Engineering — giving every engagement a theoretical backbone that boards and investors respect.',
    outcomes: ['Structured diagnostic framework for any SME context', 'Theoretical credibility that differentiates your proposals', 'Repeatable assessment architecture across all clients'],
  },
  {
    num: '02',
    icon: <Database className="w-6 h-6" />,
    title: 'Analytical Governance',
    subtitle: 'Proprietary Quantitative Indices',
    desc: 'Ten proprietary indices that transform organizational data into a single, trackable score — with every recommendation mathematically traceable back to the source.',
    outcomes: ['A composite resilience score suitable for board reporting', 'Quantified risk classification across five tiers', 'Defensible recommendations that no opinion-based report can match'],
  },
  {
    num: '03',
    icon: <Users className="w-6 h-6" />,
    title: 'Human Capital & Productive Inclusion',
    subtitle: 'Workforce as Strategic Asset',
    desc: 'A structured approach to workforce integration that converts underutilized talent segments into measurable high-stability assets — without sacrificing operational performance.',
    outcomes: ['Six-step inclusive recruitment protocol validated for SMEs', 'Retention engineered as a structural system, not a morale initiative', 'Documented productivity outcomes from diverse workforce integration'],
  },
  {
    num: '04',
    icon: <LineChart className="w-6 h-6" />,
    title: 'Monitoring & Organizational Intelligence',
    subtitle: 'Intervention Before Rupture',
    desc: 'A multidimensional dashboard that integrates financial, operational, and human signals — detecting instability before it becomes a crisis.',
    outcomes: ['Early detection instruments for burnout and climate volatility', 'Real-time indicators across three organizational dimensions', 'A data foundation for ongoing retainer advisory relationships'],
  },
  {
    num: '05',
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Fiscal Impact Modeling',
    subtitle: 'Institutional-Grade ROI Documentation',
    desc: 'The only HR consulting model designed to produce auditable fiscal ROI documentation — calibrated against federal agency datasets and validated through rigorous statistical methods.',
    outcomes: ['Document the public fiscal value of every workforce intervention', 'Open institutional markets: government, nonprofits, workforce agencies', 'Produce deliverables defensible in federal procurement and grant reporting'],
  },
  {
    num: '06',
    icon: <Award className="w-6 h-6" />,
    title: 'Certification & Licensing Structure',
    subtitle: 'A License, Not a Certificate',
    desc: 'A three-tier practitioner structure that defines exactly what each certified practitioner is authorized to do — and grants the exclusive right to deploy the methodology in paying engagements.',
    outcomes: ['Non-exclusive methodology license for client work', 'Code of Methodological Integrity governing all deployments', 'Clear authorization scope that protects you and your clients'],
  },
];

export default function Methodology({ onNavigate }: MethodologyProps) {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-24">
          <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">The Framework</div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            SME Resilience<br />Toolkit™
          </h1>
          <p className="text-xl text-brand-muted leading-relaxed">
            A proprietary, science-backed methodology for diagnosing, quantifying, and
            strengthening organizational resilience in small and medium-sized U.S. businesses.
            Built for a single purpose: to give practitioners a system that clients pay
            premium fees to access.
          </p>
        </div>

        {/* Comparison: what this is vs what it isn't */}
        <div className="bg-brand-offwhite rounded-3xl p-8 lg:p-14 mb-24 border border-brand-deepblue/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">This is a Practitioner License. Not Another Certificate.</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-deepblue/10">
                  <th className="text-left py-4 px-5 font-bold text-brand-muted uppercase tracking-wider text-xs w-1/3">Criteria</th>
                  <th className="text-center py-4 px-5 font-bold text-brand-muted uppercase tracking-wider text-xs w-1/3">SHRM / HRCI</th>
                  <th className="text-center py-4 px-5 font-bold text-brand-accent uppercase tracking-wider text-xs w-1/3">SME Resilience Academy™</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Nature', 'Knowledge test', 'Practitioner license with proprietary methodology'],
                  ['Deliverable to clients', 'None — certification is for the professional', 'Resilience score + auditable fiscal impact documentation'],
                  ['Market differentiation', 'Shared by thousands of other practitioners', 'Exclusive — unavailable at any other institution in the U.S.'],
                  ['Client-facing tools', 'None', 'Proprietary diagnostic indices + licensed delivery system'],
                  ['Billing model', 'Hourly (competing on rate)', 'Fixed-fee projects with documented ROI'],
                  ['Target market', 'All sectors and sizes', 'U.S. SMEs — a 33M-business segment with no equivalent tool'],
                  ['Renewal', '3 years, continuing education credits', '3 years + mandatory methodology update module'],
                ].map(([crit, existing, academy], i) => (
                  <tr key={i} className="border-b border-brand-deepblue/5 last:border-0">
                    <td className="py-5 px-5 font-semibold text-brand-deepblue">{crit}</td>
                    <td className="py-5 px-5 text-center text-brand-muted">{existing}</td>
                    <td className="py-5 px-5 text-center font-semibold text-brand-deepblue">{academy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 6 modules */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Curriculum</div>
            <h2 className="text-4xl lg:text-5xl font-bold">Six Modules. Complete System.</h2>
          </div>

          <div className="space-y-6">
            {modules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white border border-brand-deepblue/5 rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex items-center gap-4 lg:w-64 flex-shrink-0">
                    <span className="text-5xl font-bold text-brand-deepblue/8 font-display select-none">{mod.num}</span>
                    <div className="w-12 h-12 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center">
                      {mod.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-2">{mod.subtitle}</div>
                    <h3 className="text-2xl font-bold mb-3">{mod.title}</h3>
                    <p className="text-brand-muted leading-relaxed mb-6">{mod.desc}</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                      {mod.outcomes.map((outcome, j) => (
                        <div key={j} className="flex items-start gap-2.5 text-sm text-brand-muted">
                          <CheckCircle className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                          {outcome}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA block */}
        <div className="bg-brand-deepblue text-white rounded-[3rem] p-12 lg:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Want to See the Full Framework in Action?
              </h2>
              <p className="text-white/70 text-lg mb-10 leading-relaxed">
                The methodology goes deeper than any public-facing page can show.
                A discovery call walks you through a real engagement scenario —
                from initial diagnostic to client deliverable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {onNavigate && (
                  <>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="bg-brand-accent text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg"
                    >
                      Book a Discovery Call
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => onNavigate('certification')}
                      className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                    >
                      View Certification Paths
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full border border-brand-accent/30 flex items-center justify-center animate-pulse">
                    <div className="text-center">
                      <div className="text-brand-accent font-display text-5xl font-bold">ORI™</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-white/50 mt-2">Core Engine</div>
                    </div>
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
