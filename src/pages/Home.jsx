import React from "react";
import { ReactTyped } from "react-typed";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        {/* Your image */}
        <img src="/myphoto.jpg" alt="My Profile" className="profile-img" />

        {/* Welcome text */}
        <h2 className="welcome-text">Welcome to my portfolio</h2>
        <h2>Hi , I'm Supuni Chethana</h2>

        {/* Animated title */}
        <h1 className="title-text">
          <ReactTyped
            strings={["Software Engineer", " Web Developer" , "Java Developer", "Wordpress web Designer"]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h1>

        {/* Short description */}
        <p className="description">
          I am a passionate software developer with experience in building web and desktop applications. 
          I love creating clean, efficient, and user-friendly solutions.
        </p>

        {/* Download CV */}
        <a href="/SupuniChethana.pdf" download className="cv-btn">
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Home;
