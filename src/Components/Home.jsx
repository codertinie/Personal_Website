import React from "react";
import "../CSS/Home.css"
import myImage from "../Assets/images/Martin_Munyao-removebg.png"

const Home = () => {
  return ( 
    <div className="homepage-container">
    <div className="hero-section">
      <div className="hero-text">
        <h1 className="hero-title">Hello, I'm Martin Munyao</h1>
        <p className="hero-subtitle">Front-End Developer | Creative Thinker</p>
        <button className="cta-button">Hire Me</button>
      </div>
      <div className="hero-image">
        <img 
        src={myImage} 
        alt="MyImage" 
        className="profile-image"
        />
      </div>
    </div>
  </div>
    
   );
}
 
export default Home;