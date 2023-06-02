import React from 'react';
import { HeroSection } from './views/HeroSection';
import { ProjectsView } from './views/ProjectsView';
import { LanguageProvider } from './context/LanguageContext';
import { AboutView } from './views/AboutView';


function App() {
  return (
    <LanguageProvider>
        <HeroSection />
        <ProjectsView />
        <AboutView />
    </LanguageProvider>
  );
}

export default App;
