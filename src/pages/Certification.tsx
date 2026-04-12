import { motion } from 'motion/react';
import { Check, ArrowRight, Award, Star, Zap, Clock, Shield, Users } from 'lucide-react';
import { Page } from '../types';

interface CertificationProps {
  onNavigate?: (page: Page) => void;
}

const levels = [
  {
    level: 'Level I',
    title: 'Applied Consultant',
    tagline: 'Your first Toolkit engagement recovers the investment.',
    fee: '$5,000–$12,000',
    feeNote: 'Typical engagement fee',
    income: '$25,000–$60,000',
    incomeNote: 'Annual incremental (5 clients)',
    color: 'bg-brand-deepblue',
    textColor: 'text-white',
    modules: 'Modules 1–4',
    hours: '15–20 hours self-paced + 2 live group sessions',
    indices: ['ORI™ (5-tier classification)', 'RSC — Cash Resilience', 'TRC — Cost Rigidity', 'ICR — Revenue Concentration (HHI)', 'CVO — Organizational Volatility', 'CSC — Cost of Staff Replacement'],
    features: [
      'Conduct structural organizational diagnostics',
      'Calculate & classify ORI™ score (5 maturity tiers)',
      'Deploy 90-day stabilization interventions',
      'Deliver branded client resilience reports',
      'Access all 6 Level I proprietary indices',
      'Licensed to use SME Resilience Toolkit™ in client work',
      'HRCI-eligible recertification credits',
      'Practitioner community (Slack)',
      'Marketing & proposal templates',
      'Digital certification badge (LinkedIn-compatible)',
    ],
    popular: false,
  },
  {
    level: 'Level II',
    title: 'Strategist Consultant',
    tagline: '4 engagements/year can generate $200K+ from the Toolkit alone.',
    fee: '$12,000–$35,000',
    feeNote: 'Typical engagement fee',
    income: '$48,000–$140,000',
    incomeNote: 'Annual incremental (4 clients)',
    color: 'bg-brand-accent',
    textColor: 'text-white',
    modules: 'Modules 1–6',
    hours: '+10–15 hours + SRZ™ practicum',
    indices: ['All Level I indices', 'SRZ™ — Predictive Failure Model (12/24/36-month)', 'FCE™ — Fiscal Conversion Effect', 'NFG™ — Net Fiscal Gain ($20,910–$32,190/worker/yr)', 'FCC™ — Fiscal Conversion Coefficient'],
    features: [
      'All Level I capabilities',
      'Complex multi-vector organizational interventions',
      'Board-level executive resilience reporting',
      'SRZ™ predictive failure probability modeling',
      'Full FCE™, NFG™, FCC™ fiscal modeling',
      '90-day organizational transformation programs',
      'Institutional buyer engagements (government/nonprofit)',
      'Advanced intervention modules',
      'Board-level report templates',
      'Institutional buyer toolkit',
    ],
    popular: true,
  },
  {
    level: 'Level III',
    title: 'Accredited Instructor',
    tagline: 'Train others. License cohorts. Build a second revenue channel.',
    fee: '$40,000–$150,000',
    feeNote: 'Corporate cohort fee',
    income: '$25,000–$200,000',
    incomeNote: 'Per institutional licensing contract',
    color: 'bg-brand-blue',
    textColor: 'text-white',
    modules: 'All + Instructor Practicum',
    hours: '40-hour instructor practicum project',
    indices: ['All Level I & II indices', 'Authorized to train Level I & II practitioners', 'Audit quality of consultants under your license', 'Design corporate certification cohorts'],
    features: [
      'All Level I & II capabilities',
      'Authorized to train & certify new practitioners',
      'Design and deliver corporate certification cohorts',
      'Institutional licensing programs ($25K–$200K/contract)',
      'Highest tier FCE™/NFG™ advisory work',
      'Cohort delivery playbook',
      'Corporate sales toolkit',
      'Priority methodology updates',
      'Revenue sharing on referred enrollments',
      'Application-based — interview required',
    ],
    popular: false,
  },
];

