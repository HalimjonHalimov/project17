import { navItems } from "@/utils/nav";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="w-[388px] h-screen flex flex-col justify-start items-center gap-4 bg-[#1E1A33] py-10 px-4 rounded-xl">
      <div className="w-full h-auto bg-[#140E2D] p-3 rounded-xl">
        <div className="w-full h-auto flex justify-start items-center gap-2 text-xl font-bold text-[#F5F5F5]">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 11.2016C14.0619 11.2016 15.7333 9.53351 15.7333 7.47581C15.7333 5.4181 14.0619 3.75 12 3.75C9.93813 3.75 8.26665 5.4181 8.26665 7.47581C8.26665 9.53351 9.93813 11.2016 12 11.2016Z"
                stroke="#F5F5F5"
                stroke-width="1.5"
              />
              <path
                d="M4 17.8629C4 15.6538 5.79039 13.8629 7.99953 13.8629C9.33672 13.8629 10.7928 13.8629 12 13.8629C13.2072 13.8629 14.6633 13.8629 16.0005 13.8629C18.2096 13.8629 20 15.6538 20 17.8629V18.25C20 19.3546 19.1046 20.25 18 20.25H6C4.89543 20.25 4 19.3546 4 18.25V17.8629Z"
                stroke="#F5F5F5"
                stroke-width="1.5"
              />
            </svg>
          </span>
          Login
        </div>
        <div className="w-full h-auto flex justify-between items-center gap-4 ">
          <span className="flex justify-start items-center  uppercase text-sm font-normal text-[#605D6E]">
            ID:<span className="text-sm">111122121134154545</span>
          </span>
          <span className="w-20 h-[30px] text-base flex justify-around items-center bg-[#5A42E3] rounded-full text-[#F5F5F5]">
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 4.49995L6 8.49995M5.09573 2.2134L3.90109 2.02389C3.50087 1.96041 3.13705 2.26569 3.13007 2.67085L3.10925 3.88025C3.10529 4.11022 2.98308 4.3219 2.78591 4.44031L1.74894 5.06304C1.40155 5.27166 1.31908 5.73938 1.57417 6.05424L2.33561 6.99407C2.48039 7.17278 2.52284 7.41349 2.4479 7.63094L2.05383 8.77453C1.92181 9.15764 2.15928 9.56895 2.55707 9.64617L3.74449 9.87668C3.97027 9.92051 4.15751 10.0776 4.23988 10.2924L4.67308 11.4217C4.81821 11.8001 5.26451 11.9625 5.61888 11.766L6.67666 11.1793C6.87779 11.0677 7.12222 11.0677 7.32335 11.1793L8.38113 11.766C8.7355 11.9625 9.1818 11.8001 9.32692 11.4217L9.76012 10.2924C9.84249 10.0776 10.0297 9.92051 10.2555 9.87668L11.4429 9.64617C11.8407 9.56895 12.0782 9.15764 11.9462 8.77452L11.5521 7.63094C11.4772 7.41349 11.5196 7.17278 11.6644 6.99407L12.4258 6.05424C12.6809 5.73938 12.5985 5.27166 12.2511 5.06304L11.2141 4.44031C11.0169 4.3219 10.8947 4.11022 10.8908 3.88025L10.8699 2.67085C10.863 2.26569 10.4991 1.96041 10.0989 2.02389L8.90428 2.2134C8.67712 2.24944 8.44743 2.16584 8.29658 1.99222L7.50325 1.07915C7.23747 0.77326 6.76253 0.77326 6.49676 1.07915L5.70342 1.99222C5.55257 2.16584 5.32288 2.24944 5.09573 2.2134ZM5 5.49995C5 5.68404 4.85076 5.83328 4.66667 5.83328C4.48257 5.83328 4.33334 5.68404 4.33334 5.49995C4.33334 5.31585 4.48257 5.16661 4.66667 5.16661C4.85076 5.16661 5 5.31585 5 5.49995ZM9.66667 7.49995C9.66667 7.68404 9.51743 7.83328 9.33334 7.83328C9.14924 7.83328 9 7.68404 9 7.49995C9 7.31585 9.14924 7.16661 9.33334 7.16661C9.51743 7.16661 9.66667 7.31585 9.66667 7.49995Z"
                stroke="#F5F5F5"
                stroke-linecap="round"
              />
            </svg>
            20%
          </span>
        </div>
      </div>
      <ul className="w-full h-auto flex flex-col justify-start items-center gap-1">
        {navItems.map((item, i) => (
          <li
            key={i}
            className="relative w-full h-[49px] flex justify-start items-center px-4 py-2"
          >
            <Link
              href={item.route}
              className={`w-full h-auto flex justify-start items-center gap-4  text-xl font-bold hover:text-[#7E67FF] transition-all duration-150 ease-in-out ${
                pathname == item.route ? "text-[#7E67FF]" : "text-[#605D6E]"
              } `}
            >
              {item.icon}
              {item.titie}
            </Link>
            {pathname == item.route && (
              <span className="absolute left-0 bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-[#5a42e310] via-[#5A42E3] to-[#5a42e310]"></span>
            )}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="w-full h-auto rounded-full hover:text-[#0C091A] hover:bg-[#F5F5F5]  bg-[#0C091A] py-1 px-4 text-[#F5F5F5] text-xl font-bold border border-[#0C091A] transition-all duration-150 ease-in-out"
      >
        Exit
      </button>
    </div>
  );
}
