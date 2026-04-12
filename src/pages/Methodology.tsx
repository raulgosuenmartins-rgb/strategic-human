import { motion } from 'motion/react';
import { BookOpen, Database, Users, LineChart, DollarSign, Award, CheckCircle, ArrowRight } from 'lucide-react';
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
    deliverable: 'Three-vector resilience model validated by Applied Mathematics, Organizational Psychology, and Process Engineering',
    details: [
      'Structural formula: Resilience = f(Financial Stability + Operational Predictability + Human Sustainability)',
      'Interdisciplinary framework that boards and investors respect — not a checklist, a formula',
      'Theoretical backbone for every engagement deliverable',
      'Foundation for ORI™ Bayesian dynamic weighting model',
    ],
  },
  {
    num: '02',
    icon: <Database className="w-6 h-6" />,
    title: 'Analytical Governance & Mathematical Modeling',
    subtitle: '10 Proprietary Indices',
    deliverable: 'Every recommendation is mathematically traceable via 10 proprietary quantitative indices',
    details: [
      'ORI™ — Composite score 0–100 with Bayesian dynamic sector weights (5-tier risk classification)',
      'RSC, TRC, ICR, CVO, CSC — Core diagnostic indices (Level I)',
      'SRZ™ — Predictive failure model (12/24/36-month probability, AUC-ROC >0.75)',
      'FCE™, NFG™, FCC™ — Fiscal impact triad for institutional buyers (Level II+)',
    ],
  },
  {
    num: '03',
    icon: <Users className="w-6 h-6" />,
    title: 'Human Capital & Productive Inclusion',
    subtitle: 'Workforce as Strategic Asset',
    deliverable: 'Converts underutilized workforce segments into measurable high-stability assets',
    details: [
      '6-step Inclusive Recruitment Protocol — validated pipeline for vulnerable population integration',
      'Retention-as-Organizational-Engineering framework — structural, not motivational',
      'Cognitive Load Management system — performance and wellbeing as metrics, not sentiment',
      'DEI converted from compliance cost to competitive advantage with documented fiscal ROI',
    ],
  },
  {
    num: '04',
    icon: <LineChart className="w-6 h-6" />,
    title: 'Monitoring & Organizational Intelligence',
    subtitle: 'Intervention Before Rupture',
    deliverable: 'Multidimensional Resilience Dashboard integrating financial, operational, and human indicators',
    details: [
      'Real-time early burnout and climate volatility detection instruments',
      'EWMA trend detection for structural change alerts in CVO index',
      'Dashboard architecture compatible with Tableau, Power BI, Google Data Studio',
      'Quarterly ORI™ tracking converts diagnosis into ongoing advisory retainer',
    ],
  },
  {
    num: '05',
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Fiscal Impact Model (FCE™ / NFG™)',
    subtitle: 'Institutional-Grade ROI Documentation',
    deliverable: '$20,910–$32,190 in documented public fiscal savings per reinserted worker per year',
    details: [
      'FCE™ decomposes into 4 independently auditable channels: ΔTax Revenue, ΔUI Savings, ΔProductivity, Multiplier Effect',
      'NFG™ recalibrated with 6 federal agency datasets (USDA, ACF/HHS, CMS, DOL, HUD, IRS)',
      'Monte Carlo validated: P(NFG > 0) > 95% across 10,000 iterations',
      'FCC™ calibrated by sector and region — defensible for federal procurement and grant reporting',
    ],
  },
  {
    num: '06',
    icon: <Award className="w-6 h-6" />,
    title: 'Certification & Licensing Structure',
    subtitle: 'A License, Not a Certificate',
    deliverable: 'Three practitioner levels with defined authorization scopes and revenue impact',
    details: [
      'Official Six-Step Application Protocol — standardized onboarding for every certified practitioner',
      'Code of Methodological Integrity — ethical and technical compliance framework',
      'Non-exclusive, non-transferable methodology license for client engagements',
      'Level III: authorized to train and license other practitioners — independent revenue channel',
    ],
  },
];

