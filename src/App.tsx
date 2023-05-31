import React from 'react';
import { HeroSection } from './views/HeroSection';
import { ProjectsView } from './views/ProjectsView';
import { LanguageProvider } from './context/LanguageContext';


function App() {
  return (
    <LanguageProvider>
        <HeroSection />
        <ProjectsView />
    </LanguageProvider>
  );
}

export default App;
