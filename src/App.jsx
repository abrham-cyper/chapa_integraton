import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componetse/Navbar';
import About from './pages/About';
import Donate from './pages/Donate';
import Tnx from './pages/Tnx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/tnx" element={<Tnx />} />
      </Routes>
    </Router>
  );
}

export default App;
