import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Time } from './components/Time';
import { Metric } from './components/Metric';
import { FourUp } from './components/FourUp';
import { Artifacts } from './components/Artifacts';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div class='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/time" element={<Time />} />
          <Route path="/four-up" element={<FourUp />} />
          <Route path="/metric" element={<Metric />} />
          <Route path="/artifact" element={<Artifacts />} />
          <Route path="/FiTR_Skills_App_Project_Website" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
