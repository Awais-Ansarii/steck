import React, { useState } from "react";
import BTN from "./BTN";
import logo from "../images/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosAdd, IoIosSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import SearchContainer from "./SearchContainer";
const Navbar = () => {
  const [flag, setFlag] = useState(false);
  const [isCartFocused, setIsCartFocused] = useState(false);
  const [color, setcolor] = useState(false);
  const [searchClick, setSearchClicked] = useState(false);

  const changeNavClr = () => {
    if (window.scrollY > 500) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };

  window.addEventListener("scroll", changeNavClr);

  const handleCartFocus = () => {
    setIsCartFocused(true);
  };

  const handleCartBlur = () => {
    setIsCartFocused(false);
  };
  return (
    <div
      className={
        color
          ? ` bg-clr sticky  top-0 px-10 w-screen  font-bold  py-5`
          : ` text-white font-bold w-full bg-img px-10    py-5`
      }
    >
      <div className="flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-5 max-sm:hidden">
          <h1>home </h1>
          <h1>about </h1>
          <h1>contact</h1>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <IoIosSearch
              size={30}
              onClick={() => setSearchClicked(true)}
              className="cursor-pointer"
            />
          </div>

          <div
            className="relative"
            onMouseEnter={handleCartFocus}
            onMouseLeave={handleCartBlur}
          >
            <AiOutlineShoppingCart size={30} className="cursor-pointer" />

            {isCartFocused && (
              <div className="absolute z-10 top-full right-0 bg-white text-black p-20 w-260">
                No products in cart
              </div>
            )}
            <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs">
              0
            </div>
          </div>
        </div>

        {flag ? (
          <ImCancelCircle
            size={30}
            className="cursor-pointer  sm:hidden"
            onClick={() => setFlag(false)}
          />
        ) : (
          <FiMenu
            size={30}
            className="cursor-pointer  sm:hidden"
            onClick={() => setFlag(true)}
          />
        )}
      </div>

      <div className="w-full">
        {searchClick && <SearchContainer setSearchClicked={setSearchClicked} />}
      </div>

      {flag && (
        <div className="sm:hidden">
          <div className="flex flex-col  justify-center  py-5 gap-5 ">
            <div className="border border-gray-800" />
            <h1>home </h1>
            <h1>about </h1>
            <h1>contact</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
