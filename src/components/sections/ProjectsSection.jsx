import React, { useState, useMemo } from 'react';
import { Layers, ArrowUpRight } from 'lucide-react';
import { PROJECTS, PROJECT_CATEGORIES } from '../../data/portfolioData';

export default function ProjectsSection({ darkMode, onSelectProject }) {
  const [selectedProjectCat, setSelectedProjectCat] = useState('All');

  const filteredProjects = useMemo(() => {
    if (selectedProjectCat === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedProjectCat);
  }, [selectedProjectCat]);

  return (
    <section id="projects" className="scroll-mt-28 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-indigo-400 mb-2">
            <Layers className="w-4 h-4" /> Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Key Projects & Applications
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedProjectCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                selectedProjectCat === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : darkMode
                  ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`rounded-3xl border p-6 flex flex-col justify-between transition group ${
              darkMode
                ? 'bg-slate-900/70 border-slate-800/90 hover:border-indigo-500/50'
                : 'bg-white border-slate-200 hover:border-indigo-400 shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-indigo-500/15 text-indigo-400 border border-indigo-500/25">
                  {project.category}
                </span>
                <span className="text-[11px] font-semibold text-slate-400">
                  {project.company}
                </span>
              </div>

              <h3 className="text-xl font-black group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>

              <p
                className={`text-xs sm:text-sm mt-2.5 leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {project.summary}
              </p>

              <div
                className={`mt-4 p-3.5 rounded-2xl border text-xs space-y-1.5 ${
                  darkMode
                    ? 'bg-slate-950/60 border-slate-800/80 text-slate-300'
                    : 'bg-slate-50 border-slate-200/70 text-slate-600'
                }`}
              >
                <div className="font-bold text-[11px] uppercase tracking-wider text-indigo-400">
                  Impact & Architecture:
                </div>
                <p className="line-clamp-2">{project.architecture[0]}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/50 space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-mono ${
                      darkMode
                        ? 'bg-slate-800 text-slate-300'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onSelectProject(project)}
                className="w-full py-2.5 px-4 rounded-xl bg-indigo-600/15 hover:bg-indigo-600 text-indigo-400 hover:text-white text-xs font-bold transition flex items-center justify-center gap-1.5"
              >
                <span>Inspect Architecture Details</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="w-full py-2.5 px-4 rounded-xl bg-indigo-600/15 hover:bg-indigo-600 text-indigo-400 hover:text-white text-xs font-bold transition flex items-center justify-center gap-1.5"
                onClick={() => window.open(project.demoLink, '_blank')}
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
