import React from "react";
import Link from "next/link";
import Logo from "public/icons/truman-logo.png";
import Image from "next/image";
export default function Nav() {
  return (
    <div className="  select-none">
      <nav className=" flex justify-between   bg-[#00424a]  text-white ">
        <Link href="/">
          {/* <Image
            className="ml-6 mt-6"
            src={Logo}
            alt="logo"
            width={100}
            height={100}
          /> */}
        </Link>

        <div className="flex px-10 py-5 md:px-20 lg:px-40 ">
          <ul className="flex items-center justify-around text-xs md:text-lg">
            <li className="mr-6  transition duration-500 ease-in-out hover:scale-110  hover:text-white">
              <Link href="/">HOME</Link>
            </li>
            {/* <li className="mr-6">
            <Link href="About">About</Link>
          </li> */}
            <li className="mr-6  transition duration-500 ease-in-out hover:scale-110  hover:text-white">
              <Link href="Contact">CONTACT</Link>
            </li>
          </ul>
          <a
            className="ml-8 rounded-md bg-gradient-to-r from-cyan-500 to-teal-700 px-4 py-2 font-extrabold text-gray-100 transition duration-500 ease-in-out hover:scale-110 hover:bg-teal-800 hover:text-white"
            href="/Resume.pdf"
            download
          >
            RESUME
          </a>
        </div>
      </nav>
    </div>
  );
}
