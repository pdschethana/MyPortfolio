import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Students Attendance Management System",
      description: "Desktop application for tracking student attendance.",
      tech: ["Java", "JavaFX", "MySQL", "IntelliJ IDEA"],
      link: "https://github.com/pdschethana/Students_Attendance_management-system-_using-Java-fX.git",
    },
    {
      title: "Student Management System",
      description: "Web-based student management system.",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      link: "https://github.com/pdschethana/Student_management_system.git",
    },
    {
      title: "Ecommerce Project",
      description: "Ecommerce platform using WordPress, HTML, CSS, and JavaScript.",
      tech: ["WordPress", "HTML", "CSS", "JavaScript"],
      link: "https://drive.google.com/file/d/1LPoCV-1SSzTblmXZk47SK2l-dGzaDtN1/view?usp=drivesdk",
    },
    {
      title: "Cinema Website UI Design",
      description: "UI design created in Figma.",
      tech: ["Figma"],
      link: "https://www.figma.com/design/d7EiNvLN1Qf21yzcIVPVIQ/Untitled?node-id=0-1",
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p className="projects-intro">
          Here are some of the projects I’ve built and designed.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, idx) => (
                <span className="tech-badge" key={idx}>
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
