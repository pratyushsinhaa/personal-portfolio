import React from 'react';

function Resume() {
  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      <iframe src="/resume.pdf" width="100%" height="600px" title="Resume"></iframe>
    </div>
  );
}

export default Resume;