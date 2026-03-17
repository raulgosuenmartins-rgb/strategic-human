import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';
import { LeadData } from '../types';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Partial<LeadData>>({
    interestType: 'individual'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Lead captured:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Information Requested</h2>
          <p className="text-brand-muted mb-8">
            Thank you for your interest in the SME Resilience Toolkit™. An advisor will contact you within 24 hours to discuss your profile and the next certification steps.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="text-brand-accent font-bold hover:underline"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8">Start your <span className="text-brand-accent italic">application.</span></h1>
            <p className="text-xl text-brand-muted mb-12 leading-relaxed">
              The SME Resilience Portal is a premium environment. We evaluate each application to ensure the methodology is applied by professionals capable of delivering high-impact organizational transformation.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-deepblue text-white flex items-center justify-center flex-shrink-0 font-bold">01</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Profile Evaluation</h4>
                  <p className="text-brand-muted">We review your background and current practice to align with our certification levels.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-deepblue text-white flex items-center justify-center flex-shrink-0 font-bold">02</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Advisor Consultation</h4>
                  <p className="text-brand-muted">A technical advisor will walk you through the framework components and ROI potential.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-deepblue text-white flex items-center justify-center flex-shrink-0 font-bold">03</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Onboarding</h4>
                  <p className="text-brand-muted">Access the portal, materials, and start your journey toward methodological authority.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 lg:p-12 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-muted">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-brand-deepblue/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all"
                    placeholder="John Doe"
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-muted">Work Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-brand-deepblue/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all"
                    placeholder="john@company.com"
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-muted">Company / Boutique</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-brand-deepblue/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all"
                    placeholder="Acme Consulting"
                    onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-muted">Current Role</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-brand-deepblue/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all"
                    placeholder="Senior HR Consultant"
                    onChange={e => setFormData({...formData, role: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-muted">I am applying as:</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-brand-deepblue/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all appearance-none bg-white"
                  onChange={e => setFormData({...formData, interestType: e.target.value as any})}
                >
                  <option value="individual">Individual Consultant</option>
                  <option value="consultancy">HR Consultancy / Boutique</option>
                  <option value="company">Enterprise / Corporation</option>
                  <option value="institution">Educational Institution</option>
                  <option value="partnership">Strategic Partnership</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-muted">Context / Goals</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-xl border border-brand-deepblue/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all min-h-[120px]"
                  placeholder="Tell us about your current practice and what you hope to achieve with the SME Resilience Toolkit™..."
                  onChange={e => setFormData({...formData, context: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-deepblue text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-blue transition-all flex items-center justify-center gap-2 group"
              >
                Submit Application
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <p className="text-[10px] text-brand-muted text-center uppercase tracking-widest">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
