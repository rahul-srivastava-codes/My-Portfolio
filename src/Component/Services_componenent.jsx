import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function Services_componenent() {
  return (
    <div>
      <div className="ml-9 mt-6 mb-6 border-2 border-orange-600 rounded-lg px-3 py-1 w-[350px] h-[220px]">
        <div>01</div>
        <div className="text-2xl">Web design</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum magni
          quam nisi! Modi, asperiores laudantium.
        </div>
        <br />
        <br />
        <div className="flex justify-start items-center gap-2">
          <div>Read More</div>
          <FaLongArrowAltRight />
        </div>
      </div>
    </div>
  );
}

export default Services_componenent;
