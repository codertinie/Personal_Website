import React, { useState } from "react";
import "../CSS/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">Martin Munyao</div>

      <nav className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About Me</a></li>
          <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
          <li><a href="#blog" onClick={toggleMenu}>Blog</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>

      <div className="navbar-cta desktop-only">
        <a href="#contact">Get in Touch</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={isMobileMenuOpen ? "open" : ""}></span>
        <span className={isMobileMenuOpen ? "open" : ""}></span>
        <span className={isMobileMenuOpen ? "open" : ""}></span>
      </div>
    </header>
  );
};

export default Navbar;
