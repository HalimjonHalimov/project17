import Image from "next/image";
import React from "react";

export default function LendCard() {
  return (
    <div className="w-full h-auto flex flex-col gap-4">
      <div className="relative w-full h-40 rounded-xl bg-[#605D6E] overflow-hidden">
        {/* <Image src={""} alt="" fill className="absolute w-full h-full object-cover" /> */}
      </div>
      <div className="flex justify-between items-center text-[#605D6E] text-sm font-normal">
        Statistics
        <span className="text-[#F5F5F5]">120</span>
      </div>
      <button
        type="button"
        className="w-full h-auto bg-[#7E67FF]  py-2 text-[#f5f5f5] text-sm font-bold rounded-full hover:bg-[#f5f5f5] hover:text-[#7E67FF] transition-all duration-200 ease-in-out"
      >
        Поставить
      </button>
    </div>
  );
}