const faqs = [
  {
    q: 'Is this certification recognized by HRCI or SHRM?',
    a: 'HRCI pre-approved provider application is in progress. Self-submission available now (up to 30 self-reported credits per cycle). SHRM recognition pending.',
  },
  {
    q: 'Do I need to be a practicing HR consultant to enroll?',
    a: 'No. In-house HR directors, HR managers transitioning to consulting, and business owners can all enroll. The methodology applies in both consulting and internal organizational contexts.',
  },
  {
    q: 'What is the time commitment per level?',
    a: 'Level I: 15–20 hours self-paced + 2 live group sessions. Level II: additional 10–15 hours + SRZ™ predictive modeling practicum. Level III: Level I+II content plus a 4–6 week instructor practicum project.',
  },
  {
    q: 'How is this different from SHRM-CP or PHR?',
    a: 'SHRM and HRCI test knowledge breadth. This is a proprietary operational methodology with 10 mathematical indices, a predictive failure model (SRZ™), a licensed delivery framework, and client-facing tools. Not a knowledge test — a practitioner license.',
  },
  {
    q: 'Can I use the Toolkit formulas before completing certification?',
    a: 'No. Deploying the indices and methodology in client work requires a valid certification license. Unlicensed use constitutes IP infringement under the methodology licensing agreement.',
  },
  {
    q: 'Does my certification expire?',
    a: 'Valid for 3 years. Renewal requires a 4-hour annual update module plus a renewal fee. Practitioners with expired certifications cannot use the licensed IP in client work.',
  },
  {
    q: 'What software is required?',
    a: 'None proprietary. ORI™ and all indices are delivered via Excel/Google Sheets templates. The SRZ™ predictive model and dashboard run in any BI tool (Tableau, Power BI, Google Data Studio).',
  },
  {
    q: 'What is the refund policy?',
    a: 'Full refund within 7 days if you complete Module 1 and do not see the methodology\'s power. Most practitioners find their first client application within 60 days of certification.',
  },
];

