import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About Me</h2>
        <p className="about-intro">
          Hi, I’m Supuni Chethana, a passionate software developer specializing in building modern web and desktop applications. I enjoy creating clean, efficient, and user-friendly solutions.
        </p>
      </div>

      <div className="about-main">
        {/* Education Card */}
        <div className="about-card">
          <h3>Education</h3>
          <ul className="about-list">
            <li>School: Taxila Central College (Science Stream)</li>
            <li>Management Information Systems undergraduate at NSBM Green University</li>
            <li>Following CMJD Programme at IJSE Institute of Software Engineering</li>
            
          </ul>
        </div>

        {/* Experience Card */}
        <div className="about-card">
          <h3>Experience</h3>
          <ul className="about-list">
            <li>Developed Library Management System in Java and MySQL</li>
            <li>Created Student Attendance Management System using JavaFX</li>
            <li>Built personal portfolio website in React.js</li>
            <li>Created E Commerce Website Using Wordpress</li>
          </ul>
        </div>

        

        {/* Goals Card */}
        <div className="about-card">
          <h3>Professional Goal</h3>
          <p>
            I aim to continuously improve my skills, work on impactful projects, and contribute to creating user-friendly software solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
