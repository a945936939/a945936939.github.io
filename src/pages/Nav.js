import React from "react";
import Link from "next/link";
export default function Nav() {
  return (
    <div>
      <nav className="flex justify-between bg-gradient-to-br from-slate-950 to-teal-950 px-10 py-10 pb-12 text-white md:px-20 lg:px-40 ">
        <h1 className="font-roboto text-2xl ">TRUMAN PORTFOLIO</h1>
        <ul className="flex items-center justify-around">
          <li className="mr-6">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-6">
            <Link href="About">About</Link>
          </li>
          <li className="mr-6">
            <Link href="Contact">Contact</Link>
          </li>
        </ul>
        <a
          className="ml-8 rounded-md bg-gradient-to-r from-cyan-500 to-teal-700 px-4 py-2 text-white transition duration-500 ease-in-out hover:bg-teal-800 hover:text-teal-900"
          href="/public/Resume.pdf"
          download
        >
          Resume
        </a>
      </nav>
    </div>
  );
}
