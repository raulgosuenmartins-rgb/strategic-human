import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, MapPin, Mail } from 'lucide-react';
import { ContactFormData } from '../types';

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState<Partial<ContactFormData>>({});

  const set = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Unable to submit form. Please try again.');
      }

      setSubmitState('success');
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Unexpected error. Please try again or email us directly.');
      setSubmitState('error');
    }
  };

  const inputClass = "w-full px-4 py-3 rounded border border-brand-border focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-all bg-white text-sm text-brand-navy placeholder:text-brand-muted/50";
  const labelClass = "block text-xs font-semibold uppercase tracking-widest text-brand-muted mb-1.5";

  if (submitState === 'success') {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-16 h-16 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="font-display text-2xl font-semibold text-brand-navy mb-3">Expression of Interest Received</h2>
          <p className="text-brand-muted leading-relaxed mb-6">
            Thank you for reaching out to Strategic Human Systems &amp; Governance LLC.
            We will follow up by email as our operations timeline develops.
          </p>
          <button
            onClick={() => { setSubmitState('idle'); setFormData({}); }}
            className="text-brand-teal font-medium text-sm hover:underline"
          >
            Submit another inquiry
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">

      {/* ── HERO ── */}
      <section className="hero-gradient pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-5">Contact</p>
            <h1 className="font-display text-4xl lg:text-6xl font-semibold text-brand-navy leading-[1.15] mb-5">
              Get in touch.
            </h1>
            <p className="text-lg text-brand-muted leading-relaxed">
              Operations begin in 2027. We are currently accepting expressions of interest from American
              SMBs in retail, foodservice, hospitality, contact centers, and consumer logistics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Row 1: Name + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input
                      required
                      type="text"
                      className={inputClass}
                      placeholder="Jane Smith"
                      onChange={set('fullName')}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Company Name *</label>
                    <input
                      required
                      type="text"
                      className={inputClass}
                      placeholder="Acme Retail LLC"
                      onChange={set('companyName')}
                    />
                  </div>
                </div>

                {/* Row 2: Industry */}
                <div>
                  <label className={labelClass}>Industry *</label>
                  <select required className={inputClass} onChange={set('industry')} defaultValue="">
                    <option value="" disabled>Select your industry</option>
                    <option value="Retail">Retail</option>
                    <option value="Foodservice">Foodservice</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Contact Centers">Contact Centers</option>
                    <option value="Consumer Logistics">Consumer Logistics</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Row 3: Employees + Revenue */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Number of Employees</label>
                    <select className={inputClass} onChange={set('employeeCount')} defaultValue="">
                      <option value="" disabled>Select range</option>
                      <option value="1-25">1–25</option>
                      <option value="26-100">26–100</option>
                      <option value="101-300">101–300</option>
                      <option value="301+">301+</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Annual Revenue</label>
                    <select className={inputClass} onChange={set('annualRevenue')} defaultValue="">
                      <option value="" disabled>Select range</option>
                      <option value="<$2M">Less than $2M</option>
                      <option value="$2M-$10M">$2M – $10M</option>
                      <option value="$10M-$30M">$10M – $30M</option>
                      <option value="$30M+">$30M+</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className={labelClass}>Subject of Inquiry</label>
                  <textarea
                    className={`${inputClass} min-h-[120px] resize-y`}
                    placeholder="Please describe your situation and what you would like to discuss..."
                    onChange={set('subject')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input
                    required
                    type="email"
                    className={inputClass}
                    placeholder="jane@yourcompany.com"
                    onChange={set('email')}
                  />
                </div>

                {submitState === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitState === 'loading'}
                  className="inline-flex items-center gap-2 bg-brand-navy text-white px-8 py-3.5 rounded font-medium hover:bg-brand-navy-deep transition-colors disabled:opacity-60 disabled:cursor-not-allowed group"
                >
                  {submitState === 'loading' ? 'Sending...' : 'Submit Inquiry'}
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <p className="text-xs text-brand-muted/60">
                  Your information is not shared with third parties. We will respond by email.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-8"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-4">Contact Information</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-brand-muted uppercase tracking-wider mb-0.5">Email</p>
                      <a
                        href="mailto:contact@strategic-human.com"
                        className="text-sm text-brand-navy hover:text-brand-teal transition-colors"
                      >
                        contact@strategic-human.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-brand-muted uppercase tracking-wider mb-0.5">Principal Office</p>
                      <p className="text-sm text-brand-navy leading-relaxed">
                        7901 4th St N STE 300<br />
                        St. Petersburg, FL 33702
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-brand-border pt-6">
                <p className="text-xs text-brand-muted leading-relaxed">
                  <strong className="text-brand-navy font-semibold">Strategic Human Systems &amp; Governance LLC</strong><br />
                  Florida Limited Liability Company<br />
                  Founded April 2026
                </p>
              </div>

              <div className="border-t border-brand-border pt-6">
                <p className="text-xs text-brand-muted mb-3">Connect</p>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-teal transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
