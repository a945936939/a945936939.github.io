import React, { useState, useEffect, useRef } from "react";
// import BIRDS from "vanta/dist/vanta.birds.min";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub, AiFillPlayCircle } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import deved from "public/TrumanPhoto.png";
import htmlPic from "public/icons/icons8-html-48.webp";
import cssPic from "public/icons/icons8-css-48.webp";
import jsPic from "public/icons/icons8-javascript-48.webp";
import reactPic from "public/icons/icons8-react-native-48.webp";
import tailwindPic from "public/icons/icons8-tailwind-css-48.webp";
import { motion } from "framer-motion";

export default function Personalintro() {
  // const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       BIRDS({
  //         el: myRef.current,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  //         scale: 1.0,
  //         scaleMobile: 1.0,
  //         backgroundColor: 0x424a,
  //         quantity: 3.0,
  //       }),
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);
  return (
    <>
      <div ref={myRef}>
        <div className="pb-20">
          <div className="flex justify-center gap-10 py-10">
            <a
              className="py-2 text-center text-2xl font-black tracking-wide text-red-500 underline md:text-2xl"
              href="https://trumanportfolio.vercel.app/"
            >
              THIS PORTFOLIO IS OUTDATED, CLICK HERE TO SEE THE NEW ONE!!
            </a>
          </div>
          <div className="bg p-10 text-center text-white md:p-20">
            <h2 className="py-2 text-5xl font-black text-white md:text-6xl">
              TRUMAN GUO
            </h2>
            {/* <Background /> */}
            <div className="text-4xl">
              <Typewriter
                options={{
                  strings: ["Software Engineer.", "Developer", "Desginer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="flex justify-center gap-16 py-3 text-5xl ">
              <AiFillLinkedin
                className="transition duration-500 ease-in-out hover:scale-125 hover:cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/truman-guo-946a80204/",
                  )
                }
              />

              <AiFillGithub
                className="transition duration-500 ease-in-out hover:scale-125 hover:cursor-pointer"
                onClick={() => window.open("https://github.com/a945936939")}
              />
            </div>
            <p className="text-md md-text-xl mx-auto max-w-lg py-5 leading-8  ">
              Being Passionate,being innovative,I am a graduate software
              engineer who loves programming in Web and Games.
            </p>
            <p className="text-md md-text-xl mx-auto max-w-lg py-5 leading-8  ">
              This webpage is built with React.js, Tailwind, with Next.js
              Framework, deployed on Github pages.
            </p>
          </div>

          <div className="relative mx-auto my-32 h-32 w-32 overflow-hidden rounded-full bg-gradient-to-b from-teal-600 py-5 shadow-2xl  sm:mt-5 sm:h-48 sm:w-48 md:mt-10 md:h-96 md:w-96">
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1 }}
            >
              <Image src={deved} layout="fill" objectFit="cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
