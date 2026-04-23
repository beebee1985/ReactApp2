/**
 * Projects Page Component
 * 
 * Displays a portfolio of projects showcasing development work.
 * Each project card includes a description, technologies used,
 * and links to live demos or source code.
 */

import React from 'react';
import './Projects.css';

/**
 * Interface defining the structure of a project item
 */
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
}

const Projects: React.FC = () => {
  // Sample portfolio projects - can be replaced with real data
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with cart functionality, payment integration, and order management. Built with React and Node.js.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
      technologies: ['React', 'Redux', 'Firebase', 'Material-UI'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'An intuitive weather application that provides real-time weather data, forecasts, and interactive maps using external APIs.',
      technologies: ['React', 'TypeScript', 'REST APIs', 'Chart.js'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills. Features smooth animations and a clean design.',
      technologies: ['React', 'TypeScript', 'CSS3', 'Vite'],
      demoLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <div className="projects-container">
      {/* Page Header */}
      <header className="projects-header">
        <h1>My Projects</h1>
        <p>A collection of projects that demonstrate my skills and creativity</p>
      </header>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            {/* Project Title */}
            <h2 className="project-title">{project.title}</h2>
            
            {/* Project Description */}
            <p className="project-description">{project.description}</p>
            
            {/* Technologies Used */}
            <div className="project-technologies">
              <h3>Technologies:</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            {/* Project Links */}
            <div className="project-links">
              {project.demoLink && (
                <a href={project.demoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  View Demo
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
