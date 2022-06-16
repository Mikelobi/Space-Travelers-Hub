import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mission from './components/Pages/Mission';
import Profile from './components/Pages/Profile';
import Rocket from './components/Pages/Rocket';
import './App.css';
import Header from './components/Layout/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
