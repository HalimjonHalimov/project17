import { Layout, LendCard, SearchBar, Title } from "@/components";
import ModalCard from "@/components/Modal/ModalCard";
import React from "react";

export default function Modal() {
  return (
    <Layout path={'/modal'}>
      <div className="w-full h-auto p-4 grid md:grid-cols-9 grid-cols-1 items-start  gap-4">
        <div className="col-span-8 w-full h-auto flex flex-col gap-4">
          <SearchBar id={"modalSearch"} btnTitle=" Upload modal" url={'/modal/add'}/>

          <div className="w-full h-auto bg-[#0C091A] py-3 px-5 rounded-xl">
            <Title>My landing pages</Title>
            <div className="w-full h-auto my-4 grid md:grid-cols-4 grid-cols-1 gap-x-4 gap-y-8">
              <ModalCard />
              <ModalCard />
              <ModalCard />
              <ModalCard />
              <ModalCard />
              <ModalCard />
              <ModalCard />
              <ModalCard />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
