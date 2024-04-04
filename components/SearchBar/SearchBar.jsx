import React from "react";
import { LuPlusCircle } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";

export default function SearchBar({ id, btnTitle }) {
  return (
    <form action="#" className="w-full flex justify-between items-center">
      <div className="w-full h-auto flex justify-start items-center gap-4">
        <label
          htmlFor={id}
          className="w-[424px] h-12 px-5 rounded-xl flex justify-start items-center gap-2 bg-[#140E2D] text-[#F5F5F5]"
        >
          <IoSearchOutline size={24} />
          <input
            type="text"
            id={id}
            name="searchbar"
            className="w-[90%] h-auto border-none outline-none bg-transparent"
            placeholder="Поиск лендинга"
          />
        </label>
        <button
          type="button"
          className="w-16 h-12 flex justify-center items-center bg-[#7E67FF] rounded-full text-base font-bold text-[#F5F5F5]"
        >
          <FiFilter size={24} />
        </button>
      </div>
      <button
        type="sumbit"
        className="w-52 h-12 flex justify-evenly items-center rounded-full text-[#F5F5F5] text-sm font-bold bg-[#7E67FF] border-none hover:bg-[#F5F5F5] hover:text-[#7E67FF] transition-all duration-200 ease-in-out"
      >
        <LuPlusCircle size={24} />
        {btnTitle}
      </button>
    </form>
  );
}
