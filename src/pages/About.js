import React from "react";
import Layout from "./Layout";
import Image from "next/image";
import Truman from "/public/T.webp";
import Truman2 from "/public/T2.webp";
export default function About() {
  return (
    <div className="flex h-screen flex-col bg-white pb-60 md:flex-row">
      <div className="m-auto w-1/4 transition-all ease-in-out hover:rotate-12">
        <Image
          fill={false}
          style={{
            transform: `translateY(145px) translateX(105px)`,
            borderRadius: `50px`,
            width: `70%`,
          }}
          src={Truman2}
        />
        <Image
          fill={false}
          src={Truman}
          style={{ borderRadius: `50px`, width: `70%` }}
        />
      </div>

      <div className="m-auto w-5/6 md:w-1/2 lg:w-1/4">
        <p className="text-6xl font-extrabold text-teal-600">About Me</p>
        <p className="my-5 text-lg">
          I graduated in software engineering from Melbourne and am passionate
          about designing visually impressive webpages. My strengths are in
          creating aesthetically pleasing and highly functional websites,
          applying my development skills to innovate and craft unique products.
        </p>
        <p className=" my-3 text-lg">
          In my leisure time, I engage in playing video games and devote some
          time to game development. I also keep myself updated with the latest
          trending technologies.
        </p>
        <div className="flex flex-col text-xl md:flex-row">
          <div className="mr-6 flex-col justify-between  ">
            <div className="my-3">
              <p className="font-black text-teal-800">Name</p>
              <p>Zhipeng Guo</p>
            </div>
            <div className="my-3">
              <p className="font-black text-teal-800">Education</p>
              <p>Master Degree</p>
            </div>
          </div>
          <div className="flex-col justify-between ">
            <div className="my-3">
              <p className="font-black text-teal-800">Email address</p>
              <p>trumangzp@gmail.com</p>
            </div>
            <div className="my-3">
              <p className="font-black text-teal-800">Expertise</p>
              <p>Web programing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
