
import React, { useEffect, useState } from 'react';
import { interestCells, experiences, translations } from '../data';
import type { Language } from '../types';
import { Heart, Zap, Camera, Briefcase, Sparkles } from 'lucide-react';

const Me: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].me;
  const [bubbleRadius, setBubbleRadius] = useState(240);

  useEffect(() => {
    const handleResize = () => {
      setBubbleRadius(window.innerWidth < 768 ? 140 : 240);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bubbleColors = [
    'bg-indigo-100/60 text-indigo-600 border-indigo-200',
    'bg-rose-100/60 text-rose-600 border-rose-200',
    'bg-amber-100/60 text-amber-600 border-amber-200',
    'bg-sky-100/60 text-sky-600 border-sky-200'
  ];

  return (
    <div className="min-h-screen pt-32 md:pt-48 pb-32 px-6 md:px-10 max-w-7xl mx-auto space-y-32 md:space-y-72 relative">
      

      {/* Identity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center relative z-10">
        <div className="space-y-12 md:space-y-16 animate-in fade-in slide-in-from-left-12 duration-1000">
          <header className="space-y-4 md:space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Sparkles className="w-5 h-5 text-indigo-400 animate-pulse" />
              <p className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.5em] text-indigo-400">Self Discovery</p>
            </div>
            <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.7] text-slate-900 grotesk">
              ME<span className="text-gradient serif italic font-normal lowercase tracking-normal">.</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 gap-6 md:gap-12">
            <div className="glass-card p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] transition-all hover:scale-[1.02] shadow-xl shadow-indigo-100/30 group">
              <div className="flex items-center gap-4 mb-6 md:mb-8 text-indigo-500">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-indigo-50 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 fill-indigo-200" />
                </div>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Core Narrative</p>
              </div>
              <p className="text-2xl md:text-4xl font-bold text-slate-700 leading-tight tracking-tight grotesk">
                {t.selfDefined}
              </p>
            </div>
            <div className="glass-card p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] transition-all hover:scale-[1.02] shadow-xl shadow-rose-100/30 group">
              <div className="flex items-center gap-4 mb-6 md:mb-8 text-rose-500">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-rose-50 flex items-center justify-center group-hover:-rotate-12 transition-transform">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 fill-rose-200" />
                </div>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Philosophy</p>
              </div>
              <p className="text-2xl md:text-4xl font-bold text-slate-700 leading-tight tracking-tight italic serif">
                {t.motto}
              </p>
            </div>
          </div>
        </div>

        {/* Spectrum Bubbles */}
        <div className="relative flex items-center justify-center h-[400px] md:h-[600px]">
          <div className="w-full aspect-square max-w-[300px] md:max-w-2xl glass-card rounded-full relative flex items-center justify-center animate-in zoom-in-95 duration-1000 shadow-2xl shadow-indigo-100/10">
            <div className="text-center opacity-30 select-none">
              <div className="text-6xl md:text-9xl font-black text-indigo-100 grotesk tracking-tighter">א</div>
              <p className="text-sm md:text-2xl font-bold uppercase tracking-[0.4em] text-slate-400">Spectrum</p>
            </div>

            {interestCells.map((cell, idx) => {
              const angle = (idx / interestCells.length) * Math.PI * 2;
              const scaleFactor = window.innerWidth < 768 ? 0.6 : 1;
              const size = cell.size * scaleFactor;
              return (
                <div
                  key={cell.name.EN}
                  className={`absolute rounded-full border-2 backdrop-blur-3xl flex flex-col items-center justify-center shadow-xl transition-all duration-700 hover:scale-110 cursor-default group ${bubbleColors[idx % bubbleColors.length]}`}
                  style={{
                    width: size + 'px',
                    height: size + 'px',
                    left: `calc(50% + ${Math.cos(angle) * bubbleRadius}px - ${size / 2}px)`,
                    top: `calc(50% + ${Math.sin(angle) * bubbleRadius}px - ${size / 2}px)`,
                    animation: `blob-dance ${15 + idx}s ease-in-out infinite alternate`
                  }}
                >
                  <span className="text-[10px] md:text-[12px] font-extrabold text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest grotesk">
                    {cell.name[lang]}
                  </span>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-current group-hover:opacity-0 transition-opacity absolute shadow-inner" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Trajectory Timeline */}
      <div className="max-w-5xl mx-auto space-y-20 md:space-y-32 relative z-10">
        <div className="text-center space-y-4 md:space-y-6">
          <p className="text-[10px] md:text-[12px] font-extrabold uppercase tracking-[0.5em] text-rose-500">Journey</p>
          <h2 className="text-5xl md:text-9xl font-black tracking-tighter uppercase leading-none text-slate-900 grotesk">
            Chronicle<span className="text-gradient">.</span>
          </h2>
          <p className="text-xl md:text-3xl text-slate-400 serif italic max-w-2xl mx-auto">{t.traces}</p>
        </div>

        <div className="relative space-y-12 md:space-y-24">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-200 via-rose-200 to-amber-200 -translate-x-1/2 hidden md:block rounded-full" />

          {experiences.map((exp, idx) => (
            <div key={exp.id} className={`flex flex-col md:flex-row gap-8 md:gap-20 items-start relative ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`absolute left-0 md:left-1/2 w-6 h-6 rounded-full -translate-x-1/2 z-10 hidden md:block mt-12 border-4 border-white shadow-xl ${idx % 3 === 0 ? 'bg-indigo-500' : idx % 3 === 1 ? 'bg-rose-500' : 'bg-amber-500'
                }`} />

              <div className="flex-1 w-full space-y-6 md:space-y-8 glass-card p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] hover:shadow-2xl transition-all duration-500 group">
                <div className="flex flex-col md:flex-row md:justify-between items-start border-b border-slate-50 pb-6 md:pb-8 gap-4">
                  <div className="space-y-2">
                    <p className={`text-[10px] font-bold uppercase tracking-widest ${idx % 3 === 0 ? 'text-indigo-500' : idx % 3 === 1 ? 'text-rose-500' : 'text-amber-500'
                      }`}>{exp.period}</p>
                    <h4 className="text-2xl md:text-4xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tighter grotesk">{exp.title[lang]}</h4>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-slate-300" />
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        {exp.company[lang]} {exp.location && `• ${exp.location[lang]}`}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-lg md:text-2xl text-slate-500 leading-relaxed italic serif opacity-90">
                  {exp.description[lang]}
                </p>
              </div>
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Me;
