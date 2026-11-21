import React from 'react';
import { FileText, Sun, Moon } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'overview', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar({
  darkMode,
  setDarkMode,
  activeSection,
  onNavigate,
  onOpenResume
}) {
  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-colors ${
        darkMode
          ? 'bg-slate-950/80 border-slate-800/80'
          : 'bg-white/85 border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <div
          onClick={() => onNavigate('overview')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            MB
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-base sm:text-lg tracking-tight">
                Mahesh Biradar
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                4+ Yrs Exp
              </span>
            </div>
            <p
              className={`text-[11px] font-semibold ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Front-End & Web Developer
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-2xl border border-slate-800/40 bg-slate-900/30">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSection === item.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : darkMode
                  ? 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 transition active:scale-95"
          >
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline">View Digital Resume</span>
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 rounded-xl border transition ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
            title="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
