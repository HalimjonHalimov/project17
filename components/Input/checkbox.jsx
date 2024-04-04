import React, { useState } from "react";

export default function Switch({id, checked}) {
  const [state, setState] = useState(checked);
  const handleCheck = () => {
    setState(!state);
  };
  return (
    <label
      htmlFor={id}
      className="w-16 h-7 bg-[#19113E] flex relative rounded-full border border-[#19113E]"
    >
      <input
        type="checkbox"
        id={id}
        className="sr-only peer"
        checked={state}
        onChange={handleCheck}
      />
      <span className="absolute w-5 h-5 bg-[#7E67FF] rounded-full left-1 top-[50%] -translate-y-[50%] peer-checked:bg-[#605D6E] peer-checked:left-[38px] shadow-md shadow-black transition-all duration-200 ease-in-out"></span>
    </label>
  );
}
