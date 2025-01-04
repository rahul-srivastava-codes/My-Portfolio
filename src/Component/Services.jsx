import React from "react";
import Services_componenent from "./Services_componenent";

function Services() {
  return (
    <div className="ml-[120px] mt-6 mb-6">
      <h1 className="text-5xl ">Services</h1>
      <div className="flex items-center flex-wrap">
        <Services_componenent></Services_componenent>
        <Services_componenent></Services_componenent>
        <Services_componenent></Services_componenent>
        <Services_componenent></Services_componenent>
        <Services_componenent></Services_componenent>
        <Services_componenent></Services_componenent>
      </div>
    </div>
  );
}

export default Services;
