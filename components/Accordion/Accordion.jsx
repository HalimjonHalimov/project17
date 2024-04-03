import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Title } from "..";

const AccordionCollapse = ({ title, bg, children }) => {
  const [accordionOpen, setAccordionOpen] = useState(true);

  return (
    <div className=" group w-full h-auto">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`w-full h-auto flex justify-between items-center py-2 bg-[${bg}]`}
      >
        <Title>{title}</Title>
        <IoIosArrowUp
          size={24}
          className={`${
            accordionOpen ? "rotate-0" : "rotate-180"
          } text-[#F5F5F5] transition-all duration-150 ease-out`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out bg-[${bg}] ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className={"overflow-hidden"}>{children}</div>
      </div>
    </div>
  );
};

export default AccordionCollapse;
