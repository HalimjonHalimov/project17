import React from "react";
import { LuPlusCircle } from "react-icons/lu";

export default function ModalItem({ domain, status }) {
  return (
    <div className="w-full h-auto grid grid-cols-3">
      <h5 className="text-[#f5f5f5] text-sm font-normal">{domain}</h5>
      <div
        className={`w-4 h-4 rounded-full ${
          status == true ? "bg-[#64CB40]" : "bg-[#CB4040]"
        } `}
      ></div>
      <button
        type="button"
        className="flex justify-center rounded-full items-center gap-4 text-xs font-bold text-[#f5f5f5] bg-[#7E67FF] w-36 h-8 transition-all duration-200 ease-in-out hover:opacity-75"
      >
        <LuPlusCircle size={14} />
        Add a domain
      </button>
    </div>
  );
}
