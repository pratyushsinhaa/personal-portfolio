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
              <img src="/path/to/your/image.jpg" alt="My Image" />
            </div>
            <div className="bento-item playing">Currently Playing</div>
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