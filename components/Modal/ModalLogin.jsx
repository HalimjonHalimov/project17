import React from "react";
import { LuPlusCircle } from "react-icons/lu";

export default function ModalLogin({ login, password }) {
  return (
    <div className="w-full h-auto grid grid-cols-2 text-[#f5f5f5] text-sm font-normal">
      <div className="">{login}</div>
      <div className="">{password}</div>
    </div>
  );
}
