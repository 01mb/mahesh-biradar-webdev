import React from 'react';
import { Briefcase, Building2, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../../data/portfolioData';

export default function ExperienceSection({ darkMode }) {
  return (
    <section id="experience" className="scroll-mt-28 space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-indigo-400 mb-2">
          <Briefcase className="w-4 h-4" /> Career Trajectory
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
          Professional Experience
        </h2>
        <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          4+ years delivering mission-critical web platforms in FinTech and high-engagement AdTech.
        </p>
      </div>

      <div className="space-y-8">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className={`rounded-3xl border p-6 sm:p-8 transition relative overflow-hidden ${
              darkMode
                ? 'bg-slate-900/70 border-slate-800/90 hover:border-slate-700'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div
              className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${exp.badgeColor}`}
            />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800/50">
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r ${exp.badgeColor} text-white`}
                  >
                    {exp.role}
                  </span>
                  <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full">
                    {exp.domain}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black mt-3 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>{exp.company}</span>
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-2 text-xs font-bold text-slate-400 shrink-0">
                <span className="flex items-center gap-1.5 text-slate-300 bg-slate-800/70 px-3 py-1.5 rounded-xl">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1 px-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  {exp.location}
                </span>
              </div>
            </div>

            <ul className="mt-6 space-y-3.5">
              {exp.highlights.map((bullet, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-3 text-sm leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-indigo-500/15 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                    ✓
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-slate-800/40 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">
                Environment & Stack:
              </span>
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold ${
                    darkMode
                      ? 'bg-slate-950 text-slate-300 border border-slate-800'
                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