export default function Methodology({ onNavigate }: MethodologyProps) {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">The Framework</div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8">SME Resilience Toolkit™</h1>
          <p className="text-xl text-brand-muted leading-relaxed mb-6">
            A proprietary, science-backed methodology for diagnosing, quantifying, and strengthening
            organizational resilience in small and medium-sized businesses. Built on a single core formula:
          </p>
          <div className="bg-brand-deepblue text-white rounded-2xl px-8 py-6 inline-block">
            <span className="font-mono text-brand-accent font-bold text-lg">
              Resilience = f(Financial Stability + Operational Predictability + Human Sustainability)
            </span>
          </div>
        </div>

        {/* Comparison vs SHRM/HRCI */}
        <div className="bg-brand-offwhite rounded-3xl p-8 lg:p-12 mb-20 border border-brand-deepblue/5">
          <h2 className="text-2xl font-bold mb-8 text-center">This is a License. Not Another Certificate.</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-deepblue/10">
                  <th className="text-left py-4 px-4 font-bold text-brand-muted uppercase tracking-wider text-xs">Criteria</th>
                  <th className="text-center py-4 px-4 font-bold text-brand-muted uppercase tracking-wider text-xs">SHRM-CP / SPHR</th>
                  <th className="text-center py-4 px-4 font-bold text-brand-accent uppercase tracking-wider text-xs">SME Resilience Academy™</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Nature', 'Knowledge test', 'Practitioner license with proprietary methodology'],
                  ['Deliverable', 'Competency proof', 'Rights to use 10 proprietary indices + templates'],
                  ['Differentiation', 'Same as thousands of others', 'Exclusive — unavailable anywhere else in the U.S.'],
                  ['Client tool', 'None', 'ORI™ score, resilience report, NFG™ fiscal model'],
                  ['Billing model', '$85–$150/hour', 'Per project $5K–$150K+'],
                  ['Market focus', 'All sectors & sizes', 'U.S. SMEs (33M companies — massively underserved)'],
                  ['Proprietary IP', 'No', 'Yes — 10 indices, 6 modules, licensed templates'],
                ].map(([crit, shrm, academy], i) => (
                  <tr key={i} className="border-b border-brand-deepblue/5 last:border-0">
                    <td className="py-4 px-4 font-semibold">{crit}</td>
                    <td className="py-4 px-4 text-center text-brand-muted">{shrm}</td>
                    <td className="py-4 px-4 text-center font-bold text-brand-deepblue">{academy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 6 Modules */}
        <div className="mb-20">
          <div className="text-center mb-12">
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
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-brand-deepblue/5 rounded-2xl p-8 lg:p-10 shadow-sm"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0 flex items-center gap-4 lg:w-72">
                    <span className="text-5xl font-bold text-brand-deepblue/10 font-display">{mod.num}</span>
                    <div className="w-12 h-12 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center">
                      {mod.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-2">{mod.subtitle}</div>
                    <h3 className="text-2xl font-bold mb-3">{mod.title}</h3>
                    <p className="text-brand-muted leading-relaxed mb-6 font-medium italic">→ {mod.deliverable}</p>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                      {mod.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-brand-muted">
                          <CheckCircle className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scientific rigor CTA block */}
        <div className="bg-brand-deepblue text-white rounded-[3rem] p-12 lg:p-20 overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">Scientific Rigor meets Commercial Reality.</h2>
              <p className="text-brand-muted text-lg mb-8 leading-relaxed">
                The SME Resilience Toolkit™ isn't a collection of best practices — it is a mathematical system
                calibrated against BLS failure data, validated with Monte Carlo simulation, and designed to produce
                CFO-grade deliverables in every engagement.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <div className="text-3xl font-bold text-brand-accent mb-1">10</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-white/60">Proprietary Indices</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-accent mb-1">6</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-white/60">Curriculum Modules</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-accent mb-1">3</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-white/60">Practitioner Levels</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-accent mb-1">33M+</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-white/60">SMBs Addressable</div>
                </div>
              </div>
              {onNavigate && (
                <button
                  onClick={() => onNavigate('certification')}
                  className="bg-brand-accent text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2"
                >
                  Start Certification <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
            <div className="relative flex items-center justify-center">
              <div className="aspect-square w-80 rounded-full border border-white/10 flex items-center justify-center">
                <div className="aspect-square w-3/4 rounded-full border border-brand-accent/30 flex items-center justify-center animate-pulse">
                  <div className="text-center">
                    <div className="text-brand-accent font-display text-6xl font-bold">ORI™</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-white/60 mt-2">Core Engine</div>
                    <div className="text-brand-accent/60 text-xs mt-1">Bayesian · Predictive · Auditable</div>
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
