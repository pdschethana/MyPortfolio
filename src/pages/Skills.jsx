import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-header">
        <h2>My Skills</h2>
        <p className="skills-intro">
          Here are some of the technologies and tools I work with. You can customize this list to reflect your expertise.
        </p>
      </div>

      <div className="skills-main">
        {/* Frontend Card */}
        <div className="skills-card">
          <h3>Frontend Technologies</h3>
          <ul>
            <li>React.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        {/* Backend Card */}
        <div className="skills-card">
          <h3>Backend Technologies</h3>
          <ul>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>PHP</li>
            
          </ul>
        </div>

        {/* Databases Card */}
        <div className="skills-card">
          <h3>Databases</h3>
          <ul>
            <li>MySQL</li>
            
          </ul>
        </div>

        {/* Frameworks & Tools Card */}
        <div className="skills-card">
          <h3>Frameworks & Tools</h3>
          <ul>
            <li>WordPress</li>
            <li>Java Fx</li>
            <li>Java Swing</li>
            <li>VS Code</li>
            <li>IntelliJ IDEA</li>
            <li>Git</li>
            <li>Postman</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
