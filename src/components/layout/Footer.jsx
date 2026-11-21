import React from 'react';
import { PROFILE } from '../../data/portfolioData';

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`border-t py-8 mt-20 text-xs ${
        darkMode
          ? 'border-slate-800/80 text-slate-500'
          : 'border-slate-200 text-slate-500'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {PROFILE.name}. Engineered with React.js & Tailwind CSS.</p>
        <div className="flex items-center gap-6">
          <a href={`mailto:${PROFILE.email}`} className="hover:text-indigo-400 transition">
            {PROFILE.email}
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
