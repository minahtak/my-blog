
import React from 'react';
import { webProjects, translations } from '../data';
import type { Language } from '../types';
import { ExternalLink, ArrowUpRight, Code, Video } from 'lucide-react';

const Builds: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].builds;
  const webWorks = webProjects.filter(p => p.type === 'Web');
  const socialWorks = webProjects.filter(p => p.type === 'Social');

  return (
    <div className="min-h-screen pt-48 pb-32 px-10 max-w-7xl mx-auto">
      <div className="mb-24 space-y-6 max-w-4xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.5em] text-indigo-400">Selected Works</p>
        <h2 className="text-7xl font-bold tracking-tighter uppercase leading-none text-slate-800">Builds<span className="serif italic font-normal text-slate-200 lowercase tracking-normal">.</span></h2>
        <p className="text-2xl text-slate-400 serif italic leading-relaxed">{t.desc}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <section className="space-y-16">
          <div className="flex items-center gap-4 text-slate-300 pb-4 border-b border-slate-100">
            <Code className="w-4 h-4" />
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.4em]">Systems Architecture</h3>
          </div>
          <div className="space-y-20">
            {webWorks.map(project => (
              <div key={project.id} className="group">
                <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 bg-slate-50 border border-white shadow-xl shadow-indigo-100/10 transition-all duration-1000 group-hover:shadow-indigo-100/30">
                  <img src={project.image} alt={project.title[lang]} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />
                </div>
                <div className="px-2 flex justify-between items-start">
                  <div className="space-y-4">
                    <h4 className="text-3xl font-bold text-slate-800 tracking-tight">{project.title[lang]}</h4>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-sm serif italic">{project.description[lang]}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-[9px] font-semibold uppercase tracking-widest px-4 py-1.5 bg-slate-50 text-slate-400 rounded-full border border-slate-100">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a href={project.link} className="p-4 bg-white rounded-full border border-slate-100 hover:bg-slate-50 transition-all hover:scale-110 shadow-sm">
                    <ArrowUpRight className="w-5 h-5 text-slate-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-16">
          <div className="flex items-center gap-4 text-slate-300 pb-4 border-b border-slate-100">
            <Video className="w-4 h-4" />
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.4em]">Visual Narrative</h3>
          </div>
          <div className="space-y-20">
            {socialWorks.map(project => (
              <div key={project.id} className="group">
                <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 bg-slate-50 border border-white shadow-xl shadow-rose-100/10 transition-all duration-1000 group-hover:shadow-rose-100/30">
                  <img src={project.image} alt={project.title[lang]} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />
                </div>
                <div className="px-2 flex justify-between items-start">
                  <div className="space-y-4">
                    <h4 className="text-3xl font-bold text-slate-800 tracking-tight">{project.title[lang]}</h4>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-sm serif italic">{project.description[lang]}</p>
                  </div>
                  <a href={project.link} className="p-4 bg-white rounded-full border border-slate-100 hover:bg-slate-50 transition-all hover:scale-110 shadow-sm">
                    <ExternalLink className="w-5 h-5 text-slate-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Builds;
