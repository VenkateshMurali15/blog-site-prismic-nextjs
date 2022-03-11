import React from "react";
import HeaderItem from "../header-item";
import {
  HomeIcon,
  VideoCameraIcon,
  DesktopComputerIcon,
  CurrencyRupeeIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon} href="/" />
        <HeaderItem title="About" Icon={UserCircleIcon} href="/about" />
      </div>
      <h1 className="text-5xl text-text-black">Venkatesh Murali</h1>
    </header>
  );
}

export default Header;
