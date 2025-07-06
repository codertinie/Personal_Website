import React from "react";
import "../CSS/Portfolio.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio site built with React and styled components.",
    tech: ["React", "CSS", "Vercel"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "E-commerce App",
    description: "A full-featured e-commerce site with product filtering and cart system.",
    tech: ["React", "Redux", "Firebase"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Blog CMS",
    description: "A content management system for creating and managing blog posts.",
    tech: ["Node.js", "MongoDB", "Express"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Weather App",
    description: "Real-time weather updates using OpenWeatherMap API.",
    tech: ["JavaScript", "HTML", "CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Manager",
    description: "A task tracking app with user authentication and real-time updates.",
    tech: ["React", "Firebase"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Chat Application",
    description: "Live chat app with typing indicators and online status.",
    tech: ["React", "Socket.io", "Node.js"],
    liveLink: "#",
    githubLink: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-title">My Projects</h2>
      <p className="portfolio-subtitle">A showcase of my latest work</p>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tech-stack">
              {project.tech.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
            <div className="portfolio-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
