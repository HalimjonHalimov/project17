import { Layout, ModalItem, ModalLogin, Paragraph, Title } from "@/components";
import React, { useState } from "react";
import { LuPlusCircle } from "react-icons/lu";
import { IoIosRefresh } from "react-icons/io";
import AccordionCollapse from "@/components/Accordion/Accordion";
import Checkbox from "@/components/Input/checkbox";
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";


export default function AddModel() {
  const [popup, setPopup] = useState(true);

  const handlePopup = () => {
    setPopup(!popup);
  };
  return (
    <Layout path={"/modal"}>
      <div className="w-full h-auto p-4 grid md:grid-cols-11 grid-cols-1 items-start gap-4">
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
            <div className="md:w-[50%] w-full h-auto my-4 grid grid-cols-2 gap-2">
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

        {/* Popup */}
        {popup && (
          <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-[2px] bg-black/10">
            <div className="md:w-[50%] w-[90%] h-auto bg-[#140E2D] p-5 rounded-xl">
              <div className="w-full h-auto flex justify-between items-center">
                <span></span>
                <Title>Domain Management</Title>
                <MdOutlineClose
                  size={24}
                  color={"#f5f5f5"}
                  className="cursor-pointer"
                  onClick={handlePopup}
                />
              </div>
              <form action="#" className="w-full h-auto flex flex-col justify-start items-start gap-2">
                <div className="w-full h-auto flex flex-col justify-start items-start gap-2">
                  <Paragraph title={"Choose a landing page"} />
                  <label htmlFor="modal" className="w-full h-auto rounded-full flex justify-center items-center bg-[#19113E] py-2">
                    <input
                      type="text"
                      name="modal"
                      id="modal"
                      placeholder="Название лендинга"
                      className="w-[90%] h-auto bg-transparent placeholder-[#7E67FF] border-none outline-none text-[#7E67FF] text-sm font-normal"
                    />
                    <IoIosArrowForward size={18} color="#7E67FF"/>
                  </label>
                </div>
                <div className="w-full h-auto flex flex-col justify-start items-start gap-2">
                  <Paragraph title={"Choose a landing page"} />
                  <label htmlFor="modal1" className="w-full h-auto rounded-full flex justify-center items-center bg-[#19113E] py-2">
                    <input
                      type="text"
                      name="modal1"
                      id="modal1"
                      placeholder="Название лендинга"
                      className="w-[90%] h-auto bg-transparent placeholder-[#7E67FF] border-none outline-none text-[#7E67FF] text-sm font-normal"
                    />
                    <IoIosArrowForward size={18} color="#7E67FF"/>
                  </label>
                </div>
                <div className="w-full h-auto flex flex-col justify-start items-start gap-2">
                  <Paragraph title={"Choose a landing page"} />
                  <label htmlFor="modal2" className="w-full h-auto rounded-full flex justify-center items-center bg-[#19113E] py-2">
                    <input
                      type="text"
                      name="modal2"
                      id="modal2"
                      placeholder="Название лендинга"
                      className="w-[90%] h-auto bg-transparent placeholder-[#7E67FF] border-none outline-none text-[#7E67FF] text-sm font-normal"
                    />
                    <IoIosArrowForward size={18} color="#7E67FF"/>
                  </label>
                </div>
                <button type="submit" className="w-full h-[45px] my-2 rounded-full bg-[#7E67FF] text-[#f5f5f5] font-bold text-base transition-all duration-200 ease-in-out hover:opacity-75">Save</button>
                {/* <select name="select" id="select">Название лендинга</select> */}
              </form>
            </div>
          </div>
        )}

        {/* Popup */}
      </div>
    </Layout>
  );
}
