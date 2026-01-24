
import React, { useState } from 'react';
import { thoughts, translations } from '../data';
import type { Language } from '../types';
import { Plus, Hash, Palette, Waves } from 'lucide-react';

const Explore: React.FC<{ lang: Language }> = ({ lang }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const t = translations[lang].logs; 

  const images = [
    { src: 'https://i.pinimg.com/1200x/7d/8e/1f/7d8e1f521e7b6a45561ec193ef89aab9.jpg', aspect: 'aspect-[3/4]', label: 'Style' },
    { src: 'https://i.pinimg.com/736x/71/cc/8a/71cc8a96e9580aab98e48ad8fbfe4f09.jpg', aspect: 'aspect-[4/5]', label: 'Vibe' },
    { src: 'https://i.pinimg.com/1200x/d2/9f/7a/d29f7ad7ae0f964cd4bfd2906c505a78.jpg', aspect: 'aspect-[3/2]', label: 'Mood' },
    { src: 'https://i.pinimg.com/736x/f0/78/00/f07800863189aa22bbb63478e594b908.jpg', aspect: 'aspect-[2/3]', label: 'Mood' },
    { src: 'https://i.pinimg.com/736x/a5/45/fa/a545fa3f947a9ea551dccb39e50ca4fb.jpg', aspect: 'aspect-[1/1]', label: 'LIFE' },
    { src: 'https://i.pinimg.com/1200x/de/b3/7a/deb37a1667aa55c3b9d0265f583c1b98.jpg', aspect: 'aspect-[4/3]', label: '♥' },
  ];

  const categoryColors: Record<string, string> = {
    'Observation': 'text-indigo-400 bg-indigo-50/50',
    'Philosophy': 'text-rose-300 bg-rose-50/50',
    'Currently into': 'text-amber-300 bg-amber-50/50',
  };

  return (
    <div className="min-h-screen pt-48 pb-32 px-10">
      <div className="max-w-6xl mx-auto mb-32 text-center space-y-6">
        <h2 className="text-7xl md:text-8xl font-bold tracking-tighter uppercase text-slate-800">Explore<span className="text-indigo-400">.</span></h2>
        <p className="text-2xl text-slate-400 serif italic max-w-2xl mx-auto leading-relaxed">
          {lang === 'KO' ? "추구미 탐구하기" : "“How I think, what I notice, and what I’m drawn to.”"}
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {thoughts.map((thought) => (
          <div
            key={thought.id}
            className="pinterest-card group bg-white p-10 rounded-[2.5rem] border border-slate-50 shadow-[0_10px_40px_rgba(0,0,0,0.02)] cursor-pointer hover:shadow-2xl hover:shadow-indigo-100/10 transition-all duration-500"
            onClick={() => setSelected(selected === thought.id ? null : thought.id)}
          >
            <div className="flex justify-between items-center mb-8">
              <div className="text-[10px] font-mono text-slate-200 flex items-center gap-2">
                <Hash className="w-3 h-3" /> {thought.id}
              </div>
              <Plus className={`w-4 h-4 text-slate-200 transition-transform duration-500 ${selected === thought.id ? 'rotate-45 text-indigo-300' : ''}`} />
            </div>
            <div className="space-y-6">
              <span className={`px-4 py-1 rounded-full text-[9px] font-semibold uppercase tracking-widest ${categoryColors[thought.category] || 'bg-slate-50 text-slate-300'}`}>
                {thought.category}
              </span>
              <h4 className="text-2xl font-bold leading-tight text-slate-700 tracking-tight">{thought.content[lang]}</h4>
              <div className={`overflow-hidden transition-all duration-700 ${selected === thought.id ? 'max-h-40 opacity-100 pt-6 border-t border-slate-50' : 'max-h-0 opacity-0'}`}>
                <p className="text-base text-slate-400 serif italic leading-relaxed">{thought.detail?.[lang]}</p>
              </div>
            </div>
          </div>
        ))}

        {images.map((img, i) => (
          <div key={i} className={`pinterest-card group relative overflow-hidden rounded-[2.5rem] bg-slate-50 border border-white transition-all duration-1000 hover:shadow-2xl hover:shadow-rose-100/20 ${img.aspect}`}>
            <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
               <span className="text-white text-[10px] font-semibold uppercase tracking-[0.3em] drop-shadow-md">{img.label}</span>
            </div>
          </div>
        ))}

        <div className="pinterest-card bg-gradient-to-br from-indigo-50 to-rose-50 p-12 rounded-[2.5rem] flex flex-col justify-center items-center text-center space-y-6 border border-white">
           <Palette className="w-8 h-8 text-indigo-200 animate-spin-slow" style={{ animationDuration: '10s' }} />
           <p className="text-[9px] font-semibold uppercase tracking-[0.5em] text-slate-300">Spectrum</p>
           <h3 className="text-xl font-medium text-slate-500 serif italic">Every color represents a layer of my identity.</h3>
        </div>
      </div>
    </div>
  );
};

export default Explore;
