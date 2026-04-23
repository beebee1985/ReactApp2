import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Hero Section with main introduction */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Portfolio</h1>
          <p className="hero-subtitle">
            Full-Stack Developer | React Enthusiast | Problem Solver
          </p>
          <p className="hero-description">
            I'm a passionate developer specializing in building modern web
            applications with React, TypeScript, and Node.js. I love creating
            intuitive user experiences and solving complex problems.
          </p>
          <div className="cta-buttons">
            <a href="/projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="/contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="skills-section">
        <h2>What I Do</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend Development</h3>
            <p>
              Building responsive and interactive user interfaces with React,
              TypeScript, and modern CSS.
            </p>
          </div>
          <div className="skill-card">
            <h3>Backend Development</h3>
            <p>
              Creating robust APIs and server-side applications with Node.js,
              Express, and databases.
            </p>
          </div>
          <div className="skill-card">
            <h3>Full-Stack Solutions</h3>
            <p>
              End-to-end application development from concept to deployment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
