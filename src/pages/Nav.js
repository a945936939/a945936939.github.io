import React from "react";
import Link from "next/link";
export default function Nav() {
  return (
    <div className="select-none">
      <nav className="flex justify-between bg-gradient-to-br from-slate-950 to-teal-950 px-10 py-10 pb-12 text-white md:px-20 lg:px-40 ">
        <h1 className="mr-3 font-roboto text-xs md:text-2xl">
          TRUMAN PORTFOLIO
        </h1>
        <ul className="flex items-center justify-around">
          <li className="mr-6">
            <Link href="/">Home</Link>
          </li>
          {/* <li className="mr-6">
            <Link href="About">About</Link>
          </li> */}
          <li className="mr-6">
            <Link href="Contact">Contact</Link>
          </li>
        </ul>
        <a
          className="ml-8 rounded-md bg-gradient-to-r from-cyan-500 to-teal-700 px-4 py-2 font-extrabold text-gray-100 transition duration-500 ease-in-out hover:scale-110 hover:bg-teal-800 hover:text-white"
          href="/Resume.pdf"
          download
        >
          Resume
        </a>
      </nav>
    </div>
  );
}