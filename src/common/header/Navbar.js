import React, { useState } from 'react';
import './Navbar.css';
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
      </div>
      <div className="menu-container-ham">
      <label htmlFor="check" className="menu-toggle" onClick={toggleMenu}>
        <span className="fa fa-bars"></span>
      </label>
      <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
        {isMenuOpen && (
          <ul>
            <li><a href="/FruitPage">Fruit Menu</a></li>
            <li><a href="/veggiepage">Veggies Menu</a></li>
            <li><a href="/dessertPage">Dessert Menu</a></li>
            <li><a href="/milkteaPage">Milktea Menu</a></li>
            <li><a href="/frappepage">Frappe Menu</a></li>
          </ul>
        )}
      </div>
      </div>
      <ol className={`menuitems ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/frappepage">
            <FontAwesomeIcon icon={faShoppingCart} /> {/* Cart icon */}
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/signup">Register Now</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ol>
    </div>
  );
}

export default Navbar;
