import React from 'react';
import './Home.css'; // Import your stylesheet

function Home() {
  return (
    <div>
      <section className="home-section" id="section_1">
        <div className="container">
          <div className="row">
            <div className="home-intro">
              <h6>Introducing our Website</h6>
              <h1 className="text-white mb-4">JUICY THIRST</h1>
              <a href="https://en.wikipedia.org/wiki/Juice" className="btn custom-btn smooth-scroll me-3">Discover More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
