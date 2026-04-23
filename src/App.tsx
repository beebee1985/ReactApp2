import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

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
