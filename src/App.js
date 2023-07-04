import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Items from './Components/Items';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<Items />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
