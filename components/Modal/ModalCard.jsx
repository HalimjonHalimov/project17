import React from "react";

export default function ModalCard() {
  return (
    <div className="w-full h-auto flex flex-col gap-1">
      <div className="relative w-full h-40 rounded-xl bg-[#605D6E] overflow-hidden">
        {/* <Image src={""} alt="" fill className="absolute w-full h-full object-cover" /> */}
      </div>
      <button
        type="button"
        className="w-full h-auto my-2 flex justify-start items-center gap-2 text-[#7E67FF] text-sm font-bold"
      >
        View all{" "}
        <span>
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 1L6.5 6L1.5 11"
              stroke="#7E67FF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>
      <div className="w-full h-auto grid grid-cols-2 gap-2">
        <button
          type="buttton"
          className="w-full h-8 bg-transparent hover:bg-[#F5F5F5] hover:text-[#7E67FF] flex justify-center items-center border border-[#F5F5F5] rounded-full text-[#F5F5F5] transition-all duration-200 ease-in-out"
        >
          Edit
        </button>
        <button
          type="buttton"
          className="w-full h-8 bg-[#7E67FF] hover:bg-[#F5F5F5] hover:text-[#7E67FF] flex justify-center items-center border border-[#7E67FF] rounded-full text-[#F5F5F5] text-sm font-bold transition-all duration-200 ease-in-out"
        >
          Choose
        </button>
      </div>
    </div>
  );
}
