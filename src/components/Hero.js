import React, { useState } from "react";
// import Curve from "./Curve";
// import curve from "../images/wave.svg";
import blb1 from "../images/blob-bl.svg";
import blb2 from "../images/blob-or.svg";
import heroImg from "../images/hero-img.webp";
const Hero = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleHover1 = () => {
    setIsHovered1(true);
  };
  const handleHover2 = () => {
    setIsHovered2(true);
  };

  const handleBlur1 = () => {
    setIsHovered1(false);
  };

  const handleBlur2 = () => {
    setIsHovered2(false);
  };
  return (
    <div className=" py-3 px-8 bg-img pb-36">
      <div className="flex flex-col sm:flex-row   justify-center  items-start">
        <div className="border-2 text-white   border-red-600 lg:w-[616px]">
          <div className="flex flex-col justify-center items-start py-10 gap-10">
            <div className="font-bold text-xl">
              Technology & Software Development
            </div>
            <div className="font-bold text-5xl">
              Offering Smart IT And Software Solutions{" "}
            </div>
            <div className="text-xl">
              Ever since the 1500s, when an unkown is simply dummy text th
              printing. Dolor sit amet, consectetur adipisicing elit, sed do
              eius
            </div>
            <div className="flex items-center gap-4">
              <button
                onMouseEnter={handleHover1}
                onMouseLeave={handleBlur1}
                onFocus={handleHover1}
                onBlur={handleBlur1}
                className={` cursor-pointer bg-gradient-to-br from-orange-500 via-red-500 to-red-700 text-white font-bold h-[56px] max-sm:text-sm py-[11px] px-[33px] sm:py-[11px] sm:px-[33px] rounded 
              transition-all duration-300 ${
                isHovered1 ? "-translate-y-2" : ""
              } hover:-translate-y-2 
              `}
              >
                Get Started
              </button>

              <button
                className={`h-[56px] cursor-pointer max-sm:text-sm sm:py-[11px] sm:px-[33px] bg-white text-orange-600  font-bold py-[11px] px-[33px] rounded transition-all duration-300 ${
                  isHovered2 ? "-translate-y-2" : ""
                } `}
                onMouseEnter={handleHover2}
                onMouseLeave={handleBlur2}
                onFocus={handleHover2}
                onBlur={handleBlur2}
              >
                How We Work
              </button>
            </div>
          </div>
        </div>
        <div className="relative  lg:w-[616px] border-2 border-red-600">
          <div className="absolute lg:-left-24 -top-10  sm:w-10/12">
            <img
              src={blb1}
              alt="blb"
              height={700}
              width={700}
              className="blob-gif w-[1200px]"
            />
          </div>

          <div className="absolute sm:w-10/12 lg:-left-32 -top-10">
            <img
              src={blb2}
              alt="blb"
              height={700}
              width={700}
              className="blob-gif-2 w-[1400px]"
            />
          </div>

          <div className="absolute top-[4rem] left-[3.5rem] sm:top-[3rem] sm:-left-9">
            <img
              src={heroImg}
              alt="blb"
              className=" w-[280px] h-[280px] sm:w-[390px] sm:h-[370px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
