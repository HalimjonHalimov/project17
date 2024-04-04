import { Layout, LendCard, SearchBar, Title } from "@/components";
import React from "react";

export default function Lend() {
  return (
    <Layout>
      <div className="w-full h-auto p-4 grid grid-cols-9 items-start gap-4">
        <div className="col-span-8 w-full h-auto flex flex-col gap-4">
          <SearchBar id={"lendSearch"} btnTitle=" Upload landing" />

          <div className="w-full h-auto bg-[#0C091A] py-3 px-5 rounded-xl">
            <Title>My landing pages</Title>
            <div className="w-full h-auto my-4 grid grid-cols-4 gap-4">
              <LendCard />
              <LendCard />
              <LendCard />
              <LendCard />
            </div>
            <button
              type="button"
              className="w-full h-auto my-4 flex justify-start items-center gap-2 text-[#7E67FF] text-base font-bold"
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
          </div>

          <div className="w-full h-auto bg-[#0C091A] py-3 px-5 rounded-xl">
            <Title children={"All landing pages"} />
            <div className="w-full h-auto my-4 grid grid-cols-4 gap-4">
              <LendCard />
              <LendCard />
              <LendCard />
              <LendCard />
            </div>
            <button
              type="button"
              className="w-full h-auto my-4 flex justify-start items-center gap-2 text-[#7E67FF] text-base font-bold"
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
          </div>
        </div>
      </div>
    </Layout>
  );
}
