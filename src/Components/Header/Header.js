//HOOKS
import React, { useState } from "react";
// REACT ROUTER DOM
import { Link } from "react-router-dom";

//IMGS
import logo from "../../imgs/Logo.png";

//ICONS
import { SlBag } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-white shadow-md p-6 fixed w-full z-10 top-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link className="text-black no-underline hover:text-white hover:no-underline">
            <span>
              <img src={logo} alt="logo" className=" w-24 h-24" />
            </span>
          </Link>
        </div>

        <div className="block lg:hidden">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
            onClick={toggleNavigation}
          >
            <RxHamburgerMenu />
          </button>
        </div>

        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "" : "hidden"
          } lg:block pt-6 lg:pt-0`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link className="inline-block py-2 px-4 text-white no-underline">
                Active
              </Link>
            </li>
            <li className="mr-3">
              <Link className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
                Login
              </Link>
            </li>
            <li className="mr-3">
              <Link className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
                Sobre-Nos
              </Link>
            </li>
            <li className="mr-3">
              <Link className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
                Contate-nos
              </Link>
            </li>
            <li className="mr-12 ml-12 relative">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer flex absolute "
              >
                <SlBag className="text-2xl" />
                <div className="bg-red-500 absolute -right-2 -bottom-1 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                  {/* {itemAmount} */}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container shadow-lg mx-auto bg-white mt-24 md:mt-18"></div>
    </header>
  );
};

export default Header;
