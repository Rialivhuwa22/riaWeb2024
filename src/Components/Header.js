import React from "react";
import { Link } from "react-router-dom";
import "../Style/Header.css";

function Header() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {/* Navigation links using React Router */}
       
        <li className="navbar-item">
          <Link to="/registration" className="navbar-link">
            Registration
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="navbar-link">
            Login
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/products" className="navbar-link">
            Products
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/cart" className="navbar-link">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
