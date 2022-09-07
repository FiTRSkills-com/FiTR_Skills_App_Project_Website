import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Time } from './components/Time';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/time" element={<Time />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
