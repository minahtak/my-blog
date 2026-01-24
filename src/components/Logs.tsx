import React, { useState, useMemo } from 'react';
import { MapPin, ArrowLeft } from 'lucide-react';
import { getLogEntries, translations } from '../data';
import type { LogCategory, LogEntry, Language } from '../types';

const Logs: React.FC<{ lang: Language }> = ({ lang }) => {
  const logEntries = useMemo(() => getLogEntries(), []);
  const [filter, setFilter] = useState<LogCategory | 'All'>('All');
  const [selectedLog, setSelectedLog] = useState<LogEntry | null>(null);
  const t = translations[lang].logs;

  const filteredLogs = filter === 'All'
    ? logEntries
    : logEntries.filter(log => log.category === filter);

  const categories = [
    { id: 'All', label: 'All' },
    { id: 'Diary', label: 'Diary' },
    { id: 'Food', label: 'Cooking' },
    { id: 'Travel', label: 'Travel' },
    { id: 'Thoughts', label: 'Thoughts' },
  ];

  if (selectedLog) {
    return (
      <div className="min-h-screen pt-48 pb-32 px-10 max-w-4xl mx-auto animate-in fade-in duration-1000">
        <button onClick={() => setSelectedLog(null)} className="flex items-center gap-4 mb-20 text-slate-400 hover:text-black font-semibold text-[9px] uppercase tracking-[0.4em] transition-all group">
          <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" /> {t.back}
        </button>
        <article className="space-y-20">
          <header className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-slate-400">
                {selectedLog.category}
              </span>
              <div className="h-[1px] flex-1 bg-slate-100" />
            </div>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-tight text-slate-900 grotesk">{selectedLog.title[lang]}</h2>
            <div className="flex items-center gap-10 text-[9px] text-slate-400 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><MapPin className="w-3 h-3" /> {selectedLog.location}</span>
              <span>{selectedLog.date}</span>
            </div>
          </header>
          {/* <div className="w-full grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"> */}
          <div className="w-full max-w-3xl mx-auto grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">

            <img src={selectedLog.image} alt={selectedLog.title[lang]} className="w-full h-auto" />
          </div>

          {/* --- [수정 구간] 글 내용 가독성 및 정렬 최적화 --- */}
          <div className="max-w-2xl mx-auto"> {/* 박스는 중앙 배치 */}
            <div className="whitespace-pre-wrap text-[17px] md:text-[18px] leading-[2.1] text-slate-600 font-normal text-left"
              style={{
                fontFamily: "'Nanum Myeongjo', serif",
                wordBreak: 'keep-all',
                letterSpacing: '-0.01em'
              }}>
              {selectedLog.longContent ? selectedLog.longContent[lang] : selectedLog.content[lang]}
            </div>
          </div>
          {/* -------------------------------------------- */}

        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-48 pb-32 px-10 max-w-7xl mx-auto">
      <div className="mb-32 space-y-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-slate-300">Archive of Thought</p>
        <h2 className="text-7xl font-light tracking-tighter uppercase text-slate-900 grotesk">Log<span className="serif italic text-slate-400">.</span></h2>
        <p className="text-xl text-slate-400 serif italic max-w-xl leading-relaxed">{t.desc}</p>
      </div>

      <div className="flex flex-wrap gap-1 mb-20">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id as any)}
            className={`px-6 py-2 text-[9px] font-bold uppercase tracking-[0.2em] transition-all border-b-2 ${filter === cat.id
                ? 'border-black text-black'
                : 'border-transparent text-slate-300 hover:text-slate-900'
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {filteredLogs.map((post) => (
          <article
            key={post.id}
            onClick={() => setSelectedLog(post)}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/5] overflow-hidden mb-8 bg-slate-100 grayscale group-hover:grayscale-0 transition-all duration-700">
              <img src={post.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="space-y-4">
              <p className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.3em]">{post.category}</p>
              <h3 className="text-2xl font-medium leading-tight text-slate-800 group-hover:text-black transition-colors grotesk">{post.title[lang]}</h3>

              {/* 목록 페이지의 짧은 내용도 가독성 패치 */}
              <p className="text-base text-slate-400 line-clamp-2 leading-relaxed text-left"
                style={{ fontFamily: "'Nanum Myeongjo', serif", wordBreak: 'keep-all' }}>
                {post.content[lang]}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Logs;