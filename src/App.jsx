import React from "react";
import Navbar from "./Component/Navbar";
import Introduction from "./Component/Introduction";
import About_me from "./Component/About_me";
import Services from "./Component/Services";

function App() {
  return (
    <>
      <div className="bg-black h-[100%] w-[100%] text-zinc-50">
        <Navbar></Navbar>
        <Introduction></Introduction>
        <About_me></About_me>
        <Services></Services>
      </div>
    </>
  );
}

export default App;
