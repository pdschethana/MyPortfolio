import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>My Portfolio</h1>
      <ul className="nav-links">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About Me</NavLink></li>
        <li><NavLink to="/skills" className={({ isActive }) => isActive ? "active-link" : ""}>Skills</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>Projects</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
