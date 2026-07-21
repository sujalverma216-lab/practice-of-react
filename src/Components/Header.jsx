import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/Logo.jpg";

function Header() {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      <header className="header">
        <div className="logo-section">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </div>

        <nav className="navbar">
          {/* Hamburger Icon */}
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* 
            Navigation Links 
            The 'active' class is conditionally added based on isMenuOpen state.
          */}
          <ul className={isMenuOpen ? "active" : ""}>
            <li className="workspace">
              <Link to="/workspace" onClick={toggleMenu}>Workspace</Link>
            </li>
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/courses" onClick={toggleMenu}>Courses</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
            <li>
              <Link to="/form" onClick={toggleMenu}>Form</Link>
            </li>
            <li>
              <Link to="/login" onClick={toggleMenu}>Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;