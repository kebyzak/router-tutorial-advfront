import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/about" element={<AboutPage/>} />
        <Route exact path="/contact" element={<ContactPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
