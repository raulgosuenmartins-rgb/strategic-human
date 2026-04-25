import { motion } from 'motion/react';
import { ArrowRight, ClipboardList, BarChart3, RefreshCw } from 'lucide-react';
import { Page } from '../types';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const services = [
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: 'Assessment Package',
    duration: '30 to 45 days',
    audience: 'For SMBs evaluating whether there is a significant opportunity for intervention.',
    desc: 'An initial diagnostic engagement structured in four phases: kickoff, structured data collection, analysis and integration, and delivery of an Executive Report (15–25 pages) with diagnosis structured by the three dimensions of the framework, prioritized recommendations, and a discussion of next steps.',
    phases: [
      { label: 'Kickoff', detail: 'Scoping and alignment with leadership team.' },
      { label: 'Data Collection', detail: 'Structured data gathering across financial, operational, and workforce dimensions.' },
      { label: 'Analysis and Integration', detail: 'Application of the SME Resilience Toolkit™ framework dimensions.' },
      { label: 'Executive Report', detail: '15–25 pages with diagnosis, prioritized recommendations, and next-step discussion.' },
    ],
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Transformation Package',
    duration: '90 to 120 days',
    audience: 'For SMBs following an Assessment Package ready to implement.',
    desc: 'A structured intervention engagement following an Assessment Package. Co-execution model where SHSG works alongside the client\'s leadership team to implement prioritized recommendations, with biweekly or monthly reviews and tracking of three to six agreed indicators per intervention front.',
    phases: [
      { label: 'Implementation Planning', detail: 'Prioritization of recommendations from the Assessment Package.' },
      { label: 'Co-Execution', detail: 'SHSG works alongside the client\'s leadership team throughout the engagement.' },
      { label: 'Biweekly / Monthly Reviews', detail: 'Structured progress reviews with leadership.' },
      { label: 'Indicator Tracking', detail: 'Three to six agreed indicators per intervention front, monitored throughout.' },
    ],
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: 'Advisory Retainer',
    duration: 'Ongoing monthly contract',
    audience: 'For clients post-intervention seeking continued oversight.',
    desc: 'Ongoing oversight and quarterly indicator reviews for clients post-intervention. Continuity of support without dependence on the SHSG team — designed to ensure that gains from the Transformation Package are sustained over time.',
    phases: [
      { label: 'Quarterly Reviews', detail: 'Structured reviews of previously agreed indicators.' },
      { label: 'Ongoing Advisory Access', detail: 'Periodic consultation on emerging workforce and operational issues.' },
      { label: 'Framework Updates', detail: 'Access to methodology refinements as the SME Resilience Toolkit™ evolves.' },
    ],
  },
];

export default function Services({ onNavigate }: ServicesProps) {
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
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-5">Services</p>
            <h1 className="font-display text-4xl lg:text-6xl font-semibold text-brand-navy leading-[1.15] mb-5">
              Three integrated service lines for American SMBs in frontline operations.
            </h1>
            <p className="text-lg text-brand-muted leading-relaxed max-w-2xl">
              Each service line is designed to address a different stage of the client relationship —
              from initial diagnostic through sustained governance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE LINES ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="border border-brand-border rounded overflow-hidden"
              >
                {/* Header */}
                <div className="bg-brand-offwhite px-8 py-6 border-b border-brand-border flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="w-11 h-11 rounded bg-brand-navy text-white flex items-center justify-center flex-shrink-0">
                    {svc.icon}
                  </div>
                  <div className="flex-grow">
                    <h2 className="font-display text-2xl font-semibold text-brand-navy">{svc.title}</h2>
                    <p className="text-xs font-medium uppercase tracking-wider text-brand-teal mt-0.5">{svc.duration}</p>
                  </div>
                  <p className="text-xs text-brand-muted italic max-w-xs">{svc.audience}</p>
                </div>

                {/* Body */}
                <div className="px-8 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-brand-muted leading-relaxed">{svc.desc}</p>
                    <p className="mt-5 text-xs text-brand-muted/60 italic">
                      Specific pricing is discussed directly — contact us to learn more.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-navy/50 mb-4">Structure</p>
                    <ul className="space-y-4">
                      {svc.phases.map((phase, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-brand-navy/8 text-brand-teal flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">
                            {j + 1}
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-brand-navy">{phase.label}</p>
                            <p className="text-xs text-brand-muted leading-relaxed">{phase.detail}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUTURE: SME RESILIENCE ACADEMY ── */}
      <section className="py-16 lg:py-20 bg-brand-offwhite border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-4">Coming 2027</p>
            <h3 className="font-display text-2xl font-semibold text-brand-navy mb-4">SME Resilience Academy</h3>
            <p className="text-brand-muted leading-relaxed text-sm">
              A consultant certification program designed to scale the SHSG methodology nationally through
              certified American consultants operating across SBDC networks, SCORE chapters, and VBOCs.
              Details will be announced as operations begin.
            </p>
          </motion.div>
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
              Ready to discuss which service line fits your situation?
            </h2>
            <p className="text-brand-muted mb-7 leading-relaxed">
              Operations begin in 2027. We are accepting expressions of interest from American SMBs now.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-brand-navy text-white px-7 py-3.5 rounded font-medium hover:bg-brand-navy-deep transition-colors group"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
