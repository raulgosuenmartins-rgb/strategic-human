import { motion } from 'motion/react';
import { Check, ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import { Page } from '../types';

interface PricingProps {
  onNavigate: (page: Page) => void;
}

const plans = [
  {
    level: 'Level I',
    name: 'Applied Consultant',
    price: '$997',
    priceSuffix: '–$1,997',
    priceNote: 'Final price announced at cohort opening',
    payment: '2× installments available',
    tagline: 'Recovers its investment in your first engagement.',
    color: 'border-brand-deepblue/20',
    headerBg: 'bg-brand-deepblue',
    popular: false,
    features: [
      'Full methodology training — Modules 1–4',
      'ORI™ + 5 core indices (RSC, TRC, ICR, CVO, CSC)',
      'Excel/Google Sheets calculation templates',
      'Certification badge (LinkedIn-compatible)',
      'HRCI-eligible credits',
      'Practitioner community (Slack)',
      'Marketing & proposal templates',
      'ORI™ client report template',
      'Quarterly methodology update briefings',
      '7-day full refund guarantee',
    ],
    engagement: '$5,000–$12,000 typical engagement fee',
    cta: 'Enroll in Level I',
  },
  {
    level: 'Level II',
    name: 'Strategist Consultant',
    price: '$2,497',
    priceSuffix: '–$3,997',
    priceNote: 'Most popular — early-bird $500 off first 72h',
    payment: '3× installments available',
    tagline: '4 engagements/year can generate $200K+ from the Toolkit.',
    color: 'border-brand-accent',
    headerBg: 'bg-brand-accent',
    popular: true,
    features: [
      'All Level I content',
      'FCE™, NFG™, FCC™ fiscal models',
      'SRZ™ predictive failure probability modeling',
      'Board-level report templates',
      'Advanced intervention modules',
      'Institutional buyer toolkit (government/nonprofit)',
      'All Level I benefits included',
      '90-day organizational transformation program',
      'Priority community access',
      '7-day full refund guarantee',
    ],
    engagement: '$12,000–$35,000 typical engagement fee',
    cta: 'Enroll in Level II',
  },
  {
    level: 'Level III',
    name: 'Accredited Instructor',
    price: '$4,997',
    priceSuffix: '–$7,997',
    priceNote: 'Application-based — interview required',
    payment: 'Custom payment plan available',
    tagline: 'Train others. License cohorts. Build a $130K+ new revenue channel.',
    color: 'border-brand-blue',
    headerBg: 'bg-brand-blue',
    popular: false,
    features: [
      'All Level I & II content',
      'Instructor licensing rights',
      'Cohort delivery playbook',
      'Corporate sales toolkit',
      'Train and certify Level I & II practitioners',
      'Institutional licensing proposals ($25K–$200K)',
      'Revenue sharing on referred enrollments',
      'Priority methodology updates',
      'Corporate cohort facilitation',
      '7-day full refund guarantee',
    ],
    engagement: '$40,000–$150,000 corporate cohort fee',
    cta: 'Apply for Level III',
  },
];

export default function Pricing({ onNavigate }: PricingProps) {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Pricing & Enrollment</div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8">
            An Investment That Pays for Itself in One Engagement.
          </h1>
          <p className="text-xl text-brand-muted leading-relaxed">
            Level I enrollment recovers its cost in your first SME Toolkit engagement.
            Most practitioners complete their first engagement within 60 days of certification.
          </p>
        </div>

        {/* ROI reminder */}
        <div className="bg-brand-deepblue text-white rounded-2xl px-8 py-6 text-center mb-12">
          <p className="text-lg font-medium opacity-90">
            "Your Level I cert pays for itself at <span className="text-brand-accent font-bold">first engagement</span>.
            Level II practitioners close <span className="text-brand-accent font-bold">$88,000+</span> in annual incremental revenue.
            Level III instructors open a <span className="text-brand-accent font-bold">$130,000+ new revenue channel</span>."
          </p>
        </div>

        {/* Urgency bar */}
        <div className="bg-brand-accent text-white rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-white animate-ping" />
            <div>
              <span className="font-bold">Cohort Enrollment Open — Limited Seats</span>
              <span className="ml-2 opacity-80 text-sm">Early-bird: $500 off Level II & III in the first 72 hours</span>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 text-sm font-bold">
            <Clock className="w-4 h-4" />
            Reserve before seats fill
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className={`rounded-[2.5rem] overflow-hidden flex flex-col border-2 shadow-lg ${plan.color} ${plan.popular ? 'shadow-brand-accent/20' : ''}`}
            >
              {plan.popular && (
                <div className="bg-brand-accent text-white text-center text-xs font-bold uppercase tracking-widest py-2.5">
                  ★ Most Popular — Best ROI
                </div>
              )}

              <div className={`${plan.headerBg} p-10 text-white`}>
                <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">{plan.level}</div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm opacity-70 italic mb-6">{plan.tagline}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-xl opacity-70">{plan.priceSuffix}</span>
                </div>
                <div className="text-xs opacity-60 mb-1">{plan.priceNote}</div>
                <div className="text-xs opacity-60">{plan.payment}</div>
              </div>

              <div className="bg-white p-10 flex-grow flex flex-col">
                <div className="bg-brand-offwhite rounded-xl px-4 py-3 text-sm font-bold text-brand-deepblue mb-8 text-center">
                  {plan.engagement}
                </div>

                <ul className="space-y-3 mb-10 flex-grow">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-brand-muted">
                      <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all
                    ${plan.popular
                      ? 'bg-brand-accent text-white hover:scale-105 shadow-lg shadow-brand-accent/30'
                      : 'bg-brand-deepblue text-white hover:bg-brand-blue'
                    }`}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee + FAQ mini */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-brand-offwhite rounded-3xl p-10 border border-brand-deepblue/5">
            <Shield className="w-10 h-10 text-brand-accent mb-6" />
            <h3 className="text-2xl font-bold mb-4">7-Day Full Refund Guarantee</h3>
            <p className="text-brand-muted leading-relaxed mb-4">
              Complete Module 1. If you don't see the methodology's power — its rigor, its client applicability,
              its financial precision — request a full refund within 7 days. No questions.
            </p>
            <p className="text-sm font-bold text-brand-deepblue italic">
              "Level I enrollment pays for itself in a single SME engagement. Most practitioners
              complete their first Toolkit engagement within 60 days of certification."
            </p>
          </div>

          <div className="bg-brand-deepblue text-white rounded-3xl p-10">
            <Zap className="w-10 h-10 text-brand-accent mb-6" />
            <h3 className="text-2xl font-bold mb-6">Group & Enterprise Licensing</h3>
            <div className="space-y-4">
              {[
                'Level II & III institutional licensing for teams, consulting firms, and government agencies',
                'Custom corporate certification cohorts ($40,000–$150,000)',
                'Bulk enrollment discounts for 5+ practitioners',
                'Dedicated onboarding and methodology support',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                  <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="mt-8 w-full bg-brand-accent text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              Contact for Enterprise Pricing <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-brand-accent rounded-3xl p-12 lg:p-20 text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Stop Competing on Price?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Book a discovery call. We'll identify the right certification level for your goals
            and confirm your seat before the cohort fills.
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
              Compare Levels in Detail
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
