import React from "react";
import Navbar from "./Component/Navbar";
import Introduction from "./Component/Introduction";
import About_me from "./Component/About_me";
import Services from "./Component/Services";
import Animation from "./Component/Animation";
import ContactForm from "./Component/Contact";

import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <Navbar></Navbar>
        <Animation></Animation>
        <Introduction></Introduction>
        <About_me></About_me>
        <Services></Services>
        <ContactForm></ContactForm>
      </div>
    </>
  );
}

export default App;
