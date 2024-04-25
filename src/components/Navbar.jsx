import { AiOutlineScan } from "react-icons/ai";
import { BiStoreAlt } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import { createElement } from "react";
import { TbPhoneCall } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { TbLogin } from "react-icons/tb";
import { TbQuestionMark } from "react-icons/tb";

const Navbar = () => {
  const nav = [
    {
      link: "/",
      icon: BiHomeAlt,
    },
    {
      link: "/signin",
      icon: TbLogin,
    },
    {
      link: "/formations",
      icon: TbQuestionMark,
    },
    {
      link: "/scan",
      icon: TbPhoneCall,
    },
  ];

  return (
    <div className="flex justify-center w-full">
      <nav
        id="navbar"
        className=" text-white fixed z-20 w-screen sm:w-fit justify-evenly flex items-center xs:gap-3 gap-2 dark:bg-white bg-tertiary px-4 py-2 md:px-2 md:py-2 dark:backdrop-blur-md rounded-t-3xl sm:rounded-full text-dark_primary border-2 dark:border-white border-secondary/30 duration-300 bottom-0 sm:bottom-10"
      >
        {nav.map((item, key) => (
          <NavLink
            key={key}
            to={item.link}
            className={`relative text-xl p-2.5 rounded-full sm:cursor-pointer hover:bg-primary hover:text-white transition-all`}
          >
            {createElement(item.icon)}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
