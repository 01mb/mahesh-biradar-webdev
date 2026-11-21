import React from 'react';
import {
  Mail,
  Phone,
  Briefcase,
  Copy,
  Check,
  ChevronRight,
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { PROFILE } from '../../data/portfolioData';

export default function HeroSection({
  darkMode,
  copiedField,
  onCopy,
  onNavigate
}) {
  return (
    <section id="overview" className="scroll-mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/25">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Available for Front-End & Web Engineering Roles</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
            Engineering Scalable{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
              FinTech & AdTech
            </span>{' '}
            Web Experiences.
          </h1>

          <p
            className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Hi, I'm <strong className={darkMode ? 'text-white' : 'text-slate-900'}>{PROFILE.name}</strong> — a Mumbai-based Front-End & Web Developer with{' '}
            <span className="text-indigo-400 font-bold">4+ years of experience</span> building high-performance React.js interfaces, interactive GSAP rich-media solutions, and seamless payment gateway integrations for WordPress WooCommerce platforms.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={() => onCopy(PROFILE.email, 'Email')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 hover:border-indigo-500/50 text-slate-300'
                  : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-700 shadow-2xs'
              }`}
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>{PROFILE.email}</span>
              {copiedField === 'Email' ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3 h-3 opacity-50" />
              )}
            </button>

            <button
              onClick={() => onCopy(PROFILE.phone, 'Phone')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 hover:border-indigo-500/50 text-slate-300'
                  : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-700 shadow-2xs'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{PROFILE.phone}</span>
              {copiedField === 'Phone' ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3 h-3 opacity-50" />
              )}
            </button>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 hover:border-indigo-500/50 text-slate-300'
                  : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-700 shadow-2xs'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-sky-400" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('projects')}
              className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 flex items-center gap-2 transition active:scale-95"
            >
              <span>Explore Featured Work</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('experience')}
              className={`px-6 py-3.5 rounded-2xl font-bold text-sm border transition ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-200'
                  : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-800'
              }`}
            >
              View Career Timeline
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div
            className={`rounded-3xl border p-6 sm:p-8 relative overflow-hidden ${
              darkMode
                ? 'bg-slate-900/70 border-slate-800/90 shadow-2xl'
                : 'bg-white border-slate-200 shadow-xl'
            }`}
          >
            <div className="flex items-center justify-between pb-5 border-b border-slate-800/60">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[11px] font-mono text-indigo-400 flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Mumbai, IN
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 my-6">
              <div
                className={`p-4 rounded-2xl border ${
                  darkMode
                    ? 'bg-slate-950/70 border-slate-800/80'
                    : 'bg-slate-50 border-slate-200/80'
                }`}
              >
                <ShieldCheck className="w-5 h-5 text-indigo-400 mb-2" />
                <div className="text-2xl font-black">{PROFILE.experienceYears}</div>
                <div className="text-xs text-slate-400 font-medium">
                  Production Web Dev
                </div>
              </div>

              <div
                className={`p-4 rounded-2xl border ${
                  darkMode
                    ? 'bg-slate-950/70 border-slate-800/80'
                    : 'bg-slate-50 border-slate-200/80'
                }`}
              >
                <Zap className="w-5 h-5 text-emerald-400 mb-2" />
                <div className="text-2xl font-black">FinTech & AdTech</div>
                <div className="text-xs text-slate-400 font-medium">
                  Domain Specialization
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                Engineered Campaigns & Solutions For:
              </p>
              <div className="flex flex-wrap gap-2">
                {PROFILE.brandsWorkedWith.map((brand) => (
                  <span
                    key={brand}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-200'
                        : 'bg-slate-100 border-slate-200 text-slate-800'
                    }`}
                  >
                    ✦ {brand}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`mt-6 pt-5 border-t flex items-center justify-between text-xs ${
                darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
              }`}
            >
              <span>Primary Stack:</span>
              <span className="font-mono font-bold text-indigo-400">
                React • ES6+ • WordPress • WooCommerce • PHP
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
