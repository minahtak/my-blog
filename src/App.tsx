import React, { useState } from 'react';
import type { Section, Language } from './types';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Explore from './components/Explore';
import Builds from './components/Builds';
import Logs from './components/Logs';
import Me from './components/Me';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>('Home');
  const [lang, setLang] = useState<Language>('KO');

  const renderContent = () => {
    switch (currentSection) {
      case 'Home': 
        return <Home onExplore={() => setCurrentSection('Explore')} lang={lang} />;
      case 'Explore': 
        return <Explore lang={lang} />;
      case 'Builds': 
        return <Builds lang={lang} />;
      case 'Logs': 
        return <Logs lang={lang} />;
      case 'Me': 
        return <Me lang={lang} />;
      default: 
        return <Home onExplore={() => setCurrentSection('Explore')} lang={lang} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        current={currentSection} 
        onChange={setCurrentSection} 
        lang={lang} 
        onLangChange={setLang} 
      />
      
      <main className="animate-in fade-in duration-700">
        {renderContent()}
      </main>

      <footer className="py-24 border-t border-slate-100 mt-24 bg-white relative z-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-lg font-black tracking-tighter text-slate-400">MINAHTAK</p>
            <p className="text-xs text-slate-300 serif italic">Designed by Minah Tak © 2026</p>
          </div>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
            <a href="https://www.youtube.com/@maddang_x" className="hover:text-slate-500 transition-colors">YouTube</a>
            <a href="https://instagram.com" className="hover:text-slate-500 transition-colors">Instagram</a>
            <a href="https://github.com/minahtak" className="hover:text-slate-500 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;