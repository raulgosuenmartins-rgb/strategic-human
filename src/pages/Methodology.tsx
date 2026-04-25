import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface MethodologyProps {
  onNavigate: (page: Page) => void;
}

const dimensions = [
  {
    number: 'I',
    title: 'Financial Stability',
    desc: 'Captures the company\'s capacity to absorb financial shocks of short and medium term without compromising operational continuity. This is not a measure of profitability or growth — it is a measure of resilience.',
  },
  {
    number: 'II',
    title: 'Operational Continuity',
    desc: 'Captures the company\'s capacity to maintain regular operation in the face of localized failures — absence of key people, supply chain disruptions, technological failures, extraordinary events.',
  },
  {
    number: 'III',
    title: 'Workforce Stability',
    desc: 'The distinctive element of the framework. While many business management methodologies treat workforce as a resource to be optimized through cost reduction, the framework treats it as a strategic operational asset whose stability is a precondition for the health of the other two dimensions.',
    featured: true,
  },
];

const foundations = [
  {
    title: 'OECD Handbook on Composite Indicators',
    desc: 'The methodological standard for constructing composite indices across multiple dimensions, providing a rigorous basis for weighting, normalization, and aggregation.',
  },
  {
    title: 'Altman Z-Score and Subsequent Developments in Financial Distress Prediction',
    desc: 'A body of quantitative literature on predicting organizational financial fragility, adapted to the operational and financial profile of frontline SMBs.',
  },
  {
    title: 'Organizational Resilience Literature',
    desc: 'Academic work on how organizations maintain function under stress and disruption — particularly Weick, Sutcliffe, and Vogus on high-reliability organizations.',
  },
  {
    title: 'Supported Employment / Individual Placement and Support',
    desc: 'Evidence-based literature (Becker, Drake) on structured workforce integration for populations with functional barriers — foundational to the framework\'s workforce dimension.',
  },
];

export default function Methodology({ onNavigate }: MethodologyProps) {
  return (
    <div className="overflow-hidden">

      {/* ── HERO ── */}
      <section className="hero-gradient pt-20 pb-20 lg:pt-28 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-5">Methodology</p>
            <h1 className="font-display text-4xl lg:text-6xl font-semibold text-brand-navy leading-[1.15] mb-5">
              The SME Resilience Toolkit™
            </h1>
            <p className="text-lg text-brand-muted leading-relaxed max-w-2xl">
              A proprietary framework under development, built on established academic methodologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── THREE DIMENSIONS ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-3">Three Dimensions</p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-brand-navy max-w-xl leading-tight">
              A composite view of organizational resilience.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {dimensions.map((dim, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`rounded border p-8 ${dim.featured ? 'bg-brand-navy border-brand-navy text-white' : 'bg-brand-offwhite border-brand-border'}`}
              >
                <div className={`font-display text-5xl font-semibold mb-5 ${dim.featured ? 'text-white/20' : 'text-brand-navy/10'}`}>
                  {dim.number}
                </div>
                <h3 className={`font-display text-xl font-semibold mb-4 ${dim.featured ? 'text-white' : 'text-brand-navy'}`}>
                  {dim.title}
                </h3>
                <p className={`text-sm leading-relaxed ${dim.featured ? 'text-white/75' : 'text-brand-muted'}`}>
                  {dim.desc}
                </p>
                {dim.featured && (
                  <div className="mt-5 pt-5 border-t border-white/10">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                      The distinctive element of the framework
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THEORETICAL FOUNDATIONS ── */}
      <section className="py-16 lg:py-24 bg-brand-offwhite border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-3">Theoretical Foundations</p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-brand-navy max-w-xl leading-tight">
              Four bodies of established academic literature.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {foundations.map((found, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white border border-brand-border rounded p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="text-brand-teal font-semibold text-sm mt-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="font-semibold text-brand-navy text-sm mb-2 leading-snug">{found.title}</h4>
                    <p className="text-sm text-brand-muted leading-relaxed">{found.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HONEST DISCLAIMER ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-4">Scope and Limitations</p>
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-brand-navy mb-8 leading-tight">
                An honest statement about what the framework is — and is not.
              </h2>

              <div className="border border-brand-border rounded p-8 lg:p-10 bg-brand-offwhite">
                <p className="text-brand-muted leading-relaxed mb-5">
                  The framework is presented as a proprietary framework under development, built on established
                  academic methodologies. It is not presented as a closed system validated or calibrated with
                  U.S. federal datasets, nor as a methodology already validated through peer-reviewed studies.
                </p>
                <p className="text-brand-muted leading-relaxed mb-5">
                  It is presented as a set of tools in iterative development, refined empirically with each
                  engagement and updated as the application base grows.
                </p>
                <p className="text-brand-navy font-medium leading-relaxed">
                  The author's commitment is to cumulative rigor — the methodology evolves through disciplined
                  and documented application, not through speculative claims about capabilities not yet
                  empirically established.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 lg:py-20 bg-brand-warm border-t border-brand-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-display text-2xl lg:text-3xl font-semibold text-brand-navy mb-4">
              Interested in how the methodology applies to your business?
            </h2>
            <p className="text-brand-muted mb-7 leading-relaxed">
              Operations begin in 2027. We are accepting expressions of interest from qualified SMBs now.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-brand-navy text-white px-7 py-3.5 rounded font-medium hover:bg-brand-navy-deep transition-colors group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
