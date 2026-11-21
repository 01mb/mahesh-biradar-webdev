import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, darkMode, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div
        className={`rounded-3xl max-w-2xl w-full p-6 sm:p-8 border shadow-2xl relative ${
          darkMode
            ? 'bg-slate-900 border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-800/50 text-slate-400"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-indigo-500/15 text-indigo-400">
          {project.category} • {project.company}
        </span>

        <h3 className="text-2xl font-black mt-3">{project.title}</h3>
        <p className="text-sm text-slate-400 mt-2">{project.summary}</p>

        <div className="mt-6 space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-indigo-400">
            Technical Implementation & Highlights
          </h4>
          <ul className="space-y-2.5">
            {project.architecture.map((point, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-300">
          Key Outcome: {project.metrics}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 text-slate-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
