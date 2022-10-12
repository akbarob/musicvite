import React, { useState } from "react";

import { RiCloseLine } from "react-icons/ri";
import {
  HiOutlineMenu,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
  HiOutlineHashtag,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";

const links = [
  { name: "Discover", to: "/", icon: HiOutlineHome },
  { name: "Around You", to: "/around-you", icon: HiOutlinePhotograph },
  { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
  { name: "Top Charts", to: "/top-charts", icon: HiOutlineHashtag },
];
const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => {
      return (
        <NavLink
          key={item.name}
          to={item.to}
          onClick={() => handleClick && handleClick()}
          className="flex flex-row justify-center items-center my-8 text-md font-medium text-gray-400 hover:text-cyan-400"
        >
          <item.icon className="w-6 h-6 mr-2" />
          {item.name}
        </NavLink>
      );
    })}
  </div>
);

export const SideBar = () => {
  const ToggleMenu = () => {};
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <div className="hidden md:flex flex-col w-[200px] py-10 px-4 bg-[#191624]">
        <img alt="logo_img" src={logo} />
        <NavLinks />
      </div>
      <div className="absolute md:hidden block top-6 right-3 z-10">
        {mobileOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileOpen(true)}
          />
        )}
      </div>
      {mobileOpen ? (
        <div
          className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
            mobileOpen ? "left-0" : "-left-full"
          }`}
        >
          <img alt="logo_img" src={logo} />
          <NavLinks handleClick={() => setMobileOpen(false)} />
        </div>
      ) : null}
    </>
  );
};
