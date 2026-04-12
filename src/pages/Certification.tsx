import { motion } from 'motion/react';
import { ArrowRight, Award, Star, Zap, Shield, Users, Clock, CheckCircle } from 'lucide-react';
import { Page } from '../types';

interface CertificationProps {
  onNavigate?: (page: Page) => void;
}

const levels = [
  {
    level: 'Level I',
    title: 'Applied Consultant',
    tagline: 'The foundation. The license. The first engagement.',
    desc: 'Equips practitioners with the core diagnostic framework — structured to close your first Toolkit engagement before you finish reviewing your notes from the final module.',
    outcomes: [
      'Conduct structural resilience assessments for SME clients',
      'Deliver a branded, executive-grade resilience report',
      'Position every proposal around a proprietary system — not a service',
    ],
    color: 'bg-brand-deepblue',
    featured: false,
  },
  {
    level: 'Level II',
    title: 'Strategist Consultant',
    tagline: 'Complex engagements. Institutional markets. Higher fees.',
    desc: 'Unlocks predictive modeling and fiscal impact documentation — the capabilities that open government agencies, nonprofits, and workforce development organizations as clients.',
    outcomes: [
      'Lead board-level resilience strategy with a predictive failure model',
      'Produce auditable fiscal ROI documentation for institutional buyers',
      'Design 90-day organizational transformation programs',
    ],
    color: 'bg-brand-accent',
    featured: true,
  },
  {
    level: 'Level III',
    title: 'Accredited Instructor',
    tagline: 'Train others. License cohorts. Multiply your reach.',
    desc: 'The highest authorization in the Academy ecosystem — granting the right to train and certify other practitioners, and to design and deliver corporate certification cohorts.',
    outcomes: [
      'Train and certify new Level I and II practitioners',
      'Design and deliver corporate certification cohorts',
      'Operate institutional licensing programs at scale',
    ],
    color: 'bg-brand-blue',
    featured: false,
  },
];

const faqs = [
  {
    q: 'Is this right for me if I\'m already certified by SHRM or HRCI?',
    a: 'Yes — and in fact, most of our practitioners hold existing HR certifications. This is not a replacement. It\'s a licensed methodology that gives you a proprietary system to deploy on top of your existing credentials. Where SHRM and HRCI test knowledge, this grants a practice license.',
  },
  {
    q: 'Do I need to be an independent consultant to enroll?',
    a: 'No. In-house HR directors, HR managers transitioning to consulting, and business owners managing their own HR strategy can all benefit. The methodology applies in both consulting and internal organizational contexts.',
  },
  {
    q: 'What is the time commitment per level?',
    a: 'Level I: 15–20 hours self-paced plus two live group sessions. Level II: an additional 10–15 hours, including a practicum on predictive modeling. Level III: the full Level I and II curriculum plus a 4–6 week instructor practicum project.',
  },
  {
    q: 'How is the SME Resilience Academy™ different from any other HR certification?',
    a: 'It\'s a practitioner license, not a knowledge certificate. You leave with the right to use 10 proprietary quantitative indices, licensed delivery templates, and a fiscal impact model in paying client work. No other certification in the United States offers this.',
  },
  {
    q: 'Can I use the methodology with my current clients immediately?',
    a: 'Deploying the indices and methodology in client work requires a valid, active certification license. This is both a legal and quality assurance requirement — every certified practitioner represents the Academy\'s standard.',
  },
  {
    q: 'How long does my certification remain valid?',
    a: 'Three years. Renewal includes a mandatory methodology update module to ensure every practitioner remains current with the latest index calibrations and framework evolutions.',
  },
];

