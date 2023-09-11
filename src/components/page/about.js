// src/components/page/About.js
import React from 'react';
import './about.css'; // Import the CSS file
import teamImage1 from '../images/about-image/Justine.png'; // Import the image

function About() {
  const imageStyle = {
    width: '100px', // Adjust the width as needed
    height: 'auto', // Maintain aspect ratio
  };

  return (
    <div className="about-container"> {/* Apply styles to the main container */}
      <div className="team-image">
      </div>
      <h2 className="about-heading">About Us</h2> {/* Apply styles to the heading */}
      <p className="about-content">
      Welcome to our About Us page! We are a passionate and dedicated team committed to providing our valued customers with exceptional products and services. 
      At the heart of our mission lies our unique and savory juices, which set us apart in the industry.
      Our journey began with a simple yet profound idea to create juices that not only quench your thirst but also tantalize your taste buds with an explosion of flavors.
      What makes our juices truly remarkable is our unwavering commitment to quality and innovation.
      </p>
      <p className="about-content">
        Our mission is to make a positive impact in the world through our
        innovative solutions and commitment to excellence.
      </p>
      <h3 className="about-heading">Our Team</h3> {/* Apply styles to the subheading */}
      <ul className="about-content team-list">
        <li>
          <div className="team-member">
            <img src={teamImage1} alt="Justine Louise Bandong" style={imageStyle} />
            <div className="member-info">
              <p className="member-name">Justine Louise Bandong</p>
              <p className="member-title">CEO</p>
            </div>
          </div>
        </li>
        <li>
          <div className="team-member">
            <img src={teamImage1} alt="Justine Louise Bandong" style={imageStyle} />
            <div className="member-info">
              <p className="member-name">Justine Louise Bandong</p>
              <p className="member-title">CEO</p>
            </div>
          </div>
        </li>
        {/* Add more team members here */}
      </ul>
      <h3 className="about-heading">Our History</h3> {/* Apply styles to the subheading */}
      <p className="about-content">
        Justine Louise Bandong created the website
      </p>
    </div>
  );
}

export default About;
