import { Layout, ModalItem, ModalLogin, Paragraph, Title } from "@/components";
import React from "react";
import { LuPlusCircle } from "react-icons/lu";
import { IoIosRefresh } from "react-icons/io";
import AccordionCollapse from "@/components/Accordion/Accordion";
import Checkbox from "@/components/Input/checkbox";

export default function AddModel() {
  return (
    <Layout path={"/modal"}>
      <div className="w-full h-auto p-4 grid grid-cols-11 items-start gap-4">
        <div className="col-span-7 flex flex-col justify-start gap-4">
          <div className="w-full h-auto bg-[#19113E] py-3 px-5 rounded-xl">
            <Title>Available domains</Title>
            <div className="w-full h-auto grid grid-cols-3 gap-2">
              <Paragraph title="Domain" />
              <Paragraph title="Status" />
            </div>
            <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 my-2">
              <ModalItem domain={"Domain Name"} status={true} />
              <ModalItem domain={"Domain Name"} status={true} />
              <ModalItem domain={"Domain Name"} status={true} />
              <ModalItem domain={"Domain Name"} status={true} />
              <ModalItem domain={"Domain Name"} status={true} />
              <ModalItem domain={"Domain Name"} status={true} />
            </div>
          </div>

          <div className="w-full h-auto bg-[#19113E] py-3 px-5 rounded-xl">
            <Title>Available domains</Title>
            <div className="w-full h-auto grid grid-cols-2 gap-2">
              <Paragraph title="Login" />
              <Paragraph title="Password" />
            </div>
            <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 my-2">
              <ModalLogin login={"Login  Name"} password={12345678911} />
              <ModalLogin login={"Login  Name"} password={12345678911} />
              <ModalLogin login={"Login  Name"} password={12345678911} />
              <ModalLogin login={"Login  Name"} password={12345678911} />
              <ModalLogin login={"Login  Name"} password={12345678911} />
              <ModalLogin login={"Login  Name"} password={12345678911} />
              <ModalLogin login={"Login  Name"} password={12345678911} />
            </div>
            <div className="w-[50%] h-auto my-4 grid grid-cols-2 gap-2">
              <button
                type="buttton"
                className="w-full h-8 bg-[#7E67FF] hover:bg-[#F5F5F5] hover:text-[#7E67FF] flex justify-center items-center gap-2 border border-[#7E67FF] rounded-full text-[#F5F5F5] text-sm font-bold transition-all duration-200 ease-in-out"
              >
                <IoIosRefresh size={18} />
                Update
              </button>
              <button
                type="buttton"
                className="w-full h-8 bg-transparent hover:bg-[#F5F5F5] hover:text-[#7E67FF] flex justify-center items-center gap-2 border border-[#F5F5F5] rounded-full text-[#F5F5F5] transition-all duration-200 ease-in-out"
              >
                <LuPlusCircle size={18} />
                Create
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-auto col-span-3 p-2 px-4 bg-[#140E2D] rounded-xl">
          <AccordionCollapse title={"Your cloaca"} bg="#19113E">
            <Paragraph title={"IP cloaca"} />
            <div className="w-full h-auto my-2 grid grid-cols-1 gap-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[#F5F5F5] text-base font-normal">
                чываываыва
                </span>
                <Checkbox id={"checkbox21"} checked={false} />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#F5F5F5] text-base font-normal">
                чываываыва
                </span>
                <Checkbox id={"checkbox22"} checked={false} />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#F5F5F5] text-base font-normal">
                чываываыва
                </span>
                <Checkbox id={"checkbox23"} checked={true} />
              </div>
            </div>
          </AccordionCollapse>
        </div>
      </div>
    </Layout>
  );
}
