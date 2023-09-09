import React, { useState } from 'react';
import './Navbar.css';
import logoImage from './logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<div className={`navbar ${isMenuOpen ? 'active' : ''}`}>
  <div className="search_box">
    <input type="search" placeholder="Search here" />
    <span className="fa fa-search"></span>
  </div>
  <div className="logo-container">
    <img src={logoImage} alt="Logo" />
  </div>
  <ol className={`menuitems ${isMenuOpen ? 'active' : ''}`}>
    <li><a href="/">Home</a></li>
    <li><a href="about">About</a></li>
    <li><a href="contact">Contact</a></li>
    <li><a href="signup">Signup</a></li>
    <li><a href="login">Login</a></li>
  </ol>
  <label htmlFor="check" className="fa fa-bars" onClick={toggleMenu}></label>
</div>
  );
}

export default Navbar;
