import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shortener from './components/Shortener';
import Stats from './components/Stats';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shortener />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </Router>
  );
}

export default App;
