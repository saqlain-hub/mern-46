import React from "react";
import icon from "../assets/icon.jpg";

const Navbar = () => {
  return (
    <header>
      <nav className="container flex items-center py-4 mt-4 sm:mt-12">
        <div className="py-1 flex flex-column gap-4 items-center cursor-pointer">
          <img
            className="rounded-md"
            width={40}
            src={icon}
            alt="an icon image"
          />
          <span className="uppercase text-lg font-bold">Bookmark</span>
        </div>
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bk-blue uppercase text-sm">
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Contact</li>
          <button
            type="button"
            className="bg-bk-red text-white rounded-md px-7 py-3 uppercase"
          >
            Login
          </button>
        </ul>
        <div className="flex cursor-pointer sm:hidden flex-1 justify-end">
          <i className="text-2xl fa-solid fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
