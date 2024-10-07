import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Resume from './Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="bento-box">
            <Link to="/resume" className="bento-item resume">Resume</Link>
            <div className="bento-item project1">Project 1</div>
            <div className="bento-item project2">Project 2</div>
            <div className="bento-item image">
              <img src="mee.jpeg" alt="My Image" />
            </div>
            <div className="bento-item playing">
              <img src="spaceoddity.jpeg" alt="Currently Playing" className="playing-image" />
              <a href="https://music.apple.com/us/album/space-oddity/181456799?i=181457000" target="_blank" rel="noopener noreferrer" className="playing-link">
                Currently Playing
              </a>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;