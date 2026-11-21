import React, { useState, useMemo } from 'react';
import { Cpu } from 'lucide-react';
import { SKILLS, SKILL_CATEGORIES } from '../../data/portfolioData';

export default function SkillsSection({ darkMode }) {
  const [selectedSkillCat, setSelectedSkillCat] = useState('All');

  const filteredSkills = useMemo(() => {
    if (selectedSkillCat === 'All') return SKILLS;
    return SKILLS.filter((s) => s.category === selectedSkillCat);
  }, [selectedSkillCat]);

  return (
    <section id="skills" className="scroll-mt-28 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-indigo-400 mb-2">
            <Cpu className="w-4 h-4" /> Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Skills & Engineering Stack
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {SKILL_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedSkillCat(category)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                selectedSkillCat === category
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : darkMode
                  ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className={`p-5 rounded-2xl border transition group ${
              darkMode
                ? 'bg-slate-900/60 border-slate-800/90 hover:border-indigo-500/50'
                : 'bg-white border-slate-200/90 hover:border-indigo-400 shadow-2xs'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <span className="font-bold text-sm sm:text-base">{skill.name}</span>
                {skill.highlight && (
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-indigo-500/15 text-indigo-400 border border-indigo-500/20">
                    Core
                  </span>
                )}
              </div>
              <span className="text-xs font-mono font-bold text-slate-400">
                {skill.level}%
              </span>
            </div>

            <div
              className={`w-full h-2 rounded-full overflow-hidden ${
                darkMode ? 'bg-slate-800' : 'bg-slate-100'
              }`}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>

            <div className="mt-2.5 flex justify-between items-center text-[11px] text-slate-400">
              <span>{skill.category}</span>
              <span>Production Ready</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
