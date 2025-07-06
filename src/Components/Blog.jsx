import React from "react";
import "../CSS/Blog.css";

const blogs = [
  {
    title: "Why I Love React Hooks",
    date: "July 3, 2025",
    excerpt: "Hooks simplified how I manage state and effects in functional components. Here's how they improved my workflow...",
    link: "#"
  },
  {
    title: "How I Built This Portfolio",
    date: "June 25, 2025",
    excerpt: "I wanted a site that reflects my personality and skills. Here's a breakdown of the stack, tools, and design choices I made.",
    link: "#"
  },
  {
    title: "Tailwind CSS vs Bootstrap",
    date: "June 18, 2025",
    excerpt: "Both are powerful. But if you care about customization and clean utility-first classes, here's why Tailwind wins for me...",
    link: "#"
  }
];

const Blog = () => {
  return (
    <section className="blog-section" id="blog">
      <h2 className="blog-title">Blog & Insights</h2>
      <p className="blog-subtitle">Thoughts, Tutorials, and Dev Life</p>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <h3>{blog.title}</h3>
            <span className="blog-date">{blog.date}</span>
            <p>{blog.excerpt}</p>
            <a href={blog.link} target="_blank" rel="noopener noreferrer">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
