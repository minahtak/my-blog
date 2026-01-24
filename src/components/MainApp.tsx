import React, { useState } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Logs from './Logs';
import Me from './Me';
import Builds from './Builds';
import Explore from './Explore';
import type { Section, Language } from '../types';

const MainApp = () => {
  const [currentSection, setCurrentSection] = useState<Section>('Home');
  const [lang, setLang] = useState<Language>('KO');

  const renderContent = () => {
    switch (currentSection) {
      case 'Home': return <Home lang={lang} onExplore={() => setCurrentSection('Explore')} />;
      case 'Explore': return <Explore lang={lang} />;
      case 'Builds': return <Builds lang={lang} />;
      case 'Logs': return <Logs lang={lang} />;
      case 'Me': return <Me lang={lang} />;
      default: return <Home lang={lang} onExplore={() => setCurrentSection('Explore')} />;
    }
  };

  return (
    <>
      <Navigation 
        current={currentSection} 
        onChange={setCurrentSection} 
        lang={lang} 
        onLangChange={setLang} 
      />
      <main>
        {renderContent()}
      </main>
    </>
  );
};

export default MainApp;