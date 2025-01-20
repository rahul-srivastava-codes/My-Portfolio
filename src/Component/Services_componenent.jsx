import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import "../../src/App.css";

function Services_componenent() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "My Portfolio",
      description:
        "Designed own portfolio. Technology used are html, css, JS, React , Tailwind,GSAP",
      icon: <FaLongArrowAltRight />,
    },
    {
      id: 2,
      title: "TODO",
      description:
        "Built various websites for various clients. Technologies used are html, css, JS, React, Node.js, Express.js, MongoDB",
      icon: <FaLongArrowAltRight />,
    },
  ]);
  return (
    <div className="flex px-2 py-4 h-[40px] w-[160px]">
      {data.map((e) => {
        return (
          <div key={e.id} className="box px-4 py-4 h-[30px] w-[500px] gap-2">
            <div>{e.title}</div>
            <div>{e.description}</div>
            <div>{e.icon}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Services_componenent;
