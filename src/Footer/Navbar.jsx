import React from 'react';
import './Navbar.css'; // স্টাইলিং এর জন্য CSS ফাইল যুক্ত করা হয়েছে

function Navbar() {
  return (
    <nav className="Onenavbar">
      <div className="navbar-logo">
        <a href="/">Brand Logo</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
