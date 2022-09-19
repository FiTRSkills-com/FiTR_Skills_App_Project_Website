import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <div class = "navbar">
            <Link to="/" class="navbar-item">Home</Link>
            <Link to="time" class="navbar-item">Time Tracking</Link>
            <Link to="four-up" class="navbar-item">FourUp Charts</Link>
            <Link to="artifact" class="navbar-item">Artifacts</Link>
            <Link to="metric" class="navbar-item">Metrics</Link>
            <Link to="/" class="navbar-item">Action Items 2.0</Link>
        </div>
    );
}
  
export { Navbar };
