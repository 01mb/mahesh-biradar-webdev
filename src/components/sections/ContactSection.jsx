import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Copy, ExternalLink, Send } from 'lucide-react';
import { PROFILE } from '../../data/portfolioData';

export default function ContactSection({ darkMode, onCopy, onToast }) {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    onToast(`Thank you, ${contactForm.name}! Mahesh will get back to you soon.`);
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="scroll-mt-28">
      <div className="grid justify-center">
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-indigo-400 mb-2">
              <Mail className="w-4 h-4" /> Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Let's Build Something Exceptional
            </h2>
            <p
              className={`text-sm mt-2 leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Looking for a Front-End or Web Developer experienced in React.js, FinTech dashboards, WordPress WooCommerce payment plugins, or interactive web applications? Reach out directly.
            </p>
          </div>

          <div className="space-y-3.5">
            <div
              onClick={() => onCopy(PROFILE.email, 'Email')}
              className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800 hover:border-indigo-500/50'
                  : 'bg-white border-slate-200 hover:border-indigo-400'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase text-slate-400">
                    Direct Email
                  </p>
                  <p className="text-sm font-bold">{PROFILE.email}</p>
                </div>
              </div>
              <Copy className="w-4 h-4 text-slate-400" />
            </div>

            <div
              onClick={() => onCopy(PROFILE.phone, 'Phone')}
              className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800 hover:border-indigo-500/50'
                  : 'bg-white border-slate-200 hover:border-indigo-400'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase text-slate-400">
                    Phone / WhatsApp
                  </p>
                  <p className="text-sm font-bold">{PROFILE.phone}</p>
                </div>
              </div>
              <Copy className="w-4 h-4 text-slate-400" />
            </div>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`p-4 rounded-2xl border flex items-center justify-between transition ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800 hover:border-indigo-500/50'
                  : 'bg-white border-slate-200 hover:border-indigo-400'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-sky-500/15 text-sky-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase text-slate-400">
                    LinkedIn Profile
                  </p>
                  <p className="text-sm font-bold">
                    linkedin.com/in/mahesh-biradar-482a051b7
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
