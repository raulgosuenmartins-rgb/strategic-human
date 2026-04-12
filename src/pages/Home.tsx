import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Page } from '../types';
import {
  ArrowRight, BookOpen, Database, Users, LineChart,
  DollarSign, Award, ChevronDown
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { count, start: () => setStarted(true) };
}

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, start } = useCounter(value, 1800);
  return (
    <motion.div
      onViewportEnter={start}
      className="text-center"
    >
      <div className="text-4xl lg:text-5xl font-bold text-brand-accent mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs font-bold uppercase tracking-widest text-white/60">{label}</div>
    </motion.div>
  );
}

const modules = [
  { icon: <BookOpen className="w-5 h-5" />, title: 'Scientific Foundations', desc: 'An interdisciplinary framework built to deliver boardroom-ready insights — not opinions.' },
  { icon: <Database className="w-5 h-5" />, title: 'Analytical Governance', desc: 'Proprietary quantitative indices that give every engagement a mathematically traceable outcome.' },
  { icon: <Users className="w-5 h-5" />, title: 'Human Capital & Inclusion', desc: 'A structured approach that converts workforce diversity into measurable organizational strength.' },
  { icon: <LineChart className="w-5 h-5" />, title: 'Monitoring & Intelligence', desc: 'Detect disruption before it becomes a crisis — with precision instruments, not surveys.' },
  { icon: <DollarSign className="w-5 h-5" />, title: 'Fiscal Impact Modeling', desc: 'Translate every HR intervention into an auditable financial ROI that institutions can publish.' },
  { icon: <Award className="w-5 h-5" />, title: 'Certification & Licensing', desc: 'A three-tier practitioner structure that defines exactly what you can deliver — and to whom.' },
];

const levels = [
  {
    level: 'Level I',
    title: 'Applied Consultant',
    tagline: 'Master the diagnostic fundamentals.',
    outcomes: [
      'Conduct structured organizational resilience assessments',
      'Deliver executive-grade resilience reports to SME clients',
      'Position your practice around a system, not a service',
    ],
  },
  {
    level: 'Level II',
    title: 'Strategist Consultant',
    tagline: 'Command complex, high-stakes engagements.',
    outcomes: [
      'Lead board-level resilience strategy with predictive modeling',
      'Access institutional markets — government agencies and nonprofits',
      'Deliver fiscal impact documentation no generalist can replicate',
    ],
    featured: true,
  },
  {
    level: 'Level III',
    title: 'Accredited Instructor',
    tagline: 'Build your own certified practitioner network.',
    outcomes: [
      'Train and license other certified practitioners under your authority',
      'Design and deliver corporate certification cohorts',
      'Operate institutional licensing programs at scale',
    ],
  },
];

