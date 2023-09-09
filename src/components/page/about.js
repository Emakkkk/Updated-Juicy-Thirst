// src/components/page/About.js
import React from 'react';
import './about.css'; // Import the CSS file

function About() {
  return (
    <div className="about-container"> {/* Apply styles to the main container */}
      <h2 className="about-heading">About Us</h2> {/* Apply styles to the heading */}
      <p className="about-content">
        Welcome to our About Us page! We are a passionate team dedicated to
        delivering high-quality products and services to our customers.
      </p>
      <p className="about-content">
        Our mission is to make a positive impact in the world through our
        innovative solutions and commitment to excellence.
      </p>
      <h3 className="about-heading">Our Team</h3> {/* Apply styles to the subheading */}
      <ul className="about-content">
        <li>Justine Louise Bandong - CEO</li>
        <li>Edison Decena - CTO</li>
        <li>Jay Mark Sotelo - COO</li>
        <li>John Dioquino - COO</li>
        {/* Add more team members here */}
      </ul>
      <h3 className="about-heading">Our History</h3> {/* Apply styles to the subheading */}
      <p className="about-content">
        Founded in 20XX, our company has grown steadily over the years. We
        started as a small startup with a big vision, and today, we are proud of
        what we have achieved.
      </p>
    </div>
  );
}

export default About;
