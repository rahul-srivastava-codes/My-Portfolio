import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "../../src/App.css";

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    // Animate progress bars
    gsap.fromTo(
      skillsRef.current.children,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  const skills = [
    { name: "HTML", rating: 10 },
    { name: "CSS", rating: 9 },
    { name: "JavaScript", rating: 9 },
    { name: "React", rating: 8 },
    { name: "Node.js", rating: 8 },
    { name: "Express", rating: 8 },
    { name: "Tailwind CSS", rating: 8 },
  ];

  return (
    <div
      className="skills-container"
      style={{
        padding: "20px",
        backgroundColor: "#f7f8fc",
        borderRadius: "10px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
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
        My Skills
      </h2>
      <div
        ref={skillsRef}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item"
            style={{
              position: "relative",
              padding: "10px 0",
              backgroundColor: "#fff",
              borderRadius: "5px",
              overflow: "hidden",
              transition: "transform 0.3s ease",
            }}
          >
            <div
              className="skill-name"
              style={{
                position: "absolute",
                zIndex: 2,
                left: "10px",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              {skill.name}
            </div>
            <div
              className="progress-bar"
              style={{
                position: "relative",
                height: "10px",
                width: "100%",
                backgroundColor: "#e0e0e0",
                borderRadius: "5px",
                overflow: "hidden",
                marginTop: "30px",
              }}
            >
              <div
                className="progress"
                style={{
                  height: "100%",
                  width: `${skill.rating * 10}%`,
                  background: "linear-gradient(to right, #4CAF50, #81C784)",
                  transition: "width 0.5s ease",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
