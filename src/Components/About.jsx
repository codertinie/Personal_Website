import React from "react";
import "../CSS/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      <p className="about-subtitle">Who I Am</p>
      <div className="about-content">
        <p>
          I'm <strong>Martin Munyao</strong>, a passionate Front-End Developer with a love for clean UI, fast performance, and user-focused experiences. I specialize in building responsive, accessible, and modern websites using technologies like <strong>React</strong>, <strong>JavaScript</strong>, and <strong>Tailwind CSS</strong>.
        </p>
        <p>
          I'm constantly learning and staying up-to-date with the latest front-end trends and frameworks. When I’m not coding, I enjoy mentoring others, writing dev blogs, and exploring design ideas.
        </p>
        <p>
          My goal is to work with forward-thinking companies to create meaningful digital experiences.
        </p>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h3 className="skills-title">Skills & Technologies</h3>
        <div className="skills-grid">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Tailwind CSS</span>
          <span>Git & GitHub</span>
          <span>Responsive Design</span>
          <span>REST APIs</span>
          <span>Figma</span>
          <span>VS Code</span>
        </div>
      </div>
    </section>
  );
};

export default About;
