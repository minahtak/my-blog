import React from 'react';
import type { Section, Language } from '../types';
import { Menu, X, Globe } from 'lucide-react';

interface NavigationProps {
  current: Section;
  onChange: (section: Section) => void;
  lang: Language;
  onLangChange: (lang: Language) => void;
}

const Navigation: React.FC<NavigationProps> = ({ current, onChange, lang, onLangChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const sections: Section[] = ['Home', 'Explore', 'Builds', 'Logs', 'Me'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => onChange('Home')}
          className="text-2xl font-black tracking-tighter text-slate-900 hover:text-indigo-500 transition-colors"
        >
          TAK
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => onChange(section)}
              className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                current === section 
                  ? 'text-slate-900 border-b-2 border-slate-900' 
                  : 'text-slate-400 hover:text-slate-900'
              }`}
            >
              {section}
            </button>
          ))}
          
          <button
            onClick={() => onLangChange(lang === 'KO' ? 'EN' : 'KO')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs font-bold">{lang}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4">
          <div className="flex flex-col gap-4 px-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => {
                  onChange(section);
                  setIsOpen(false);
                }}
                className={`text-left text-sm font-bold uppercase tracking-wider ${
                  current === section ? 'text-slate-900' : 'text-slate-400'
                }`}
              >
                {section}
              </button>
            ))}
            <button
              onClick={() => onLangChange(lang === 'KO' ? 'EN' : 'KO')}
              className="text-left text-sm font-bold"
            >
              Language: {lang}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;