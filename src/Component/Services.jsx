import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Projects = () => {
  const projects = [
    {
      title: "My Portfolio",
      description:
        "A personal portfolio to showcase my skills, projects, and experience.",
      technologies: ["HTML", "CSS", "React", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "To-Do App",
      description:
        "A full-stack To-Do application to manage tasks with CRUD functionality.",
      technologies: [
        "HTML",
        "CSS",
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Express",
        "MongoDB",
      ],
    },
  ];

  const projectsRef = useRef(null);

  useEffect(() => {
    // Animation for the project cards
    gsap.fromTo(
      projectsRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      className="projects-container"
      style={{
        padding: "20px",
        backgroundColor: "#f7f8fc",
        borderRadius: "10px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        maxWidth: "800px",
        margin: "30px auto",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        My Projects
      </h2>
      <div
        ref={projectsRef}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
                color: "#007BFF",
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: "16px",
                marginBottom: "15px",
                color: "#555",
              }}
            >
              {project.description}
            </p>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "10px",
              }}
            >
              Technologies Used:
            </h4>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: "#e0f7fa",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    fontSize: "14px",
                    color: "#00796B",
                    fontWeight: "bold",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
