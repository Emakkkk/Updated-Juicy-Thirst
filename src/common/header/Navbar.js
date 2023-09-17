import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Add a click event listener to the document
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className={`navbar ${isMenuOpen ? 'active' : ''}`}>
      <div className="menu-container-ham">
        <label htmlFor="check" className="menu-toggle" onClick={toggleMenu}>
          <span className="fa fa-bars"></span>
        </label>
        <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
          {isMenuOpen && (
            <ul>
              <li><a href="/FruitPage" onClick={closeMenu}>Fruit Menu</a></li>
              <li><a href="/veggiepage" onClick={closeMenu}>Veggies Menu</a></li>
              <li><a href="/dessertPage" onClick={closeMenu}>Dessert Menu</a></li>
              <li><a href="/milkteaPage" onClick={closeMenu}>Milktea Menu</a></li>
              <li><a href="/frappepage" onClick={closeMenu}>Frappe Menu</a></li>
            </ul>
          )}
        </div>
      </div>
      <ol className={`menuitems ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/frappepage" onClick={closeMenu}>
            <FontAwesomeIcon icon={faShoppingCart} /> {/* Cart icon */}
          </Link>
        </li>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
        </li>
        <li>
          <Link to="/signup" onClick={closeMenu}>Register Now</Link>
        </li>
        <li>
          <Link to="/login" onClick={closeMenu}>Login</Link>
        </li>
      </ol>
    </div>
  );
}

export default Navbar;