export default function Certification({ onNavigate }: CertificationProps) {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">The Pathway</div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8">Three Levels.<br/>One Ecosystem.</h1>
          <p className="text-xl text-brand-muted leading-relaxed">
            Each level unlocks deeper access to the SME Resilience Toolkit™ — and a higher fee ceiling.
            No level can be skipped. Every practitioner starts at Level I.
          </p>
          {/* Trust bar */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-xs font-bold uppercase tracking-widest text-brand-muted">
            <span className="flex items-center gap-1.5 bg-brand-offwhite px-4 py-2 rounded-full border border-brand-deepblue/10">
              <Shield className="w-3.5 h-3.5 text-brand-accent" /> HRCI-Eligible Credits
            </span>
            <span className="flex items-center gap-1.5 bg-brand-offwhite px-4 py-2 rounded-full border border-brand-deepblue/10">
              <Award className="w-3.5 h-3.5 text-brand-accent" /> 10 Proprietary Indices
            </span>
            <span className="flex items-center gap-1.5 bg-brand-offwhite px-4 py-2 rounded-full border border-brand-deepblue/10">
              <Users className="w-3.5 h-3.5 text-brand-accent" /> Practitioner Community
            </span>
            <span className="flex items-center gap-1.5 bg-brand-offwhite px-4 py-2 rounded-full border border-brand-deepblue/10">
              <Zap className="w-3.5 h-3.5 text-brand-accent" /> 7-Day Guarantee
            </span>
          </div>
        </div>

        {/* Urgency bar */}
        <div className="bg-brand-accent text-white rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-white animate-ping" />
            <span className="font-bold">Next Cohort Enrollment Open</span>
            <span className="opacity-80">— Limited seats to ensure high-touch advisor support.</span>
          </div>
          <button
            onClick={() => onNavigate?.('contact')}
            className="flex-shrink-0 bg-white text-brand-accent px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform"
          >
            Reserve My Seat
          </button>
        </div>

        {/* Level cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {levels.map((lvl, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className={`rounded-[2.5rem] overflow-hidden flex flex-col shadow-lg ${lvl.popular ? 'ring-4 ring-brand-accent shadow-brand-accent/20' : ''}`}
            >
              {lvl.popular && (
                <div className="bg-brand-accent text-white text-center text-xs font-bold uppercase tracking-widest py-2">
                  ★ Most Popular
                </div>
              )}
              <div className={`${lvl.color} p-10 ${lvl.textColor}`}>
                <div className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">{lvl.level}</div>
                <h3 className="text-2xl font-bold mb-2">{lvl.title}</h3>
                <p className="text-sm opacity-70 mb-6 italic">{lvl.tagline}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-lg font-bold">{lvl.fee}</div>
                    <div className="text-xs opacity-60 mt-1">{lvl.feeNote}</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-lg font-bold">{lvl.income}</div>
                    <div className="text-xs opacity-60 mt-1">{lvl.incomeNote}</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-muted mb-1">
                  <Clock className="w-3.5 h-3.5" /> {lvl.hours}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-6">{lvl.modules}</div>

                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-3">Authorized Indices</h4>
                <ul className="space-y-2 mb-8">
                  {lvl.indices.map((idx, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 flex-shrink-0" />
                      {idx}
                    </li>
                  ))}
                </ul>

                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-3">What You Can Do</h4>
                <ul className="space-y-2 mb-10 flex-grow">
                  {lvl.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span className="text-brand-muted">{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onNavigate?.('contact')}
                  className={`mt-auto w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all
                    ${lvl.popular
                      ? 'bg-brand-accent text-white hover:scale-105 shadow-lg shadow-brand-accent/30'
                      : 'bg-brand-deepblue text-white hover:bg-brand-blue'
                    }`}
                >
                  {i === 2 ? 'Apply for Level III' : `Enroll in ${lvl.level}`}
                  <ArrowRight className="w-4 h-4" />
                </button>
                {i === 2 && (
                  <p className="text-xs text-brand-muted text-center mt-3">Application-based — interview required</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Included in every level */}
        <div className="bg-brand-deepblue text-white rounded-3xl p-10 lg:p-16 mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Included in Every Certification Level</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Award className="w-5 h-5" />, text: 'Complete SME Resilience Toolkit™ methodology training (self-paced + 2 live Q&A sessions)' },
              { icon: <Check className="w-5 h-5" />, text: 'Full access to applicable proprietary indices with Excel/Google Sheets calculation templates' },
              { icon: <Star className="w-5 h-5" />, text: 'Official SME Resilience Academy™ digital certification badge (LinkedIn-compatible)' },
              { icon: <Zap className="w-5 h-5" />, text: 'HRCI-eligible recertification credit hours (self-submission available now)' },
              { icon: <Shield className="w-5 h-5" />, text: 'Licensed right to deploy the SME Resilience Toolkit™ in paying client engagements' },
              { icon: <Users className="w-5 h-5" />, text: 'Marketing toolkit: proposal template, ORI™ report template, LinkedIn announcement graphics' },
              { icon: <Clock className="w-5 h-5" />, text: 'Access to certified practitioner Slack community for peer support and deal collaboration' },
              { icon: <Award className="w-5 h-5" />, text: 'Quarterly methodology update briefings as the Toolkit evolves' },
              { icon: <Star className="w-5 h-5" />, text: '7-day full refund guarantee if you don\'t see the methodology\'s power after Module 1' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-accent/20 text-brand-accent flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-sm text-white/80 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why get certified */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">The Business Case</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Why Get Certified?</h2>
            <div className="space-y-8">
              {[
                {
                  icon: <Award className="w-6 h-6 text-brand-accent" />,
                  title: 'Market Differentiation',
                  desc: 'Stop competing on price. Compete on a proprietary, data-driven system that clients cannot find anywhere else in the United States.',
                },
                {
                  icon: <Star className="w-6 h-6 text-brand-accent" />,
                  title: 'Executive Language',
                  desc: 'Learn to speak the language of CEOs and CFOs, connecting HR metrics directly to business outcomes. "Your ORI™ score is 41. Here is your 90-day stabilization plan."',
                },
                {
                  icon: <Zap className="w-6 h-6 text-brand-accent" />,
                  title: 'Scalable Delivery',
                  desc: 'Use our templates, dashboards, and protocols to deliver high-value results in less time. Transition from $120/hr to $18,000 fixed-fee engagements.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-brand-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-brand-deepblue rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">The Conversation You'll Have</h3>
              <div className="space-y-4">
                {[
                  '"Your last three departures cost you $330,000 in recruitment, lost productivity, and ramp time."',
                  '"Your current ORI™ score is 41 — Vulnerable. Here is your 90-day stabilization plan."',
                  '"Every month we delay intervention, you are burning $27,500 in preventable turnover cost."',
                ].map((quote, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <p className="text-white/90 italic text-sm leading-relaxed">{quote}</p>
                  </div>
                ))}
                <p className="text-brand-accent text-sm font-bold">→ Generic HR consultants cannot have this conversation. Certified practitioners can.</p>
              </div>
            </div>

            <div className="bg-brand-accent rounded-2xl p-8 text-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest opacity-80 mb-1">Enrollment Status</div>
                  <div className="text-2xl font-bold">Next Cohort Open</div>
                </div>
                <span className="text-xs font-bold bg-white text-brand-accent px-3 py-1 rounded-full">Limited Seats</span>
              </div>
              <p className="text-white/80 text-sm mb-6">Early-bird pricing available for first 72 hours of each cohort window. $500 discount on Level II and III.</p>
              <button
                onClick={() => onNavigate?.('contact')}
                className="w-full bg-brand-deepblue text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                Book Discovery Call <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">FAQ</div>
            <h2 className="text-4xl font-bold">Objections Answered.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white border border-brand-deepblue/5 rounded-2xl p-8 shadow-sm"
              >
                <h4 className="text-lg font-bold mb-3">{faq.q}</h4>
                <p className="text-brand-muted leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
