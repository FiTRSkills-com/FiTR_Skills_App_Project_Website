import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <div class = "navbar">
            <Link to="/" class="navbar-item"> Home </Link>
            <Link to="/" class="navbar-item">PlaceHolder</Link>
            <Link to="/" class="navbar-item">PlaceHolder</Link>
            <Link to="/" class="navbar-item">PlaceHolder</Link>
            <Link to="/" class="navbar-item">PlaceHolder</Link>
            <Link to="/" class="navbar-item">PlaceHolder</Link>
        </div>
    );
}
  
export { Navbar };
