import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div
      className=" name-container text-2xl px-[10%] py-[2%] flex items-center
    justify-between"
    >
      <div className="nav_title text-4xl font-bold">RahuL</div>
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
      <button className="nav-button px-4 rounded-full text-sm bg-red-300 bg-gradient-to-r from-pink-500 to-orange-500 to-90% ">
        Connect with me
      </button>
    </div>
  );
}

export default Navbar;
