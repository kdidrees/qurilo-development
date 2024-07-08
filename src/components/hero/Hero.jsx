import React, { useState } from "react";
import headerimg from "../../assets/images/headerimg.png";

const Hero = () => {
  return (
    <div className="relative pt-48 pb-12   bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
      <div className="absolute inset-0 z-0">
        <img className="object-cover w-full h-full" src={headerimg} alt="" />
      </div>

      <div className="relative z-10">
        <div className="md:text-end text-center px-10">
          <h1 className="text-white md:text-5xl z-20">Website Development</h1>
        </div>
        <div className="px-6  sm:px-8 lg:mx-10 max-w-7xl">
          <div className="w-full lg:w-2/3 xl:w-1/2">
            {/* <h1 className="font-sans text-base font-normal tracking-tight text-white text-opacity-70">Master the basics of baking</h1> */}
            <p className="md:mt-28 mt-6 font-sans font-semibold  md:text-6xl  text-white  md:leading-[1] md:text-left text-center">
              <span className="md:mt-8">
                We develop <span className="text-pink-400">amazing</span>
              </span>
              <br />
              <span>Websites for your</span> <br />
              <span>Business to grow.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
