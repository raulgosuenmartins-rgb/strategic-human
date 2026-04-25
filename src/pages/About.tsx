import { motion } from 'motion/react';

export default function About() {
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
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-5">About</p>
            <h1 className="font-display text-4xl lg:text-6xl font-semibold text-brand-navy leading-[1.15] mb-6">
              Founded by an HR practitioner with 21 years of frontline operational experience and quantitative academic training.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── BIO ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Photo column */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative"
              >
                <img
                  src="/founder.png"
                  alt="Aline Cristina de Souza — Founder and CEO, Strategic Human Systems & Governance LLC"
                  className="w-full rounded object-cover object-top"
                />

                {/* Name card */}
                <div className="mt-5 p-5 border border-brand-border rounded bg-white">
                  <p className="font-display text-lg font-semibold text-brand-navy">Aline Cristina de Souza</p>
                  <p className="text-sm text-brand-teal font-medium mt-0.5">Founder &amp; CEO</p>
                  <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                    Strategic Human Systems &amp; Governance LLC<br />
                    St. Petersburg, FL
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Bio text column */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-8 space-y-8 text-brand-muted leading-relaxed"
            >
              <p>
                Aline Cristina de Souza is the Founder and CEO of Strategic Human Systems &amp; Governance LLC.
                She is a Human Resources practitioner with over 20 years of continuous experience in frontline
                operational environments — including quick-service restaurants (McDonald's Brazil, Burger King Brazil),
                fashion retail (Lojas Riachuelo, 40,000+ employees), large-scale food retail (2,000+ employees),
                financial services contact centers (Brasilseg/Banco do Brasil Seguros), and inclusive employment
                programs (Brazilian Paralympic Committee).
              </p>

              <p>
                Her academic formation has been formally evaluated by International Education Evaluations (IEE),
                a U.S. credential evaluation firm and member of the National Association of Credential Evaluation
                Services (NACES). Equivalencies established by IEE include: a Master of Science degree in Regional
                Development (Uni-FACEF, with research focused on small business viability), a Graduate Certificate
                in Controllership from the University of São Paulo (USP, ranked #1 in Latin America by QS World
                University Rankings), a Bachelor of Business Administration degree, and Graduate Certificates in
                Labor Law and Organizational Psychology.
              </p>

              <p>
                Aline is currently HR Business Partner at the Brazilian Paralympic Committee, where she has been
                promoted three times in twenty months (HR Senior Analyst &rarr; HR Coordinator &rarr; HR Business
                Partner). She founded SHSG to bring rigorous, quantitative workforce governance to the American
                small and medium businesses that the existing professional services ecosystem does not adequately serve.
              </p>

              <p>
                She holds peer-reviewed academic publications on small and medium-sized enterprises in retail
                (Uni-FACEF, 2017), predating her consulting practice by nearly a decade.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY THIS COMBINATION MATTERS ── */}
      <section className="py-16 lg:py-24 bg-brand-offwhite border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-4">Why This Combination Matters</p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-brand-navy mb-8 leading-tight">
                21 years of frontline operations. Quantitative academic training. Research in SMEs.
              </h2>

              <div className="bg-white border border-brand-border rounded p-8 mb-8">
                <p className="text-brand-navy font-medium leading-relaxed italic font-display text-lg">
                  "The American human capital consulting market typically segments into two profiles:
                  quantitative analysts with limited operational experience, and HR operators without
                  analytical training. Aline integrates both."
                </p>
              </div>

              <p className="text-brand-muted leading-relaxed mb-6">
                Frontline operational experience at the scale of McDonald's, Burger King, Lojas Riachuelo, and the Brazilian
                Paralympic Committee provides a ground-level understanding of workforce dynamics that is rare among
                consultants with academic or analytical backgrounds. Conversely, academic training in regional development,
                controllership, and organizational psychology provides methodological rigor that is uncommon among
                HR practitioners formed primarily in the field.
              </p>

              <p className="text-brand-muted leading-relaxed">
                The result is a consulting practice built on the proposition that workforce governance in frontline
                SMBs requires both kinds of knowledge simultaneously — and that the absence of either produces
                recommendations that are either disconnected from operational reality or impossible to measure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CAREER TIMELINE ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-3">Career History</p>
            <h2 className="font-display text-2xl lg:text-3xl font-semibold text-brand-navy">
              Frontline environments across multiple industries.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {[
              { org: 'Brazilian Paralympic Committee', role: 'HR Business Partner (current)', note: 'Three promotions in twenty months. Inclusive employment programs at national scale.' },
              { org: 'Brasilseg / Banco do Brasil Seguros', role: 'HR — Financial Services', note: 'Large-scale contact center operations in financial services.' },
              { org: 'Lojas Riachuelo', role: 'HR — Fashion Retail', note: '40,000+ employees across national retail network.' },
              { org: 'Food Retail Operations', role: 'HR — Large-Scale Retail', note: '2,000+ employee food retail environment.' },
              { org: 'McDonald\'s Brazil / Burger King Brazil', role: 'HR — Quick-Service Restaurants', note: 'Frontline workforce management in high-turnover QSR operations.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="border border-brand-border rounded p-6 bg-brand-offwhite"
              >
                <p className="font-semibold text-brand-navy text-sm mb-0.5">{item.org}</p>
                <p className="text-xs text-brand-teal font-medium uppercase tracking-wider mb-2">{item.role}</p>
                <p className="text-xs text-brand-muted leading-relaxed">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
