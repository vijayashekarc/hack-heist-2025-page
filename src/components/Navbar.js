// src/components/Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'; // Make sure you have a logo.png in src/assets

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* --- START OF CHANGES --- */}
      <div className="navbar-logo">
        <a href="#home">
          <img src={logo} alt="Hack Heist Logo" />
        </a>
        {/* ADD YOUR TEXT IN THE P TAG BELOW */}
        <p className="logo-subtitle">GFG KARE</p>
      </div>
      {/* --- END OF CHANGES --- */}
      
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;