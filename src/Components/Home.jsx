import React from "react";
import "../CSS/Home.css";
import myImage from "../Assets/images/python.png";

const Home = () => {
  return (
    <div className="homepage-container">
      <div className="hero-section">
        <div className="hero-text">
          <h1 className="hero-title">
            Hello, I'm <span className="highlight">Martin Munyao</span>
          </h1>
          <p className="hero-subtitle">
            Front-End Developer | Creative Thinker | React Enthusiast
          </p>
          <button className="cta-button">Hire Me</button>
        </div>
        <div className="hero-image">
          <img src={myImage} alt="MyImage" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
