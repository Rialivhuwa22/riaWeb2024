import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h2 className="landing-title">Welcome to NIKE Website!</h2>
        <p className="landing-description">
          Discover the world of high-quality Nike footwear that blends style, comfort, and performance. 
          Explore our amazing collection, find great deals, and step into a new level of sports and fashion.
        </p>
        <Link to="/products" className="landing-link">
          Explore Nike Footwear
        </Link>
      </div>
    </div>
  );
};

export default Landing;
