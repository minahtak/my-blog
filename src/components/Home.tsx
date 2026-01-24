
import React from 'react';
import { MoveUpRight, Zap, Star } from 'lucide-react';
import type { Language } from '../types.ts';
import { translations } from '../data';

const Home: React.FC<{ onExplore: () => void; lang: Language }> = ({ onExplore, lang }) => {
  const t = translations[lang].home;

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-[1600px] mx-auto py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Dynamic Pastel Blobs */}
      <div className="color-blob w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-indigo-100/40 top-[-100px] right-[-100px]" />
      <div className="color-blob w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-rose-50/50 bottom-[-50px] left-[-100px]" style={{ animationDelay: '-5s' }} />
      
      <div className="space-y-16 md:space-y-32 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-500 text-white animate-bounce">
            <Zap className="w-3.5 h-3.5 fill-white" />
          </div>
          <span className="text-[9px] md:text-[10px] font-extrabold uppercase tracking-[0.6em] text-indigo-500">Identity Builder</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="hero-title font-extrabold tracking-tighter text-slate-900 uppercase grotesk relative">
              Minah <br /> 
              <span className="text-gradient font-normal italic serif lowercase tracking-tight">Tak</span>
              <span className="text-slate-900">.</span>
              <div className="absolute -top-6 right-10 md:right-40 hidden sm:block">
                <Star className="w-10 h-10 md:w-16 md:h-16 text-amber-400 animate-spin-slow" />
              </div>
            </h1>
          </div>
          <div className="lg:col-span-4 pb-0 md:pb-4">
             <div className="space-y-4 md:space-y-6 max-w-sm border-l-4 border-rose-300 pl-6 bg-white/40 p-4 md:p-6 rounded-r-2xl backdrop-blur-sm">
                <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" /> Perspective
                </p>
                <p className="text-lg md:text-xl text-slate-600 serif italic leading-snug">
                  {t.quote}
                </p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-7">
            <p className="text-3xl md:text-6xl font-bold text-slate-800 leading-tight tracking-tight grotesk">
              {t.speed}
            </p>
          </div>
          <div className="lg:col-span-5 flex items-center lg:justify-end">
            <button 
              onClick={onExplore}
              className="pop-button w-full md:w-auto group relative flex items-center justify-center gap-8 bg-slate-900 text-white px-10 py-5 md:px-12 md:py-7 rounded-full text-base md:text-lg font-bold tracking-[0.1em] shadow-xl shadow-indigo-100"
            >
              <span className="relative z-10 uppercase">{t.cta}</span>
              <MoveUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-rose-400 to-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="mt-32 md:mt-64 border-y border-slate-100 py-8 md:py-12 -mx-10 md:-mx-20 bg-slate-50/20 backdrop-blur-sm relative z-10">
        <div className="marquee overflow-hidden">
          <div className="marquee-content">
            {['CHUTZPAH', 'BUILDER', 'STRANGER', 'JERUSALEM', 'VISIONARY', 'REBEL'].map((text, i) => (
              <span key={i} className="text-4xl md:text-8xl font-black text-slate-100 grotesk tracking-tighter opacity-50">
                {text}
              </span>
            ))}
            {['CHUTZPAH', 'BUILDER', 'STRANGER', 'JERUSALEM', 'VISIONARY', 'REBEL'].map((text, i) => (
              <span key={i + 6} className="text-4xl md:text-8xl font-black text-slate-100 grotesk tracking-tighter opacity-50">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-t border-slate-100 pt-12 md:pt-16 relative z-10">
        {[
          { label: 'Base', value: 'Korea', color: 'text-indigo-500' },
          { label: 'Mindset', value: 'Global', color: 'text-rose-500' },
          { label: 'Language', value: 'Hebrew-', color: 'text-amber-500' },
          { label: 'Status', value: 'In Motion', italic: true, color: 'text-sky-500' }
        ].map((item) => (
          <div key={item.label} className="space-y-1 md:space-y-3 group">
            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300">{item.label}</p>
            <p className={`text-lg md:text-2xl font-bold uppercase tracking-tighter transition-transform group-hover:scale-105 origin-left ${item.color} ${item.italic ? 'serif italic lowercase font-normal' : 'grotesk'}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
