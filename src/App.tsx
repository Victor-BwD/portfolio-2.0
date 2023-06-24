import React from 'react';

import { LanguageProvider } from './context/LanguageContext';

import { Home } from './views/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <LanguageProvider>
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
