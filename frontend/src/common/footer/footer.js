// src/common/footer/Footer.js
import React from 'react';
import './footer.css';
import logoImage from './logo.png';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-container">
              <img src={logoImage} alt="Logo" />
            </div>
            <h2-footer style={{ color: 'white', fontSize: '25px', fontFamily: 'Lucida Sans, "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif' }}>Country & Region | Philippines</h2-footer>
          </div>
          <div className="footer-links">
              <ul>
                <li><a href="/">Flash Deals</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/signup">Signup</a></li>
                <li>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-envelope"></i> Contact Us
                  </a>
                </li>
              </ul>
            </div>
          <div className="footer-social">
          <h3 style={{ color: 'white', fontSize: '30px' }}>Follow Us</h3>
            <ul>
              <li><a href="https://www.facebook.com/itssyourDOS">Facebook</a></li>
              <li><a href="https://www.tiktok.com/@louizyyy">Tiktok</a></li>
              <li><a href="https://www.instagram.com/itzyudos/">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Refreshing Desires. Juicy Thirst. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
