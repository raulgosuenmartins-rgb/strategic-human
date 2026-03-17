import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is this just another HR course?",
      a: "No. This is a structured portal based on a proprietary methodology (SME Resilience Toolkit™). It includes tools, calculators, dashboards, and a certification path designed for high-level organizational consulting."
    },
    {
      q: "Do I need to be an experienced consultant to apply?",
      a: "While experience helps, the methodology is designed to provide a structured 'language of delivery' for both veterans and those transitioning from senior corporate roles into advisory."
    },
    {
      q: "Can I use the methodology commercially with my clients?",
      a: "Yes. Level I and II certifications grant you the right to apply the framework in your consulting practice. Level III allows for broader licensing and training rights."
    },
    {
      q: "How does the ORI™ index work?",
      a: "The Organizational Resilience Index is a quantitative model that weights 12 key dimensions of human and operational capital to produce a single, actionable score of organizational health."
    },
    {
      q: "Is the certification recognized in the US market?",
      a: "The SME Resilience Toolkit™ is specifically designed for the US regulatory and commercial environment, focusing on metrics that matter to American CEOs and CFOs."
    },
    {
      q: "What kind of support do I get after certification?",
      a: "Certified practitioners gain access to a private community, ongoing methodology updates, technical advisor support, and a library of white papers and templates."
    }
  ];

  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8">Common <span className="text-brand-accent italic">Questions.</span></h1>
          <p className="text-xl text-brand-muted">
            Everything you need to know about the portal, the methodology, and the certification process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === i ? 'bg-white border-brand-accent shadow-lg' : 'bg-brand-offwhite border-brand-deepblue/5'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-bold">{faq.q}</span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-brand-accent" />
                ) : (
                  <Plus className="w-5 h-5 text-brand-muted" />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8 text-brand-muted leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-brand-deepblue rounded-[2.5rem] text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-brand-muted mb-8">Our technical advisors are ready to help you understand if the methodology is right for your practice.</p>
          <button className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            Talk to an Advisor
          </button>
        </div>
      </div>
    </div>
  );
}