export default function Certification({ onNavigate }: CertificationProps) {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">The Pathway</div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Three Levels.<br />One Ecosystem.
          </h1>
          <p className="text-xl text-brand-muted leading-relaxed">
            Each level builds on the last, expanding your authorization scope and
            unlocking a higher fee ceiling. The pathway is linear. The growth is exponential.
            No level can be skipped.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-10 text-xs font-bold uppercase tracking-widest text-brand-muted">
            {[
              { icon: <Shield className="w-3.5 h-3.5" />, label: 'HRCI-Eligible Credits' },
              { icon: <Award className="w-3.5 h-3.5" />, label: '10 Proprietary Indices' },
              { icon: <Users className="w-3.5 h-3.5" />, label: 'Practitioner Community' },
              { icon: <Zap className="w-3.5 h-3.5" />, label: 'U.S. Market Exclusive' },
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5 bg-brand-offwhite px-4 py-2 rounded-full border border-brand-deepblue/10">
                <span className="text-brand-accent">{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>
        </div>

        {/* Level cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
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
                <h3 className="text-2xl font-bold mb-3">{lvl.title}</h3>
                <p className="text-sm italic opacity-75">{lvl.tagline}</p>
              </div>

              <div className="bg-white p-10 flex-grow flex flex-col">
                <p className="text-brand-muted leading-relaxed mb-8">{lvl.desc}</p>
                <ul className="space-y-4 flex-grow mb-10">
                  {lvl.outcomes.map((outcome, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-brand-muted">
                      <CheckCircle className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      {outcome}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate?.('contact')}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all
                    ${lvl.featured
                      ? 'bg-brand-accent text-white hover:scale-105 shadow-lg shadow-brand-accent/30'
                      : 'bg-brand-deepblue text-white hover:bg-brand-blue'
                    }`}
                >
                  Learn About {lvl.level}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Included in every level */}
        <div className="bg-brand-deepblue text-white rounded-3xl p-10 lg:p-16 mb-24">
          <h2 className="text-3xl font-bold mb-10 text-center">Included in Every Certification Level</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Award className="w-5 h-5" />, text: 'Complete SME Resilience Toolkit™ methodology training — self-paced modules plus live group sessions' },
              { icon: <CheckCircle className="w-5 h-5" />, text: 'Full access to applicable proprietary indices with calculation templates (Excel/Google Sheets)' },
              { icon: <Star className="w-5 h-5" />, text: 'Official SME Resilience Academy™ digital certification badge — LinkedIn-compatible and shareable' },
              { icon: <Zap className="w-5 h-5" />, text: 'HRCI-eligible recertification credit hours — self-submission available from day one' },
              { icon: <Shield className="w-5 h-5" />, text: 'Licensed right to deploy the SME Resilience Toolkit™ in paying client engagements' },
              { icon: <Users className="w-5 h-5" />, text: 'Marketing toolkit: branded proposal template, ORI™ client report template, LinkedIn graphics' },
              { icon: <Clock className="w-5 h-5" />, text: 'Practitioner community — peer support, case sharing, deal collaboration, and methodology Q&A' },
              { icon: <Award className="w-5 h-5" />, text: 'Quarterly methodology update briefings to stay current with index calibrations and framework updates' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-accent/20 text-brand-accent flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-sm text-white/75 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why certified */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">The Business Case</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Why Get Certified?</h2>
            <div className="space-y-8">
              {[
                {
                  icon: <Award className="w-6 h-6 text-brand-accent" />,
                  title: 'Market Differentiation',
                  desc: 'Stop competing on price. Compete on a proprietary, data-driven system that no competitor can replicate without infringing your licensed methodology.',
                },
                {
                  icon: <Star className="w-6 h-6 text-brand-accent" />,
                  title: 'Executive Language',
                  desc: 'Learn to present HR data in the language of CEOs and CFOs — connecting resilience indices directly to financial outcomes they\'re already accountable for.',
                },
                {
                  icon: <Zap className="w-6 h-6 text-brand-accent" />,
                  title: 'Scalable Delivery',
                  desc: 'Move from reinventing your approach for every new client to deploying a repeatable, licensed system — with templates, dashboards, and protocols already built.',
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
              <h3 className="text-2xl font-bold mb-6">The Conversation That Changes Everything</h3>
              <div className="space-y-4">
                {[
                  '"Your last three departures represent a documented financial impact your board has never seen quantified. Let\'s change that."',
                  '"Your organizational resilience score sits in the Vulnerable tier. Here is a 90-day plan to move it to Moderate Risk — with measurable milestones."',
                  '"The fiscal return on this intervention is documented and auditable. This is not a soft skills program — it\'s an investment with a calculable return."',
                ].map((quote, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <p className="text-white/85 italic text-sm leading-relaxed">{quote}</p>
                  </div>
                ))}
                <p className="text-brand-accent text-sm font-bold">
                  → Generic HR consultants cannot have this conversation. Certified practitioners can.
                </p>
              </div>
            </div>

            <div className="bg-brand-accent rounded-2xl p-8 text-white">
              <div className="text-sm font-bold uppercase tracking-widest opacity-80 mb-3">Enrollment</div>
              <h3 className="text-2xl font-bold mb-3">Cohorts Are Limited</h3>
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                Cohort size is intentionally limited to ensure every practitioner receives
                high-touch advisor support during and after their certification journey.
              </p>
              <button
                onClick={() => onNavigate?.('contact')}
                className="w-full bg-brand-deepblue text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                Request Enrollment Information
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">FAQ</div>
            <h2 className="text-4xl font-bold">Common Questions.</h2>
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

          <div className="text-center mt-12">
            <p className="text-brand-muted mb-4">Still have questions? We answer everything on the discovery call.</p>
            <button
              onClick={() => onNavigate?.('contact')}
              className="bg-brand-deepblue text-white px-10 py-4 rounded-full font-bold hover:bg-brand-blue transition-all inline-flex items-center gap-2"
            >
              Book a Discovery Call <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
