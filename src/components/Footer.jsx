import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Supuni Chethana. All rights reserved.</p>

        <div className="footer-links">
          <a href="mailto:supunichethana9@example.com"><FaEnvelope /></a>
          <a href="tel:+94771243316"><FaPhoneAlt /></a>
          <a href="https://github.com/pdschethana" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/supuni-chethana-765753320" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <span><FaMapMarkerAlt /> Kalutara, Sri Lanka</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
