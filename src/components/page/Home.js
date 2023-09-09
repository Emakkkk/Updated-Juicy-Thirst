import React from 'react';
import './Home.css'; // Import your stylesheet

function Home() {
  return (
    <div>
      <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mb-5 pb-5 pb-lg-0 mb-lg-0">
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
