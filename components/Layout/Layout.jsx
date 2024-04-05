import { useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { Navbar } from "..";

export default function Layout({ children, path }) {
  const [navbar, setNavbar] = useState(false);

  const handleNav = () => {
    setNavbar(!navbar);
  };
  return (
    <div className="w-full h-auto flex justify-start items-start bg-[#15131E]">
      <Navbar path={path} navbar={navbar} handleNav={handleNav} />
      <div className="w-full h-auto relative">
        <div className="absolute top-4 left-4 md:hidden block">
          {" "}
          <button
            type="button"
            onClick={handleNav}
            className="w-full h-auto flex justify-start items-center"
          >
            <MdOutlineMenuOpen size={24} color={"#f5f5f5"} className="" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
