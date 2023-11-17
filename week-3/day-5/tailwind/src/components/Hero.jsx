import React from "react";
import Button from "./Button";
import heroImg from "../assets/hero-img.jpg";

const Hero = () => {
  return (
    <section className="relative">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="text-bk-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
            A simple Bookmark Manager
          </h2>
          <p className="text-bk-grey text-lg text-center lg:text-left mb-6">
            A clean and simple interface to organize your favorite websites.
            Open a new browser tab and see load instantly. Try it for free.
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <Button type="button" color="purple">
              Get it on Chrome
            </Button>
            <Button type="button" color="white">
              Get it on Firefox
            </Button>
          </div>
        </div>
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img
            src={heroImg}
            width={780}
            className="rounded-md w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-[580px] md:h-[100%] lg:w-full lg:h-full"
            alt="a circle bg"
          />
        </div>
        <div className="hidden md:block bg-bk-purple rounded-l-full h-80 w-2/4 absolute right-0 top-32 lg:top-[45px] lg:right-[-150px]"></div>
      </div>
    </section>
  );
};

export default Hero;
