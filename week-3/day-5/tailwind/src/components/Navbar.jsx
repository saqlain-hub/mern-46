import React from "react";
import img from "../assets/linkedin.png";
import menu from "../assets/menu.png";

const Navbar = () => {
  return (
    <header>
      <nav className="container flex items-center py-4 mt-4 sm:mt-12">
        <div className="py-1 flex flex-column gap-2 items-center cursor-pointer">
          <img width={30} src={img} alt="an image" />
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
        <div className="flex sm:hidden flex-1 justify-end">
          <img src={menu} alt="menu" width={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
