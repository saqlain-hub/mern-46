import React from "react";
import img from "../assets/linkedin.png";

const Navbar = () => {
  return (
    <header>
      <nav className="container flex items-center py-4 mt-4 sm:mt-12">
        <div className="py-1 flex flex-column gap-2 items-center">
          <img width={30} src={img} alt="an image" />
          <span className="uppercase text-lg font-bold">Bookmark</span>
        </div>
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-blue uppercase text-xs">
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Contact</li>
          <button type="button" className="">
            Login
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
