import React, { useState } from 'react';
import './Navbar.css';
import logoImage from './logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'active' : ''}`}>
      <div className="search_box">
        <input type="search" placeholder="Search here" />
        <button type="submit" className="search-button">
          Search
        </button>
        <span className="fa fa-search"></span>
      </div>
      <div className="logo-container">
        <img src={logoImage} alt="Logo" />
      </div>
      <ol className={`menuitems ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/shopping">
            <FontAwesomeIcon icon={faShoppingCart} /> {/* Cart icon */}
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/signup">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ol>
      <label htmlFor="check" className="fa fa-bars" onClick={toggleMenu}></label>
    </div>
  );
}

export default Navbar;
