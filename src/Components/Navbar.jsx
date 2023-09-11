import React from "react";
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div class="logo">Your Logo or Text</div>
      <div class="cta-button">
        <a href="#contact">Get in Touch</a>
      </div>
    </header>
  );
};

export default Navbar;
