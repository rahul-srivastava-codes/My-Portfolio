import React from "react";
import "../../src/App.css";
import img from "../../src/photos/coding.gif";
function Animation() {
  return (
    <div className="animation">
      <div>
        {" "}
        <div className="container">
          <h1 className="animated-text">
            Hey, I'm <span className="highlight">Rahul Srivastava</span>.
          </h1>
          <p className="description">
            I am a web designer, frontend developer, and full-stack engineer.
          </p>
        </div>
      </div>
      <div>
        <img className="coding-gif" src={img} alt="" />
      </div>
    </div>
  );
}

export default Animation;
