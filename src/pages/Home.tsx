import { motion } from 'motion/react';
import { Page } from '../types';
import {
  ArrowRight, ShieldCheck, BarChart3, Users, Award,
  TrendingUp, AlertTriangle, DollarSign, CheckCircle,
  Zap, Target, BookOpen, Database, LineChart, Building2
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

function CounterStat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl lg:text-5xl font-bold text-brand-accent mb-2">{value}</div>
      <div className="text-xs font-bold uppercase tracking-widest text-white/60">{label}</div>
    </motion.div>
  );
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-36 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                The Only Certification That Speaks the Language of Money
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] mb-6">
                Your Clients Are Losing{' '}
                <span className="text-brand-accent italic">$32,190</span>{' '}
                Per Worker Per Year.{' '}
                <span className="text-brand-deepblue/50">Can You Prove It?</span>
              </h1>

              <p className="text-xl text-brand-muted mb-4 max-w-xl leading-relaxed">
                Stop competing on rate. Deploy the SME Resilience Toolkit™ — the only
                proprietary, science-backed methodology for SME organizational resilience in
                the United States. Charge $18,000 engagements. Deliver a score.
              </p>

              {/* Trust strip */}
              <div className="flex flex-wrap gap-3 mb-8 text-xs font-bold uppercase tracking-wider text-brand-muted">
                <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-brand-accent" /> HRCI-Eligible Credits</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-brand-accent" /> 3 Certification Levels</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-brand-accent" /> 10 Proprietary Indices</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-brand-accent" /> U.S. SME Focused</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('pricing')}
                  className="bg-brand-accent text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-brand-accent/40"
                >
                  Get Certified Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('methodology')}
                  className="bg-white text-brand-deepblue border-2 border-brand-deepblue/20 px-10 py-5 rounded-full font-bold text-lg hover:border-brand-deepblue/60 transition-all"
                >
                  See the Methodology
                </button>
              </div>
            </motion.div>

            {/* Right: mosaic grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Top-left: navy brand */}
              <div className="bg-brand-deepblue rounded-3xl p-8 text-white flex flex-col justify-between min-h-[180px]">
                <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-3">SME Resilience Academy™</div>
                <div>
                  <div className="text-3xl font-bold text-brand-accent mb-1">ORI™</div>
                  <div className="text-sm opacity-70">Organizational Resilience Index</div>
                </div>
              </div>

              {/* Top-right: coral stat */}
              <div className="bg-brand-accent rounded-3xl p-8 text-white flex flex-col justify-between min-h-[180px]">
                <div className="text-xs font-bold uppercase tracking-widest opacity-70 mb-3">Net Fiscal Gain / Worker / Year</div>
                <div>
                  <div className="text-4xl font-bold mb-1">$32,190</div>
                  <div className="text-sm opacity-80">Documented. Auditable. Yours to deliver.</div>
                </div>
              </div>

              {/* Bottom-left: light */}
              <div className="bg-white border border-brand-deepblue/10 rounded-3xl p-8 flex flex-col justify-between min-h-[180px]">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-3">Feature Stack</div>
                <div className="space-y-2">
                  {['ORI™ Diagnostic', 'SRZ™ Failure Predictor', 'NFG™ Fiscal Impact'].map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm font-medium">
                      <div className="w-2 h-2 rounded-full bg-brand-accent" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom-right: blue */}
              <div className="bg-brand-blue rounded-3xl p-8 text-white flex flex-col justify-between min-h-[180px]">
                <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-3">Practitioner Revenue</div>
                <div>
                  <div className="text-3xl font-bold text-brand-accent mb-1">$200K+</div>
                  <div className="text-sm opacity-70">Annual income from Toolkit ecosystem alone</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CRISIS / PROBLEM SECTION ── */}
      <section className="py-24 bg-brand-deepblue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">The Problem Nobody Is Solving</div>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              The U.S. HR Consulting Market<br/>
              Is Broken. <span className="text-brand-accent">Here's the Data.</span>
            </h2>
          </div>

          {/* Big stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { stat: '$53.8B', label: 'HR Consulting Market by 2030', source: 'Grand View Research' },
              { stat: '200%', label: 'Annual Salary Lost Per Leadership Departure', source: 'Gallup 2026' },
              { stat: '60%', label: 'SMBs Unprepared for Operational Disruption', source: 'U.S. Chamber 2024' },
              { stat: '$32,190', label: 'Annual Public Savings Per Reinserted Worker', source: 'NFG™ Model' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-brand-accent mb-3">{item.stat}</div>
                <div className="text-sm font-semibold text-white/80 mb-2 leading-snug">{item.label}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">{item.source}</div>
              </motion.div>
            ))}
          </div>

          {/* Aggressive sub-headlines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: <AlertTriangle className="w-6 h-6 text-brand-accent" />,
                text: '"Your SHRM cert got you in the door. It will not get you to $300K."'
              },
              {
                icon: <DollarSign className="w-6 h-6 text-brand-accent" />,
                text: '"The average HR consultant charges $120/hr. A certified Toolkit practitioner closes $18,000 engagements. Same market. Different methodology."'
              },
              {
                icon: <AlertTriangle className="w-6 h-6 text-brand-accent" />,
                text: '"Your client just lost their third operations manager in 90 days. Can you put a dollar figure on that? No? Then someone else will."'
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-brand-accent" />,
                text: '"60% of your clients are one bad quarter away from collapse. Your job is to prove it before they collapse."'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                <p className="text-lg font-medium text-white/90 italic leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY — 6 MODULES ── */}
      <section className="py-24 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">The System</div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">6 Modules. 10 Proprietary Indices. Zero Generic Consulting.</h2>
            <p className="text-xl text-brand-muted leading-relaxed">
              The SME Resilience Toolkit™ is not a checklist. It is a mathematical system with a proprietary formula:
              <span className="font-bold text-brand-deepblue"> Resilience = f(Financial Stability + Operational Predictability + Human Sustainability)</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                num: '01',
                icon: <BookOpen className="w-6 h-6" />,
                title: 'Scientific Foundations',
                desc: 'Interdisciplinary framework integrating Applied Mathematics, Organizational Psychology, and Process Engineering. Three-vector model gives every engagement a theoretical backbone that boards and investors respect — not a checklist, a formula.',
              },
              {
                num: '02',
                icon: <Database className="w-6 h-6" />,
                title: 'Analytical Governance & Mathematical Modeling',
                desc: 'Ten proprietary indices including ORI™ (composite score 0–100 with Bayesian dynamic weighting), SRZ™ predictive failure model, RSC, TRC, ICR, CVO, CSC, FCE™, NFG™, FCC™. Every recommendation is mathematically traceable.',
              },
              {
                num: '03',
                icon: <Users className="w-6 h-6" />,
                title: 'Human Capital & Productive Inclusion',
                desc: '6-step Inclusive Recruitment Protocol, Retention-as-Organizational-Engineering framework, and Cognitive Load Management system. Converts underutilized workforce segments into high-stability assets.',
              },
              {
                num: '04',
                icon: <LineChart className="w-6 h-6" />,
                title: 'Monitoring & Organizational Intelligence',
                desc: 'Multidimensional Resilience Dashboard integrating financial, operational, and human indicators. Early burnout and climate volatility detection. Intervention before rupture — not after.',
              },
              {
                num: '05',
                icon: <DollarSign className="w-6 h-6" />,
                title: 'Fiscal Impact Model (FCE™ / NFG™)',
                desc: 'Net Fiscal Gain model documenting $20,910–$32,190 in public savings per reinserted worker per year. The only HR consulting model designed for institutional fiscal documentation. Monte Carlo validated.',
              },
              {
                num: '06',
                icon: <Award className="w-6 h-6" />,
                title: 'Certification & Licensing Structure',
                desc: 'Three practitioner levels with defined authorization scopes. Official Six-Step Application Protocol. Code of Methodological Integrity. Non-exclusive, non-transferable methodology license.',
              },
            ].map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-brand-deepblue/5 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-4xl font-bold text-brand-deepblue/10 font-display">{mod.num}</span>
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 text-brand-accent flex items-center justify-center">
                    {mod.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3">{mod.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{mod.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('methodology')}
              className="bg-brand-deepblue text-white px-10 py-4 rounded-full font-bold hover:bg-brand-blue transition-all inline-flex items-center gap-2"
            >
              Explore Full Methodology <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ── 10 PROPRIETARY INDICES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Proprietary IP</div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                10 Indices No Generalist<br/>Consultant Can Replicate.
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed mb-8">
                These are not borrowed frameworks. Every index below is proprietary to the
                SME Resilience Toolkit™. Deploying them in client work requires a valid
                certification license — period.
              </p>
              <div className="bg-brand-deepblue text-white rounded-2xl p-8">
                <div className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4">The Opening Number</div>
                <p className="text-white/90 text-lg leading-relaxed italic">
                  "Your current ORI™ score is 41 — Vulnerable. Here is your 90-day stabilization plan.
                  Every month we delay, you burn $27,500 in preventable turnover cost."
                </p>
                <p className="text-white/50 text-sm mt-4">→ This is the conversation a certified practitioner has. Generic consultants cannot have it.</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { abbr: 'ORI™', name: 'Organizational Resilience Index', formula: 'ORI = wF·F + wO·O + wW·W (Bayesian weights, sector-adjusted)', range: '0–100 (5 tiers: Highly Resilient to Critical Risk)', level: 'I+' },
                { abbr: 'RSC', name: 'Cash Resilience Index', formula: 'RSC = (Cash + Net Receivables + Available Credit) / 3-Mo Burn Rate', range: '<3 Critical | 3–6 Watch | ≥6 Resilient (months)', level: 'I+' },
                { abbr: 'TRC', name: 'Cost Rigidity Rate', formula: 'TRC = Committed Fixed Costs / Total Costs', range: 'Higher = reduced shock absorption', level: 'I+' },
                { abbr: 'ICR', name: 'Revenue Concentration Index (HHI)', formula: 'ICR = Σ(rᵢ/R)² — Herfindahl-Hirschman Index', range: '<0.10 Healthy | 0.10–0.25 Moderate | >0.25 Critical', level: 'I+' },
                { abbr: 'CVO', name: 'Organizational Volatility Coefficient', formula: 'CVO = σ/μ across financial, operational, and workforce dimensions', range: '<0.10 Stable → >0.50 Critical', level: 'I+' },
                { abbr: 'CSC', name: 'Cost of Staff Replacement', formula: 'CSC = Recruitment + Vacancy + Productivity Loss + Training + 0.30×Salary×(Tenure/Avg.Tenure)', range: '$ per departure by role tier', level: 'I+' },
                { abbr: 'SRZ™', name: 'SME Resilience Z-Score (Predictive Failure)', formula: 'SRZ = β₀ + β₁·RSC + β₂·RVI + β₃·ICR + β₄·IEFT + β₅·SROP', range: 'P(failure) 12/24/36 months | AUC-ROC >0.75', level: 'II+' },
                { abbr: 'FCE™', name: 'Fiscal Conversion Effect', formula: 'FCE = ΔTax Revenue + ΔUI Savings + ΔProductivity + Multiplier Effect', range: '$10K–$18K avoided transfers + $5K–$9K new tax revenue', level: 'II+' },
                { abbr: 'NFG™', name: 'Net Fiscal Gain', formula: 'NFG = (FCE_total − Intervention Cost) / Intervention Cost', range: '$20,910–$32,190/worker/year | Monte Carlo P(NFG>0) >95%', level: 'II+' },
                { abbr: 'FCC™', name: 'Fiscal Conversion Coefficient', formula: 'FCC = Employment Retention Rate × Average Taxable Income (sector/region calibrated)', range: 'Sector- and region-specific multiplier', level: 'II+' },
              ].map((idx, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-brand-offwhite border border-brand-deepblue/5 rounded-xl p-5"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-brand-deepblue font-bold text-lg font-display">{idx.abbr}</span>
                      <span className="text-sm font-medium text-brand-deepblue/70">{idx.name}</span>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex-shrink-0 ${idx.level === 'I+' ? 'bg-brand-deepblue/10 text-brand-deepblue' : 'bg-brand-accent/10 text-brand-accent'}`}>
                      Level {idx.level}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-brand-muted bg-white border border-brand-deepblue/5 rounded-lg px-3 py-2 mb-2">{idx.formula}</div>
                  <div className="text-xs text-brand-muted">{idx.range}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ROI / INCOME PROJECTIONS ── */}
      <section className="py-24 bg-brand-deepblue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">The Business Case</div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Level I enrollment pays for itself<br/>in a single SME engagement.
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Most practitioners complete their first Toolkit engagement within 60 days of certification.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Consultant income table */}
            <div>
              <h3 className="text-xl font-bold text-brand-accent uppercase tracking-widest mb-6">Consultant Income Projections</h3>
              <div className="space-y-3">
                {[
                  { scenario: 'Level I — 3 SME clients/year', revenue: '$22,500', note: 'incremental from one new service line' },
                  { scenario: 'Level I — 8 SME clients/year', revenue: '$64,000', note: 'replaces all hourly work' },
                  { scenario: 'Level II — 4 engagements/year', revenue: '$88,000', note: 'incremental' },
                  { scenario: 'Level II — 6 engagements/year', revenue: '$150,000', note: 'full Toolkit-based practice possible' },
                  { scenario: 'Level III — 2 corporate cohorts', revenue: '$130,000', note: 'new revenue channel' },
                  { scenario: 'Combined L1+L2+L3 practice', revenue: '$200K–$350K+', note: 'from Toolkit ecosystem alone', highlight: true },
                ].map((row, i) => (
                  <div key={i} className={`flex items-center justify-between p-4 rounded-xl ${row.highlight ? 'bg-brand-accent text-white' : 'bg-white/5 border border-white/10'}`}>
                    <div>
                      <div className="font-semibold text-sm">{row.scenario}</div>
                      <div className={`text-xs mt-0.5 ${row.highlight ? 'text-white/80' : 'text-white/50'}`}>{row.note}</div>
                    </div>
                    <div className="text-xl font-bold flex-shrink-0 ml-4">{row.revenue}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* NFG Institutional table */}
            <div>
              <h3 className="text-xl font-bold text-brand-accent uppercase tracking-widest mb-6">Institutional Fiscal Impact (NFG™)</h3>
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left px-5 py-4 text-white/60 font-bold uppercase tracking-wider text-xs">Workers Reinserted</th>
                      <th className="text-right px-5 py-4 text-white/60 font-bold uppercase tracking-wider text-xs">Conservative</th>
                      <th className="text-right px-5 py-4 text-brand-accent font-bold uppercase tracking-wider text-xs">Optimistic</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { workers: '100 workers', conservative: '$2,091,000', optimistic: '$3,219,000' },
                      { workers: '500 workers', conservative: '$10,455,000', optimistic: '$16,095,000' },
                      { workers: '1,000 workers', conservative: '$20,910,000', optimistic: '$32,190,000' },
                      { workers: '5,000 workers', conservative: '$104,550,000', optimistic: '$160,950,000' },
                      { workers: '10,000 workers', conservative: '$209,100,000', optimistic: '$321,900,000' },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/5 last:border-0">
                        <td className="px-5 py-4 font-medium">{row.workers}</td>
                        <td className="px-5 py-4 text-right text-white/70">{row.conservative}</td>
                        <td className="px-5 py-4 text-right text-brand-accent font-bold">{row.optimistic}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-white/40 mt-4 leading-relaxed">
                ⚠ Fiscal estimates derived from the NFG™ model, calibrated against USDA/ERS, ACF/HHS, CMS, DOL, HUD, and IRS datasets. Monte Carlo validated: P(NFG &gt; 0) &gt; 95% across 10,000 iterations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF COUNTER STRIP ── */}
      <section className="py-16 bg-brand-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <CounterStat value="500+" label="Certified Practitioners (Year 1 Target)" />
            <CounterStat value="33M+" label="U.S. SMBs Addressable Market" />
            <CounterStat value="10" label="Proprietary Indices" />
            <CounterStat value="$53.8B" label="HR Consulting Market by 2030" />
          </div>
        </div>
      </section>

      {/* ── FOR WHOM ── */}
      <section className="py-24 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Who This Is For</div>
            <h2 className="text-4xl lg:text-5xl font-bold">Three Markets. One System.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                label: 'HR Consultants & Advisors',
                headline: 'Stop competing on price. Start delivering a score.',
                points: [
                  'Proprietary IP that no competitor can replicate',
                  'Justify $5,000–$35,000 project fees instantly',
                  'Repeatable, branded consulting product',
                  'Path from $120/hr to $18,000 engagements',
                ],
                cta: 'Get Certified',
                page: 'certification' as Page,
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                label: 'SME Executives & HR Directors',
                headline: 'Stop managing people. Start governing metrics.',
                points: [
                  'ORI™ score suitable for board-level reporting',
                  'SRZ™ predicts failure before it happens',
                  'CSC converts departures into CFO line items',
                  'Measurable before/after resilience scores',
                ],
                cta: 'Deploy for My Company',
                page: 'companies' as Page,
              },
              {
                icon: <Target className="w-8 h-8" />,
                label: 'Government & Workforce Agencies',
                headline: 'Document fiscal ROI with institutional-grade precision.',
                points: [
                  'NFG™: $20,910–$32,190 documented per worker/year',
                  'FCE™ decomposes into 4 independently auditable channels',
                  'FCC™ calibrated by sector and region',
                  'Defensible for federal procurement and grant reporting',
                ],
                cta: 'Contact for Licensing',
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
                <div className="w-14 h-14 rounded-2xl bg-brand-deepblue/5 text-brand-accent flex items-center justify-center mb-6">
                  {audience.icon}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-3">{audience.label}</div>
                <h3 className="text-2xl font-bold mb-6 leading-snug">{audience.headline}</h3>
                <ul className="space-y-3 mb-8 flex-grow">
                  {audience.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-brand-muted">
                      <CheckCircle className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate(audience.page)}
                  className="w-full py-4 rounded-xl bg-brand-deepblue text-white font-bold hover:bg-brand-blue transition-all flex items-center justify-center gap-2"
                >
                  {audience.cta} <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER SECTION ── */}
      <section className="py-32 bg-brand-deepblue overflow-hidden">
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
                    Aline Cristina de Souza<br/>
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
                  Architect of <span className="text-brand-accent italic">Productive Inclusion.</span>
                </h2>
                <p className="text-xl text-white/70 mb-12 leading-relaxed italic">
                  "My mission is to transform corporate structures into ecosystems of high performance and social impact, bridging the gap between exact sciences and behavioral depth."
                </p>

                <div className="space-y-10">
                  <div>
                    <h3 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Academic Foundation</h3>
                    <p className="text-white/80 leading-relaxed">
                      Master's degree in Regional Development (UNIFACEF) and MBA in Controllership and Finance (USP).
                      Background in Mathematics, fortified by executive specializations in Labor Law and Organizational Psychology.
                    </p>
                  </div>
                  <div className="space-y-6">
                    {[
                      {
                        title: 'Institutional Leadership (National Scale)',
                        desc: 'Led large-scale projects at the Brazilian Paralympic Committee generating almost 1,000 direct jobs for vulnerable populations, aligning inclusion with technical performance.',
                      },
                      {
                        title: 'Operational Excellence (U.S. Brands)',
                        desc: 'Guided global operations managing strategic units for McDonald\'s and Burger King, executing controllership and budgetary efficiency.',
                      },
                      {
                        title: 'Proprietary IP Creator',
                        desc: 'Developer of the SME Resilience Toolkit™, providing the blueprint for resilient organizational continuity through 10 unique proprietary indices.',
                      },
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

      {/* ── DUAL CTA ── */}
      <section className="py-32 bg-brand-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6">
            <Zap className="w-3.5 h-3.5" />
            Limited Cohort Seats Available
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tighter">
            PROFIT THROUGH<br/>GOVERNANCE.
          </h2>
          <p className="text-2xl mb-4 max-w-3xl mx-auto font-medium opacity-90">
            The SME Resilience Academy™ is the only place in the United States where you can acquire
            a science-backed, financially defensible, proprietary methodology for SME organizational resilience.
          </p>
          <p className="text-lg mb-12 opacity-70">Use it immediately to charge premium fees and deliver documented client ROI.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button
              onClick={() => onNavigate('pricing')}
              className="bg-brand-deepblue text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl"
            >
              View Certification Pricing
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-brand-deepblue px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl"
            >
              Book a Discovery Call
            </button>
          </div>
          <p className="text-sm mt-8 opacity-60">7-day full refund guarantee if you don't see the methodology's power after Module 1.</p>
        </div>
      </section>

    </div>
  );
}
