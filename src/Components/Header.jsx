import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/Logo.jpg";

function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>                     
      </div>

      <nav className="navbar">
        
        <ul>
          <li className="workspace">
            <Link to="/workspace"> Workspace</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;