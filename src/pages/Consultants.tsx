import { motion } from 'motion/react';
import { DollarSign, TrendingUp, ShieldCheck, Users } from 'lucide-react';

export default function Consultants() {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <div className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">Professional Transformation</div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8">Stop selling hours. Start selling <span className="text-brand-accent italic">impact.</span></h1>
            <p className="text-xl text-brand-muted leading-relaxed mb-10">
              The SME Resilience Toolkit™ repositions you from a tactical executor to a strategic transformation partner. Learn to deliver high-ticket advisory services backed by data.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-2xl border border-brand-deepblue/5 shadow-sm">
                <div className="text-brand-accent font-bold text-3xl mb-1">3x</div>
                <div className="text-xs font-bold uppercase tracking-widest text-brand-muted">Average Ticket Increase</div>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-brand-deepblue/5 shadow-sm">
                <div className="text-brand-accent font-bold text-3xl mb-1">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-brand-muted">Methodological Authority</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800" 
              className="rounded-3xl grayscale shadow-2xl" 
              alt="Consultant working"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 glass-card p-8 rounded-2xl max-w-xs">
              <p className="text-sm italic text-brand-deepblue font-medium mb-4">
                "The framework allowed me to double my fees in 6 months by providing a level of technical depth my clients had never seen from HR."
              </p>
              <div className="text-xs font-bold uppercase tracking-widest text-brand-accent">— Senior Advisor, NYC</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <DollarSign className="w-6 h-6" />,
              title: "Premium Pricing",
              desc: "Sustain higher fees by delivering a proprietary methodology that connects directly to fiscal health."
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "Scalable Offers",
              desc: "Move from one-off projects to recurring monitoring and high-value certification programs."
            },
            {
              icon: <ShieldCheck className="w-6 h-6" />,
              title: "Risk Mitigation",
              desc: "Protect your reputation with a proven, data-driven protocol that reduces guesswork."
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Elite Network",
              desc: "Join a community of top-tier US consultants sharing insights and collaborative opportunities."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white border border-brand-deepblue/5"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-deepblue text-brand-accent flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
