/**
 * App Component - Main Application Entry Point
 * 
 * This is the root component that sets up routing for the portfolio website.
 * It uses React Router to enable navigation between different pages
 * (Home, Projects, About, Contact) and includes the navigation bar.
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

/**
 * Main App component that configures routing and layout
 * @returns The complete application with routing configured
 */
function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation bar appears on all pages */}
        <Navigation />
        
        {/* Main content area where page components are rendered */}
        <main className="main-content">
          <Routes>
            {/* Route configuration for all pages */}
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="app-footer">
          <p>&copy; 2026 My Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
