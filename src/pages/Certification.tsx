import { motion } from 'motion/react';
import { Check, ArrowRight, Award, Star, Zap } from 'lucide-react';

export default function Certification() {
  const levels = [
    {
      level: "Level I",
      title: "Certified Practitioner",
      desc: "Master the core framework and the ORI™ index. Ideal for independent consultants looking to standardize their delivery.",
      features: ["Full Framework Access", "ORI™ Calculator Access", "Practitioner Badge", "Community Access"],
      color: "bg-brand-deepblue"
    },
    {
      level: "Level II",
      title: "Strategic Consultant",
      desc: "Advanced predictive modeling and fiscal impact analysis. For professionals leading large-scale transformations.",
      features: ["Predictive Algorithms", "Fiscal Impact Models", "Strategic Partner Status", "Priority Support"],
      color: "bg-brand-accent"
    },
    {
      level: "Level III",
      title: "Credentialed Instructor",
      desc: "The highest level of authority. Authorized to train other consultants and license the methodology to organizations.",
      features: ["Licensing Rights", "Train-the-Trainer Access", "Master Instructor Badge", "Revenue Sharing"],
      color: "bg-brand-blue"
    }
  ];

  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">The Pathway</div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8">Certification Levels</h1>
          <p className="text-xl text-brand-muted leading-relaxed">
            Elevate your professional standing through a structured, credentialed pathway. Each level unlocks deeper access to the SME Resilience Toolkit™.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {levels.map((lvl, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card rounded-[2.5rem] overflow-hidden flex flex-col"
            >
              <div className={`${lvl.color} p-10 text-white`}>
                <div className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2">{lvl.level}</div>
                <h3 className="text-2xl font-bold">{lvl.title}</h3>
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <p className="text-brand-muted mb-8 leading-relaxed">{lvl.desc}</p>
                <ul className="space-y-4 mb-10">
                  {lvl.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium">
                      <Check className="w-4 h-4 text-brand-accent" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className="mt-auto w-full py-4 rounded-xl border border-brand-deepblue/10 font-bold hover:bg-brand-deepblue hover:text-white transition-all">
                  View Prerequisites
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Why get certified?</h2>
            <div className="space-y-8">
              {[
                {
                  icon: <Award className="w-6 h-6 text-brand-accent" />,
                  title: "Market Differentiation",
                  desc: "Stop competing on price. Compete on a proprietary, data-driven system that clients can't find elsewhere."
                },
                {
                  icon: <Star className="w-6 h-6 text-brand-accent" />,
                  title: "Executive Language",
                  desc: "Learn to speak the language of CEOs and CFOs, connecting HR metrics directly to business outcomes."
                },
                {
                  icon: <Zap className="w-6 h-6 text-brand-accent" />,
                  title: "Scalable Delivery",
                  desc: "Use our templates, dashboards, and protocols to deliver high-value results in less time."
                }
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
          <div className="bg-brand-deepblue rounded-3xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-6">Next Cohort Starts Soon</h3>
            <p className="text-brand-muted mb-8">
              Applications are currently open for the Spring {new Date().getFullYear()} intake. Spaces are limited to ensure high-touch advisor support.
            </p>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold uppercase tracking-widest text-white/60">Status</span>
                <span className="text-xs font-bold bg-brand-accent text-white px-2 py-1 rounded">Open</span>
              </div>
              <div className="text-lg font-bold">Limited Availability</div>
            </div>
            <button className="w-full bg-brand-accent text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
