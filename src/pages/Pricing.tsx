import { motion } from 'motion/react';
import { ArrowRight, Shield, Award, Users, Zap } from 'lucide-react';
import { Page } from '../types';

interface InvestmentProps {
  onNavigate: (page: Page) => void;
}

const levels = [
  {
    level: 'Level I',
    title: 'Applied Consultant',
    tagline: 'Your first engagement covers the investment.',
    desc: 'Designed for HR professionals ready to move beyond hourly billing. Level I gives you the foundation, the diagnostic tools, and the licensed right to deploy the SME Resilience Toolkit™ with your first clients.',
    points: [
      'Full methodology training — Modules 1 through 4',
      'Licensed access to the core diagnostic indices',
      'Branded client report and proposal templates',
      'Certification badge, HRCI-eligible credits, community access',
    ],
    color: 'bg-brand-deepblue',
  },
  {
    level: 'Level II',
    title: 'Strategist Consultant',
    tagline: 'Opens institutional markets no generalist can access.',
    desc: 'Level II practitioners access the full fiscal impact modeling suite — the capability that opens government agencies, workforce development organizations, and enterprise clients as a market segment.',
    points: [
      'All Level I capabilities plus Modules 5 and 6',
      'Predictive failure modeling and board-level reporting',
      'Fiscal ROI documentation suite for institutional clients',
      '90-day organizational transformation program framework',
    ],
    color: 'bg-brand-accent',
    featured: true,
  },
  {
    level: 'Level III',
    title: 'Accredited Instructor',
    tagline: 'Build a second revenue channel from your expertise.',
    desc: 'Application-based and interview-required. Level III authorization grants the right to train and certify other practitioners — and to design and operate corporate certification cohorts independently.',
    points: [
      'All Level I and II capabilities',
      'Instructor licensing and cohort delivery rights',
      'Institutional licensing program authorization',
      'Priority updates and revenue participation on referrals',
    ],
    color: 'bg-brand-blue',
  },
];

export default function Investment({ onNavigate }: InvestmentProps) {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Investment</div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Built for Professionals Ready to Command Premium Fees.
          </h1>
          <p className="text-xl text-brand-muted leading-relaxed">
            The certification is an investment in a licensed practice — not a course completion.
            Investment details are shared during your discovery call, where we identify
            the right level for your goals and current practice.
          </p>
        </div>

        {/* Value context */}
        <div className="bg-brand-deepblue text-white rounded-3xl p-10 lg:p-14 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Shield className="w-8 h-8" />, label: 'Level I', desc: 'Investment recovered in your first Toolkit engagement — most practitioners close one within 60 days of certification.' },
              { icon: <Award className="w-8 h-8" />, label: 'Level II', desc: 'Opens institutional markets and board-level engagements where the methodology\'s fiscal documentation creates a unique competitive position.' },
              { icon: <Users className="w-8 h-8" />, label: 'Level III', desc: 'Creates a second, independent revenue channel — corporate cohorts and institutional licensing programs operated under your own authority.' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/20 text-brand-accent flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-3">{item.label}</div>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Level cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {levels.map((lvl, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`rounded-[2.5rem] overflow-hidden flex flex-col shadow-lg transition-all duration-300 ${
                lvl.featured ? 'ring-4 ring-brand-accent shadow-brand-accent/20' : ''
              }`}
            >
              {lvl.featured && (
                <div className="bg-brand-accent text-white text-center text-xs font-bold uppercase tracking-widest py-2.5">
                  ★ Most Sought After
                </div>
              )}
              <div className={`${lvl.color} p-10 text-white`}>
                <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">{lvl.level}</div>
                <h3 className="text-2xl font-bold mb-2">{lvl.title}</h3>
                <p className="text-sm italic opacity-75">{lvl.tagline}</p>
              </div>

              <div className="bg-white p-10 flex-grow flex flex-col">
                <p className="text-brand-muted leading-relaxed mb-8 text-sm">{lvl.desc}</p>
                <ul className="space-y-3 flex-grow mb-10">
                  {lvl.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-brand-muted">
                      <Zap className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all
                    ${lvl.featured
                      ? 'bg-brand-accent text-white hover:scale-105 shadow-lg shadow-brand-accent/30'
                      : 'bg-brand-deepblue text-white hover:bg-brand-blue'
                    }`}
                >
                  Request Investment Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Group / enterprise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div className="bg-brand-offwhite border border-brand-deepblue/5 rounded-3xl p-10">
            <Shield className="w-10 h-10 text-brand-accent mb-6" />
            <h3 className="text-2xl font-bold mb-4">Investment Guarantee</h3>
            <p className="text-brand-muted leading-relaxed mb-4">
              Complete Module 1. If you don't see the methodology's power — its rigor,
              its client applicability, its financial precision — we'll discuss your options.
              We are confident you will see it.
            </p>
            <p className="text-sm font-semibold text-brand-deepblue italic">
              "Most practitioners close their first Toolkit engagement within 60 days
              of receiving their certification."
            </p>
          </div>

          <div className="bg-brand-deepblue text-white rounded-3xl p-10">
            <Users className="w-10 h-10 text-brand-accent mb-6" />
            <h3 className="text-2xl font-bold mb-4">Group & Enterprise Enrollment</h3>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              We offer group enrollment options for consulting firms, HR departments,
              and government agencies seeking to certify multiple practitioners.
              Custom cohorts and institutional licensing programs are available at Level II and III.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full bg-brand-accent text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              Inquire About Group Pricing
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-brand-accent rounded-3xl p-12 lg:p-20 text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to See the Full Picture?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Book a discovery call. We'll walk you through the right certification level,
            what's included, and what the investment looks like — no pressure, no pitch.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-brand-deepblue text-white px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              Book Discovery Call
            </button>
            <button
              onClick={() => onNavigate('certification')}
              className="bg-white text-brand-accent px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              Compare Certification Levels
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
