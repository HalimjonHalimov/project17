import { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

export default function Login() {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState(!state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative bg-[#0C091A] w-full h-screen flex justify-center items-center">
      <div className="w-[648px] h-auto bg-[#140E2D] p-[40px] rounded-xl text-white">
        <form
          onClick={handleSubmit}
          action="#"
          className="flex flex-col justify-start items-stretch gap-4"
        >
          <div className="w-full h-[60px] bg-[#0C091A] rounded-full flex justify-start items-center px-8">
            <input
            autoComplete={false}
              type="text"
              id="login"
              name="login"
              placeholder="Login"
              className="w-[488px] h-[30px] bg-[#0C091A] outline-none border-none text-xl text-[#F5F5F5] font-normal capitalize"
            />
          </div>
          <div className="relative w-full h-[60px] bg-[#0C091A] rounded-full flex justify-start items-center px-8">
            <input
            autoComplete={false}
              type={state === false ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              className="w-[488px] h-[30px] bg-[#0C091A] outline-none border-none text-xl text-[#F5F5F5] font-normal capitalize"
            />
            <button
              type="button"
              onClick={handleToggle}
              className="absolute top-[50%] -translate-y-[50%] right-8 w-6 h-6 flex items-center justify-center"
            >
              {state ? <IoIosEye size={24} /> : <IoIosEyeOff size={24} />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full h-[60px] mt-8 bg-[#7E67FF] text-xl font-bold text-[#F5F5F5] rounded-full"
          >
            Log in
          </button>
        </form>
      </div>
      <div className="absolute left-20 bottom-10 w-[44px] h-auto flex flex-col justify-start items-start gap-4">
        <button type="button" className="w-full h-[44px] flex items-center justify-center bg-[#5A42E3] rounded-full">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 12.0069H13.8333C14.7542 12.0069 15.5 11.2712 15.5 10.363V7.89726C15.5 6.98904 14.7542 6.25343 13.8333 6.25343H13C12.54 6.25343 12.1667 6.62165 12.1667 7.07535V11.1849C12.1667 11.6386 12.54 12.0069 13 12.0069ZM13 12.0069L13 12.8288C13 13.737 12.2542 14.4726 11.3333 14.4726H9.5625M13.4167 6.25342V5.84247C13.4167 2.89178 10.9917 0.5 8 0.5C5.00833 0.5 2.58333 2.89178 2.58333 5.84247V6.25342M9.5625 14.4726C9.5625 13.9055 9.09583 13.4452 8.52083 13.4452H7.47917C6.90417 13.4452 6.4375 13.9055 6.4375 14.4726C6.4375 15.0397 6.90417 15.5 7.47917 15.5H8.52083C9.09583 15.5 9.5625 15.0397 9.5625 14.4726ZM3 12.0069H2.16667C1.24583 12.0069 0.5 11.2712 0.5 10.363V7.89726C0.5 6.98904 1.24583 6.25343 2.16667 6.25343H3C3.46 6.25343 3.83333 6.62165 3.83333 7.07535V11.1849C3.83333 11.6386 3.46 12.0069 3 12.0069Z"
              stroke="#F5F5F5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button type="button" className="w-full h-[44px] flex items-center justify-center bg-[#5A42E3] rounded-full">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6524 9.70171L12.3532 8.00005L10.6524 6.29838M5.35087 9.70171L3.65004 8.00005L5.35087 6.29838M8.59155 5.08337L7.04155 10.9167M3.83337 14.6667H12.1667C13.5474 14.6667 14.6667 13.5474 14.6667 12.1667V3.83337C14.6667 2.45266 13.5474 1.33337 12.1667 1.33337H3.83337C2.45266 1.33337 1.33337 2.45266 1.33337 3.83337V12.1667C1.33337 13.5474 2.45266 14.6667 3.83337 14.6667Z"
              stroke="#F5F5F5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
