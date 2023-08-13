import { Inter } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillPlayCircle } from "react-icons/ai";

import Image from "next/image";
import deved from "public/dev-ed-wave.png";
import design from "public/design.png";

import code from "public/code.png";
import android1 from "public/android1.png";
import android2 from "public/android2.png";
import android3 from "public/android3.png";
import consulting from "public/consulting.png";
import futurecity from "public/futurecity.png";
import game1 from "public/game1.png";
import { useState } from "react";
import Service from "./Service";
import Abilities from "./Abilities";

export default function Home() {
  const content1 =
    "After years of training and practice, I have become a full-stack developer with a strong sense of design.";
  const content2 =
    "I also have a strong interest in design, and I have a certain understanding of the design of the product.";
  const content3 =
    "game development is my hobby, I also developed several games during my free time.";
  const title1 = "Web Development";
  const title2 = "Design";
  const title3 = "Game Development";
  const [darkMode, setIsDark] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white bg-[url('/bg.png')]  bg-cover ">
        <nav className="py-10 pb-12 flex justify-between text-white rounded-md bg-gradient-to-br from-slate-950 to-teal-950 px-10 md:px-20 lg:px-40 ">
          <h1 className="text-2xl font-burtons ">DEVEOPED BY TRUMAN</h1>

          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setIsDark(!darkMode)}
                className="cursor-pointer text-2xl"
              />
            </li>
            <li className="  transition duration-500 ease-in-out  hover:scale-125">
              <a
                className="transition duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8   hover:text-teal-900 hover:bg-teal-800"
                href="/public/Resume.pdf"
                download
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="px-1 py-1 md:px-20 lg:px-40 backdrop-blur-sm  ">
          <section className="min-h-screen  rounded-2xl bg-teal-50 my-10 p-3 ">
            <div className="text-yellow-950 text-center p-10 md:p-20">
              <h2 className="text-5xl py-2 text-teal-700 font-medium md:text-6xl">
                TRUMAN GUO
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl">Software Engineer.</h3>
              <p className="text-md py-5 leading-8 text-gray-800 md-text-xl max-w-lg mx-auto">
                Being Passionate,being innovative,I am a graduate software
                engineer who loves programming in Web and Games.
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <AiFillLinkedin
                className="hover:cursor-pointer  transition duration-500 ease-in-out  hover:scale-125"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/truman-guo-946a80204/"
                  )
                }
              />

              <AiFillGithub
                className="hover:cursor-pointer  transition duration-500 ease-in-out  hover:scale-125"
                onClick={() => window.open("https://github.com/a945936939")}
              />
            </div>
            <div className="relative bg-gradient-to-b from-teal-500 rounded-full  mt-1 sm:mt-5 md:mt-10 mx-auto w-32 h-32 overflow-hidden md:h-96 md:w-96 sm:w-48 sm:h-48">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </section>
          <section className="pb-10 rounded-2xl bg-teal-50 my-10 p-3">
            <Abilities />
            <div className="flex flex-col lg:flex-row md:gap-5 ">
              <Service content={content1} title={title1} src={design} />
              <Service content={content2} title={title2} src={code} />
              <Service content={content3} title={title3} src={consulting} />
            </div>
          </section>
          <section className="rounded-2xl shadow-lg px-10 bg-teal-50 my-10 p-3">
            <div>
              <h3 className="text-3xl py-1">Portfolio</h3>
              <h3 className="text-lg font-medium pt-8 pb-2"> Designs</h3>
              <p className="text-md py-2 leading-8 text-gray-800">
                Design is the key to a great user experience. I can help the
                team to design aesthetic products in
                <span className="text-teal-500"> Web development </span>and some
                <span className="text-teal-500"> Games</span>
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={game1}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <h3 className="text-2xl font-medium pt-8 pb-2"> Jump Man</h3>
                <p className="text-md py-2 leading-8 text-gray-800">
                  Press the <span className="text-teal-500">spacebar</span> to
                  jump to avoid the obstacles.
                </p>
                <p className="text-md py-2 leading-8 text-gray-800">
                  Using <span className="text-teal-500">Unity3D</span> with{" "}
                  <span className="text-teal-500">C#</span>, deployed on
                  itch.io(indie game website)
                </p>
                <div className="flex justify-center text-center">
                  <AiFillPlayCircle
                    className="w-36 h-36 cursor-pointer"
                    onClick={() => {
                      window.open("https://truman1998.itch.io/jump-man");
                    }}
                  />
                </div>
                <p className="text-md py-2 leading-8 text-gray-800">
                  Github Link:
                </p>
                <a
                  href="https://github.com/a945936939/Prototype3
"
                  className="text-md py-2 leading-8 text-gray-800 cursor-pointer hover:underline"
                >
                  https://github.com/a945936939/Prototype3
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <h3 className="text-2xl font-medium pt-8 pb-2"> Fitness app</h3>
                <p className="text-md py-2 leading-8 text-gray-800">
                  Built a fitness app on{" "}
                  <span className="text-teal-500">Android Platform</span>{" "}
                  (demonstrated on emulators)
                </p>

                <p className="text-md py-2 leading-8 text-gray-800">
                  Github Link(private visibility , will change to public if
                  wants to have a look):
                </p>
                <a
                  href="https://github.com/a945936939/Prototype3
"
                  className="text-md py-2 leading-8 text-gray-800 cursor-pointer hover:underline"
                >
                  https://github.com/a945936939/FIT5046
                </a>
              </div>
              <div className="basis-1/7 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={android1}
                />
              </div>
              <div className="basis-1/7 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={android2}
                />
              </div>
              <div className="basis-1/7 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={android3}
                />
              </div>
            </div>

            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={futurecity}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <h3 className="text-2xl font-medium pt-8 pb-2">
                  {" "}
                  Emission Tracker
                </h3>
                <p className="text-md py-2 leading-8 text-gray-800">
                  Using{" "}
                  <span className="text-teal-500">
                    PHP, CSS, Bootstrap, Cloud Deploy
                  </span>{" "}
                  and built a website which can track your carbon footprint
                  based on your destination, and will show the result on our
                  modified google map.
                </p>

                <p className="text-md py-2 leading-8 text-gray-800">
                  Github Link(private visibility , will change to public if
                  wants to have a look):
                </p>
                <a
                  href="https://github.com/a945936939/Prototype3
"
                  className="text-md py-2 leading-8 text-gray-800 cursor-pointer hover:underline"
                >
                  https://github.com/a945936939/FutureCity
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      ;
    </div>
  );
}
