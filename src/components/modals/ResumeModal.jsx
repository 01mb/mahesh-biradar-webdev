import React from 'react';
import { X } from 'lucide-react';
import { PROFILE, EXPERIENCES } from '../../data/portfolioData';

export default function ResumeModal({ isOpen, darkMode, onCopy, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div
        className={`rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 border shadow-2xl relative ${
          darkMode
            ? 'bg-slate-900 border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between pb-4 mb-6 border-b border-slate-800 bg-inherit">
          <div>
            <h3 className="text-xl font-black">{PROFILE.name} — Curriculum Vitae</h3>
            <p className="text-xs text-slate-400">
              {PROFILE.title} • {PROFILE.location}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onCopy(PROFILE.email, 'Email')}
              className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold"
            >
              Copy Email
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-slate-800 text-slate-400"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="space-y-6 text-xs sm:text-sm">
          <div>
            <h4 className="font-extrabold uppercase tracking-wider text-indigo-400 mb-1">
              Professional Summary
            </h4>
            <p className="leading-relaxed text-slate-300">{PROFILE.summary}</p>
          </div>

          <div>
            <h4 className="font-extrabold uppercase tracking-wider text-indigo-400 mb-2">
              Experience
            </h4>
            <div className="space-y-4">
              {EXPERIENCES.map((e) => (
                <div key={e.id} className="p-4 rounded-2xl bg-slate-950/50 border border-slate-800">
                  <div className="flex justify-between font-bold">
                    <span>
                      {e.role} — {e.company}
                    </span>
                    <span className="text-indigo-400">{e.period}</span>
                  </div>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-slate-300 text-xs">
                    {e.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-extrabold uppercase tracking-wider text-indigo-400 mb-1">
              Education
            </h4>
            <p className="font-bold">
              {PROFILE.education.degree} — {PROFILE.education.institution} ({PROFILE.education.period})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
