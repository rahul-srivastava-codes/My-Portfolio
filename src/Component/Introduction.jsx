import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../../src/photos/img.jpg";
import "../../src/App.css";

gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  const introRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = introRef.current;

    // Scroll-triggered animation
    gsap.fromTo(
      container,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

    // Image hover animation
    const imageHover = gsap.to(imageRef.current, {
      scale: 1.1,
      rotateZ: 5,
      duration: 0.5,
      paused: true,
      ease: "power3.out",
    });

    imageRef.current.addEventListener("mouseenter", () => imageHover.play());
    imageRef.current.addEventListener("mouseleave", () => imageHover.reverse());

    // Text hover effect
    Array.from(textRef.current.children).forEach((line) => {
      const textHover = gsap.to(line, {
        color: "#007BFF", // Blue hover color
        x: 10,
        duration: 0.3,
        paused: true,
        ease: "power2.out",
      });

      line.addEventListener("mouseenter", () => textHover.play());
      line.addEventListener("mouseleave", () => textHover.reverse());
    });
  }, []);

  return (
    <div
      ref={introRef}
      className="intro"
      style={{
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        backgroundColor: "#f7f8fc",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.5s ease",
      }}
    >
      <img
        ref={imageRef}
        src={img}
        alt="profile"
        className="rounded-full"
        style={{
          width: "150px",
          height: "150px",
          margin: "20px auto",
          transition: "transform 0.3s ease",
        }}
      />
      <div ref={textRef}>
        <p
          style={{
            fontSize: "18px",
            marginBottom: "10px",
            color: "#333",
            transition: "color 0.3s ease",
          }}
        >
          Hello! My name is Rahul Srivastava, and I am a passionate software
          developer.
        </p>
        <p
          style={{
            fontSize: "18px",
            marginBottom: "10px",
            color: "#555",
            transition: "color 0.3s ease",
          }}
        >
          I specialize in building responsive interfaces using React and
          Next.js.
        </p>
        <p
          style={{
            fontSize: "18px",
            marginBottom: "10px",
            color: "#777",
            transition: "color 0.3s ease",
          }}
        >
          My backend skills include Node.js, Express, and database management
          with MongoDB.
        </p>
        <div className="px-[10%] py-[2%] flex items-center justify-center gap-6">
          <button className="Intro-button px-4 rounded-full text-sm bg-gradient-to-r from-blue-500 to-green-500">
            <a href="https://www.linkedin.com/in/rahul-srivastava-4605311a5">
              Connect with me
            </a>
          </button>
          <button className="nav-resume px-4 rounded-full text-sm bg-gray-200">
            <a href="https://example.com">My Resume</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
