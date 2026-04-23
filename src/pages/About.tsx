import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      {/* Page Header */}
      <header className="about-header">
        <h1>About Me</h1>
        <p>My journey as a developer</p>
      </header>

      {/* Background Section */}
      <section className="about-section">
        <h2>Background</h2>
        <p>
          I'm a passionate full-stack developer with a strong foundation in
          computer science and a love for creating elegant solutions to complex
          problems. My journey in tech began with a curiosity about how things
          work, which led me to pursue a career in software development.
        </p>
        <p>
          Over the years, I've worked on various projects ranging from small
          business websites to large-scale enterprise applications. Each project
          has taught me valuable lessons about code quality, user experience,
          and the importance of continuous learning.
        </p>
      </section>

      {/* Education & Experience */}
      <section className="about-section">
        <h2>Education & Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Full-Stack Development</h3>
            <p className="timeline-period">2024 - Present</p>
            <p>
              Specializing in React, TypeScript, Node.js, and modern web
              development practices. Building scalable applications with clean,
              maintainable code.
            </p>
          </div>
          <div className="timeline-item">
            <h3>Computer Science Studies</h3>
            <p className="timeline-period">2020 - 2024</p>
            <p>
              Studied computer science fundamentals including algorithms, data
              structures, software engineering principles, and web technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="about-section">
        <h2>Technical Skills</h2>
        <div className="skills-list">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React & React Hooks</li>
              <li>TypeScript & JavaScript (ES6+)</li>
              <li>HTML5 & CSS3</li>
              <li>Responsive Design</li>
              <li>State Management (Redux, Context API)</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js & Express</li>
              <li>RESTful APIs</li>
              <li>Database Design (SQL & NoSQL)</li>
              <li>Authentication & Authorization</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Technologies</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>npm & package management</li>
              <li>Vite & build tools</li>
              <li>Testing frameworks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Personal Goals */}
      <section className="about-section">
        <h2>Goals & Aspirations</h2>
        <p>
          My goal is to continue growing as a developer while contributing to
          meaningful projects that make a positive impact. I'm particularly
          interested in:
        </p>
        <ul className="goals-list">
          <li>Building accessible and inclusive web applications</li>
          <li>Learning new technologies and frameworks</li>
          <li>Contributing to open-source projects</li>
          <li>Sharing knowledge with the developer community</li>
          <li>Creating solutions that solve real-world problems</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
