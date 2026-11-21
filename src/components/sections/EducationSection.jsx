import React from 'react';
import { GraduationCap } from 'lucide-react';
import { PROFILE } from '../../data/portfolioData';

export default function EducationSection({ darkMode }) {
  return (
    <section className="scroll-mt-28">
      <div
        className={`rounded-3xl border p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${
          darkMode
            ? 'bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/50 border-slate-800'
            : 'bg-white border-slate-200 shadow-sm'
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-400">
              Academic Foundation
            </span>
            <h3 className="text-xl font-black mt-0.5">
              {PROFILE.education.degree}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              {PROFILE.education.institution}
            </p>
          </div>
        </div>

        <div className="px-4 py-2 rounded-xl bg-slate-800/70 text-slate-200 text-xs font-mono font-bold">
          Class of {PROFILE.education.period}
        </div>
      </div>
    </section>
  );
}
