import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Dogs from './pages/Dogs';
import Cats from './pages/Cats';
import Birds from './pages/Birds';
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/birds" element={<Birds />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
