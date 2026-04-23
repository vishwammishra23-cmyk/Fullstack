import React from "react";
import "./App.css";

function LandingPage({ onEnter }) {
  return (
    <div className="landing">

      {/* HERO */}
      <div className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Find Your Dream Job</h1>
          <p>Explore opportunities from top companies worldwide.</p>

          <button className="primary" onClick={onEnter}>
            Get Started
          </button>
        </div>
      </div>

    </div>
  );
}

export default LandingPage;