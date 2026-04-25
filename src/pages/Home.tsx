import { motion } from 'motion/react';
import { ArrowRight, ClipboardList, BarChart3, RefreshCw } from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const dataPoints = [
  {
    stat: '99.9%',
    label: 'of U.S. businesses are SMBs',
    detail: 'Yet 50% close within five years — BLS Business Employment Dynamics.',
  },
  {
    stat: '$45,236',
    label: 'per employee replacement cost',
    detail: 'Frontline turnover reaches 26.7% in retail. Express/Harris Poll, 2026.',
  },
  {
    stat: '42%',
    label: 'of voluntary turnover is preventable',
    detail: 'With structured managerial intervention. Gallup, 2024.',
  },
];

const services = [
  {
    icon: <ClipboardList className="w-5 h-5" />,
    title: 'Assessment Package',
    duration: '30 to 45 days',
    desc: 'Initial diagnostic engagement structured in four phases, delivering an Executive Report with diagnosis across three dimensions and prioritized recommendations.',
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Transformation Package',
    duration: '90 to 120 days',
    desc: 'Structured intervention co-executed alongside the client\'s leadership team, following an Assessment Package, with biweekly reviews and agreed indicators.',
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: 'Advisory Retainer',
    duration: 'Ongoing monthly',
    desc: 'Continuous oversight and quarterly indicator reviews for clients post-intervention. Sustained support without dependence on the SHSG team.',
  },
];

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="overflow-hidden">

      {/* ── HERO ── */}
      <section className="hero-gradient pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-6">
                St. Petersburg, Florida — Operations begin 2027
              </p>

              <h1 className="font-display text-5xl lg:text-7xl font-semibold leading-[1.1] text-brand-navy mb-8">
                Workforce stability and operational governance for American small and medium businesses.
              </h1>

              <p className="text-lg lg:text-xl text-brand-muted leading-relaxed mb-10 max-w-3xl">
                Built specifically for SMBs operating in retail, foodservice, hospitality, contact centers,
                and consumer logistics — sectors where workforce turnover ranges from 18% to 30% and
                replacement costs reach $45,236 per employee.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white px-7 py-3.5 rounded font-medium hover:bg-brand-navy-deep transition-colors group"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('methodology')}
                  className="inline-flex items-center justify-center gap-2 border border-brand-navy/20 text-brand-navy px-7 py-3.5 rounded font-medium hover:border-brand-navy/40 hover:bg-white transition-colors"
                >
                  Our Methodology
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── THE CHALLENGE WE ADDRESS ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-3">The Challenge We Address</p>
            <h2 className="font-display text-3xl lg:text-5xl font-semibold text-brand-navy max-w-2xl leading-tight">
              The data on American frontline SMBs is clear — and largely ignored.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border">
            {dataPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-10 lg:p-12"
              >
                <div className="font-display text-5xl lg:text-6xl font-semibold text-brand-navy mb-3">
                  {point.stat}
                </div>
                <div className="text-sm font-semibold text-brand-navy mb-3 uppercase tracking-wider">
                  {point.label}
                </div>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {point.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-20 lg:py-28 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-3">What We Do</p>
            <h2 className="font-display text-3xl lg:text-5xl font-semibold text-brand-navy max-w-xl leading-tight">
              Three integrated service lines.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white border border-brand-border rounded p-8 flex flex-col"
              >
                <div className="w-10 h-10 rounded bg-brand-navy/5 text-brand-teal flex items-center justify-center mb-5 flex-shrink-0">
                  {svc.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-brand-navy mb-1">{svc.title}</h3>
                <p className="text-xs font-medium uppercase tracking-wider text-brand-teal mb-4">{svc.duration}</p>
                <p className="text-sm text-brand-muted leading-relaxed flex-grow">{svc.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-brand-navy font-medium text-sm hover:text-brand-teal transition-colors group"
            >
              View full service descriptions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY TEASER ── */}
      <section className="py-20 lg:py-28 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Methodology</p>
              <h2 className="font-display text-3xl lg:text-5xl font-semibold leading-tight mb-6">
                The SME Resilience Toolkit™
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                A proprietary framework under development, built on established academic methodologies —
                including the OECD Handbook on Composite Indicators, Altman Z-Score developments in
                financial distress prediction, and organizational resilience research.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                The framework addresses three dimensions: financial stability, operational continuity,
                and workforce stability — treating the workforce as a strategic operational asset, not
                a cost variable.
              </p>
              <button
                onClick={() => onNavigate('methodology')}
                className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded font-medium text-sm hover:bg-white/5 transition-colors group"
              >
                Explore the methodology
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-1 gap-4"
            >
              {[
                { dim: 'Dimension I', title: 'Financial Stability', desc: 'Capacity to absorb financial shocks in the short and medium term without compromising operational continuity.' },
                { dim: 'Dimension II', title: 'Operational Continuity', desc: 'Capacity to maintain regular operation in the face of localized failures — key personnel absence, supply disruptions, extraordinary events.' },
                { dim: 'Dimension III', title: 'Workforce Stability', desc: 'The distinctive element: workforce treated as strategic operational asset whose stability is a precondition for the other two dimensions.' },
              ].map((d, i) => (
                <div key={i} className="border border-white/10 rounded p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-1">{d.dim}</p>
                  <h4 className="font-display text-lg font-semibold text-white mb-2">{d.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-3">Who We Serve</p>
            <h2 className="font-display text-3xl lg:text-5xl font-semibold text-brand-navy mb-4">
              American SMBs in frontline operations.
            </h2>
            <p className="text-brand-muted max-w-2xl mx-auto leading-relaxed">
              25 to 300 employees. $2M to $30M annual revenue. Operating in the sectors that drive
              89% of net new American jobs — and where workforce governance is most consequential.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Retail', 'Foodservice', 'Hospitality', 'Contact Centers', 'Consumer Logistics'].map((sector, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                className="bg-brand-offwhite border border-brand-border rounded p-5 text-center"
              >
                <p className="text-sm font-medium text-brand-navy">{sector}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 bg-brand-warm border-t border-brand-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl lg:text-5xl font-semibold text-brand-navy mb-6 leading-tight">
              Operations begin in 2027. Expressions of interest are open now.
            </h2>
            <p className="text-brand-muted leading-relaxed mb-8 max-w-xl mx-auto">
              We are currently accepting expressions of interest from American SMBs in retail,
              foodservice, hospitality, contact centers, and consumer logistics.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-brand-navy text-white px-8 py-4 rounded font-medium hover:bg-brand-navy-deep transition-colors group"
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
