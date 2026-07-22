import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Header.css";
import logo from "../assets/Logo.jpg";

function Header() {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    signOut();
    setIsProfileOpen(false);
    setIsMenuOpen(false);
    navigate("/");
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
            {user ? (
              <li className="profile-container">
                <button
                  className="profile-toggle"
                  type="button"
                  onClick={() => setIsProfileOpen((open) => !open)}
                  aria-expanded={isProfileOpen}
                >
                  <span className="profile-avatar">{user.firstName?.charAt(0).toUpperCase()}</span>
                  <span>{user.firstName}</span>
                </button>
                {isProfileOpen && (
                  <div className="profile-menu">
                    <span className="profile-greeting">Signed in as {user.firstName}</span>
                    <span className="profile-email">{user.email}</span>
                    <button type="button" onClick={handleLogout}>Log out</button>
                  </div>
                )}
              </li>
            ) : (
              <li>
                <Link to="/login" onClick={toggleMenu}>Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
