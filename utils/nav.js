import { TbSmartHome } from "react-icons/tb";
import { AiFillSignal } from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { BsGlobe } from "react-icons/bs";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { TfiJoomla } from "react-icons/tfi";

// 605D6E
// 7E67FF

export const navItems = [
  {
    titie: "Home",
    route: "/",
    icon: <TbSmartHome size={24} />,
  },
  {
    titie: "Drainer",
    route: "/drainer",
    icon: <AiFillSignal size={24} />,
  },
  {
    titie: "Lend",
    route: "/lend",
    icon: <BsCalendarEvent size={24} />,
  },
  {
    titie: "Modal",
    route: "/modal",
    icon: <HiOutlineShieldCheck size={24} />,
  },
  {
    titie: "Domains",
    route: "/domains",
    icon: <BsGlobe size={24} />,
  },
  {
    titie: "Cloaka",
    route: "#",
    icon: <IoFileTrayFullOutline size={24} />,
  },
  {
    titie: "Keitaro",
    route: "#",
    icon: <TfiJoomla size={24} />,
  },
];
