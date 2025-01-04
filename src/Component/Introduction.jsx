import React from "react";
import { Link } from "react-router-dom";

function Introduction() {
  const img =
    "https://mediaslide-us.storage.googleapis.com/imgmodels/pictures/7713/97694/profile-1699385194-8c4ec3702110696c8f503d0aa666fd8e.jpg";
  return (
    <div className="flex flex-col items-center justify-center ">
      <img src={img} alt="photo" className="w-[15%] h-[5%] rounded-full" />
      <div
        className="flex gap-3
      "
      >
        <h1 className="text-4xl bg-red-300 bg-gradient-to-r from-pink-500 to-orange-500 to-90% inline-block text-transparent bg-clip-text ">
          Hello, I'm Rahul{" "}
        </h1>
        <p className="text-4xl"> Software Developer </p>
      </div>
      <p className="text-4xl justify-center gap-3">& Frontend Web Developer</p>
      <div className="justify center gap-3">
        I am a frontend developer from India, worked on multiple small projects
        <br />
      </div>
      <div className="justify center gap-3">based in college.</div>
      <div className="px-[10%] py-[2%] flex items-center jutify-center gap-6">
        <button className="Intro-button px-4 rounded-full text-sm bg-red-300 bg-gradient-to-r from-pink-500 to-orange-500 to-90% ">
          <a href="www.linkedin.com/in/rahul-srivastava-4605311a5">
            Connect with me
          </a>
        </button>
        <button className="nav-resume px-4 rounded-full text-sm">
          {" "}
          <a href="https://www.altcademy.com/blog/how-to-add-hyperlink-to-button-in-reactjs/">
            My Resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default Introduction;
