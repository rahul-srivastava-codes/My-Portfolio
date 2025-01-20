import React from "react";
import "../../src/App.css";
function Navbar() {
  return (
    <div>
      <div className=" name-container fixed">
        <div className="nav_title text-4xl font-bold">Rahul Srivastava</div>
        <div
          className="nav-center flex
    justify-between gap-6 text-base font-semibold "
        >
          <div className="nav_middle">Home</div>
          <div className="nav_middle">About Me</div>
          <div className="nav_middle">Services</div>
          <div className="nav_middle">Portfolio</div>
          <div className="nav_middle">Contact</div>
        </div>
        <button className="nav-button ">Connect with me</button>
      </div>
    </div>
  );
}

export default Navbar;