export default function Home({ onNavigate }: HomeProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: { clientX: number; clientY: number; currentTarget: HTMLDivElement }) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.02);
    mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.02);
  };

  return (
    <div className="overflow-hidden">

      {/* ── HERO ── */}
      <section
        className="relative min-h-[92vh] flex items-center pt-8 pb-16 overflow-hidden hero-gradient"
        onMouseMove={handleMouseMove}
      >
        {/* Animated background orbs */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-brand-accent/5 blur-3xl pointer-events-none"
        />
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-brand-blue/30 blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left: copy */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                  U.S. Market Exclusive — SME Resilience Academy™
                </div>

                <h1 className="text-6xl lg:text-8xl font-bold leading-[1] mb-8 text-brand-deepblue">
                  The System That Turns HR Into a Language{' '}
                  <span className="text-brand-accent italic">CEOs Understand.</span>
                </h1>

                <p className="text-xl text-brand-muted mb-10 max-w-2xl leading-relaxed">
                  A proprietary, science-backed certification that equips HR professionals
                  with a defensible methodology — complete with quantitative indices,
                  fiscal impact models, and a licensed delivery framework available
                  nowhere else in the United States.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => onNavigate('methodology')}
                    className="bg-brand-deepblue text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-blue transition-all flex items-center justify-center gap-2 shadow-2xl shadow-brand-deepblue/30"
                  >
                    Discover the Methodology
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="bg-white text-brand-deepblue border-2 border-brand-deepblue/15 px-10 py-5 rounded-full font-bold text-lg hover:border-brand-deepblue/40 transition-all"
                  >
                    Book a Consultation
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right: floating credential card */}
            <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative w-full max-w-sm"
              >
                {/* Main card */}
                <div className="bg-brand-deepblue rounded-[2.5rem] p-10 text-white shadow-2xl shadow-brand-deepblue/40">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6">SME Resilience Academy™</div>
                  <div className="text-5xl font-bold text-brand-accent mb-3">ORI™</div>
                  <div className="text-white/70 text-sm leading-relaxed mb-8">
                    The Organizational Resilience Index — a single composite score that gives
                    every client a trackable, board-reportable number.
                  </div>
                  <div className="border-t border-white/10 pt-6 space-y-3">
                    {['10 Proprietary Indices', '3 Certification Levels', 'Institutional-Grade Fiscal Models'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                        <span className="text-white/70">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-6 -right-6 bg-brand-accent text-white rounded-2xl px-5 py-3 shadow-xl text-sm font-bold"
                >
                  U.S. SME Exclusive
                </motion.div>

                {/* Floating stat */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-5 py-4 shadow-xl border border-brand-deepblue/5"
                >
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-1">Market Addressable</div>
                  <div className="text-2xl font-bold text-brand-deepblue">33M+ SMEs</div>
                </motion.div>
              </motion.div>
            </div>

          </div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-muted/50 cursor-pointer"
            onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
          >
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </section>

      {/* ── SOCIAL PROOF STRIP ── */}
      <section className="py-8 bg-brand-deepblue border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedStat value={33} suffix="M+" label="U.S. SMEs Addressable" />
            <AnimatedStat value={3} suffix="" label="Certification Levels" />
            <AnimatedStat value={10} suffix="" label="Proprietary Indices" />
            <AnimatedStat value={6} suffix="" label="Curriculum Modules" />
          </div>
        </div>
      </section>

      {/* ── THE GAP ── */}
      <section className="py-32 lg:py-40 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">The Problem</div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Most HR consultants compete on{' '}
                <span className="text-brand-accent italic">price.</span>{' '}
                Not on systems.
              </h2>
              <p className="text-xl text-brand-muted leading-relaxed mb-6">
                Without a proprietary methodology, every consultant looks the same to a client.
                Same certifications. Same frameworks. Same proposals. The only differentiator
                becomes the hourly rate — and that race has only one direction.
              </p>
              <p className="text-xl text-brand-muted leading-relaxed">
                The SME Resilience Academy™ breaks this cycle by giving practitioners a
                system — with its own indices, its own measurable output, and its own
                licensed brand — that no generalist can replicate.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  before: 'Competing on hourly rate',
                  after: 'Delivering a proprietary diagnostic score',
                },
                {
                  before: 'Qualitative reports with soft recommendations',
                  after: 'Quantitative resilience indices with mathematical traceability',
                },
                {
                  before: 'No defensible differentiation in proposals',
                  after: 'A licensed methodology no competitor can copy',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="bg-white rounded-2xl overflow-hidden border border-brand-deepblue/5 shadow-sm"
                >
                  <div className="grid grid-cols-2">
                    <div className="p-6 bg-brand-deepblue/3 border-r border-brand-deepblue/5">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-2">Before</div>
                      <p className="text-sm text-brand-muted leading-relaxed">{item.before}</p>
                    </div>
                    <div className="p-6 bg-brand-accent/3">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-2">After</div>
                      <p className="text-sm font-semibold text-brand-deepblue leading-relaxed">{item.after}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE TOOLKIT — 6 MODULES ── */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">The System</div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Six Modules.<br/>One Complete System.
            </h2>
            <p className="text-xl text-brand-muted leading-relaxed">
              The SME Resilience Toolkit™ is not a checklist or a framework borrowed from
              existing certifications. It is a proprietary architecture built from the ground up
              for the U.S. SME market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6, boxShadow: '0 20px 60px -10px rgba(10,25,47,0.12)' }}
                className="group bg-brand-offwhite border border-brand-deepblue/5 rounded-2xl p-8 cursor-default transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-deepblue/5 text-brand-accent flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  {mod.icon}
                </div>
                <div className="text-3xl font-bold text-brand-deepblue/8 font-display mb-2 select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold mb-3">{mod.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{mod.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <button
              onClick={() => onNavigate('methodology')}
              className="inline-flex items-center gap-2 text-brand-deepblue font-bold hover:text-brand-accent transition-colors group"
            >
              Explore the full methodology
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATION PATHS ── */}
      <section className="py-32 lg:py-40 bg-brand-deepblue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Certification</div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Three Levels.<br/>One Ecosystem.
            </h2>
            <p className="text-xl text-white/60 leading-relaxed">
              Each level expands your authorization scope and your fee ceiling.
              The pathway is linear. The growth is exponential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {levels.map((lvl, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className={`rounded-[2.5rem] overflow-hidden flex flex-col transition-all duration-300 ${
                  lvl.featured
                    ? 'bg-brand-accent ring-2 ring-brand-accent/50 shadow-2xl shadow-brand-accent/20'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                {lvl.featured && (
                  <div className="bg-white/20 text-center text-xs font-bold uppercase tracking-widest py-2.5 text-white">
                    Most Sought After
                  </div>
                )}
                <div className="p-10 flex-grow flex flex-col">
                  <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">{lvl.level}</div>
                  <h3 className="text-2xl font-bold mb-2">{lvl.title}</h3>
                  <p className={`text-sm italic mb-8 ${lvl.featured ? 'text-white/80' : 'text-white/50'}`}>{lvl.tagline}</p>

                  <ul className="space-y-4 flex-grow">
                    {lvl.outcomes.map((outcome, j) => (
                      <li key={j} className={`flex items-start gap-3 text-sm leading-relaxed ${lvl.featured ? 'text-white/90' : 'text-white/60'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${lvl.featured ? 'bg-white' : 'bg-brand-accent'}`} />
                        {outcome}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onNavigate('certification')}
                    className={`mt-10 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all
                      ${lvl.featured
                        ? 'bg-white text-brand-accent hover:bg-white/90'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                      }`}
                  >
                    Learn About {lvl.level}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="py-32 lg:py-40 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Audience</div>
            <h2 className="text-4xl lg:text-5xl font-bold">Three Markets. One Proprietary System.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                emoji: '👤',
                title: 'HR Consultants & Advisors',
                desc: 'You have the expertise. The Toolkit gives you the system — and the language to charge for it at a level your SHRM credentials alone cannot justify.',
                cta: 'For Consultants',
                page: 'consultants' as Page,
              },
              {
                emoji: '🏢',
                title: 'SME Executives & HR Directors',
                desc: 'Your board demands measurable outcomes, not sentiment reports. A certified Toolkit practitioner delivers a resilience score — and a plan to improve it.',
                cta: 'For Companies',
                page: 'companies' as Page,
              },
              {
                emoji: '🏛',
                title: 'Government & Workforce Agencies',
                desc: 'Document the fiscal ROI of workforce reinsertion programs with a model calibrated against federal datasets — auditable, publishable, procurement-defensible.',
                cta: 'For Institutions',
                page: 'contact' as Page,
              },
            ].map((audience, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-brand-deepblue/5 rounded-3xl p-10 shadow-sm flex flex-col"
              >
                <div className="text-4xl mb-6">{audience.emoji}</div>
                <h3 className="text-2xl font-bold mb-4">{audience.title}</h3>
                <p className="text-brand-muted leading-relaxed flex-grow mb-8">{audience.desc}</p>
                <button
                  onClick={() => onNavigate(audience.page)}
                  className="w-full py-4 rounded-xl bg-brand-deepblue text-white font-bold hover:bg-brand-blue transition-all flex items-center justify-center gap-2 group"
                >
                  {audience.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="py-32 lg:py-40 bg-brand-deepblue overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="w-full lg:w-5/12 lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src="/founder.png"
                  className="rounded-3xl shadow-2xl border border-white/10 w-full"
                  alt="Aline Cristina de Souza — Founder & CEO"
                />
                <div className="absolute -bottom-6 -right-6 bg-brand-accent p-6 rounded-2xl shadow-2xl">
                  <div className="text-brand-deepblue font-bold text-lg leading-tight">
                    Aline Cristina de Souza<br />
                    <span className="text-sm opacity-80 font-medium">Founder & CEO</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-7/12 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Architect of{' '}
                  <span className="text-brand-accent italic">Productive Inclusion.</span>
                </h2>
                <p className="text-xl text-white/70 mb-12 leading-relaxed italic">
                  "My mission is to transform corporate structures into ecosystems of high performance
                  and social impact, bridging the gap between exact sciences and behavioral depth."
                </p>

                <div className="space-y-10">
                  <div>
                    <h3 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Academic Foundation</h3>
                    <p className="text-white/80 leading-relaxed">
                      Master's degree in Regional Development (UNIFACEF) and MBA in Controllership and
                      Finance (USP). Background in Mathematics, fortified by specializations in Labor Law
                      and Organizational Psychology.
                    </p>
                  </div>
                  <div className="space-y-6">
                    {[
                      { title: 'Institutional Leadership at National Scale', desc: 'Led large-scale projects at the Brazilian Paralympic Committee generating nearly 1,000 direct jobs for vulnerable populations — aligning social inclusion with technical performance.' },
                      { title: 'Operational Excellence with U.S. Brands', desc: 'Guided strategic operations for McDonald\'s and Burger King, executing controllership and budgetary efficiency across international markets.' },
                      { title: 'Proprietary Methodology Creator', desc: 'Developer of the SME Resilience Toolkit™ — the first proprietary system designed exclusively for organizational resilience in the U.S. SME segment.' },
                    ].map((item, i) => (
                      <div key={i} className="border-l-2 border-brand-accent/30 pl-6">
                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-32 lg:py-40 bg-brand-offwhite">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-6">Ready?</div>
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-brand-deepblue">
              Stop selling hours.<br />
              <span className="text-brand-accent italic">Start delivering a score.</span>
            </h2>
            <p className="text-xl text-brand-muted mb-12 leading-relaxed">
              Book a discovery call with an SME Resilience Academy™ advisor.
              We'll identify the right certification level for your goals and
              walk you through what the methodology looks like in practice.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-brand-accent text-white px-14 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-brand-accent/30 inline-flex items-center gap-3"
            >
              Book Your Discovery Call
              <ArrowRight className="w-6 h-6" />
            </button>
            <p className="text-sm text-brand-muted mt-6 opacity-70">
              No commitment. No pitch. Just a conversation about where you are and where the Toolkit can take you.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
