import React from "react";
import Link from "next/link";
import Logo from "public/icons/truman-logo.png";
import Image from "next/image";
export default function Nav() {
  return (
    <div className="  select-none">
      <nav className=" flex items-center justify-between  bg-[#00424a] px-10 py-5  text-xs  text-white md:px-20 md:text-lg lg:px-40 ">
        <ul className="mr-6  transition duration-500 ease-in-out hover:scale-110  hover:text-white">
          <Link
            href="/"
            className=" relative  px-2 pt-1 before:absolute before:left-0 before:top-0  before:h-1 before:w-full before:bg-white  before:transition-all  after:absolute after:right-0 after:w-1 after:bg-white after:bg-opacity-0   after:transition-all hover:before:top-full  hover:before:h-1 hover:before:bg-opacity-0 hover:after:right-full hover:after:h-full  hover:after:bg-opacity-100 "
          >
            Home
          </Link>
        </ul>
        <ul className="mr-6  transition duration-500 ease-in-out hover:scale-110  hover:text-white">
          <a
            href="#Contact "
            className=" relative  px-2 pt-1 before:absolute before:left-0 before:top-0  before:h-1 before:w-full before:bg-white  before:transition-all  after:absolute after:right-0 after:w-1 after:bg-white after:bg-opacity-0   after:transition-all hover:before:top-full  hover:before:h-1 hover:before:bg-opacity-0 hover:after:right-full hover:after:h-full  hover:after:bg-opacity-100 "
          >
            Contact
          </a>
        </ul>
        <ul className="mr-6  transition duration-500 ease-in-out hover:scale-110  hover:text-white">
          <a
            href="#About"
            className=" relative  px-2 pt-1 before:absolute before:left-0 before:top-0  before:h-1 before:w-full before:bg-white  before:transition-all  after:absolute after:right-0 after:w-1 after:bg-white after:bg-opacity-0   after:transition-all hover:before:top-full  hover:before:h-1 hover:before:bg-opacity-0 hover:after:right-full hover:after:h-full  hover:after:bg-opacity-100 "
          >
            About
          </a>
        </ul>
        <a
          className="ml-8 rounded-md bg-gradient-to-r from-cyan-500 to-teal-700 px-4 py-2 font-extrabold text-gray-100 transition duration-500 ease-in-out hover:scale-110 hover:bg-teal-800 hover:text-white"
          href="/Resume.pdf"
          download
        >
          RESUME
        </a>
      </nav>
    </div>
  );
}
