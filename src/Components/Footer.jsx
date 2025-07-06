import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Martin Munyao | Built with React ⚛️</p>
      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="mailto:your@email.com">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
