import { motion } from "framer-motion";
import { AiFillLinkedin, AiFillGithub, AiFillPlayCircle } from "react-icons/ai";
import Footer from "./Footer";
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
    "After years of training and practice, I have become a developer and familiar with several tech stacks.";
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
      <main className=" font- bg-[url('/campus.png')] bg-cover bg-fixed">
        <div className="backdrop-blur-sm">
          <nav className="flex justify-between bg-gradient-to-br from-slate-950 to-teal-950 px-10 py-10 pb-12 text-white md:px-20 lg:px-40 ">
            <h1 className="font-roboto text-2xl ">TRUMAN PORTFOLIO</h1>

            <ul className="flex items-center">
              {/* <li>
              <BsFillMoonStarsFill
                onClick={() => setIsDark(!darkMode)}
                className="text-2xl cursor-pointer"
              />
            </li> */}
              <li className="transition duration-500 ease-in-out hover:scale-125">
                <a
                  className="ml-8 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white transition duration-500 ease-in-out hover:bg-teal-800 hover:text-teal-900"
                  href="/public/Resume.pdf"
                  download
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <section className="min-h-screen bg-teal-50 p-3">
            <div className="p-10 text-center text-yellow-950 md:p-20">
              <h2 className="py-2 text-5xl font-medium text-teal-700 md:text-6xl">
                TRUMAN GUO
              </h2>
              <h3 className="py-2 text-2xl md:text-3xl">Software Engineer.</h3>
              <p className="text-md md-text-xl mx-auto max-w-lg py-5 leading-8 text-gray-800 ">
                Being Passionate,being innovative,I am a graduate software
                engineer who loves programming in Web and Games.
              </p>
            </div>
            <div className="flex justify-center gap-16 py-3 text-5xl text-gray-600">
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
            <div className="relative mx-auto my-10 mt-1 h-32 w-32 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 sm:mt-5 sm:h-48 sm:w-48 md:mt-10 md:h-96 md:w-96">
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1 }}
              >
                <Image src={deved} layout="fill" objectFit="cover" />
              </motion.div>
            </div>
          </section>

          <div className="m-24 md:m-48 lg:m-96 ">
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1 }}
            >
              <h3 className="py-1 text-center text-xl text-white md:text-2xl lg:text-6xl">
                PASSIONATE INNOVATIVE
              </h3>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <section className="bg-white px-10 py-10 pb-10 md:px-20 lg:px-40">
              <Abilities />
              <div className="my-10 flex flex-col md:gap-5 lg:flex-row ">
                <Service content={content1} title={title1} src={design} />
                <Service content={content2} title={title2} src={code} />
                <Service content={content3} title={title3} src={consulting} />
              </div>
            </section>
          </motion.div>
          <section className="bg-teal-50 px-10 py-10  text-center shadow-lg md:px-20 lg:px-40">
            <div>
              <h3 className="py-1 text-3xl">Work I have done</h3>
              <h3 className="pb-2 pt-8 text-lg font-medium"> Designs</h3>
              <p className="text-md py-2 leading-8 text-gray-800">
                Design is the key to a great user experience. I can help the
                team to design aesthetic products in
                <span className="text-teal-500"> Web development </span>and some
                <span className="text-teal-500"> Games</span>
              </p>
            </div>

            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="flex-1 basis-1/3">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={game1}
                />
              </div>

              <div className="flex-1 basis-1/3">
                <h3 className="pb-2 pt-8 text-2xl font-medium"> Jump Man</h3>
                <p className="text-md py-2 leading-8 text-gray-800">
                  Press the <span className="text-teal-500">spacebar</span> to
                  jump to avoid the obstacles.
                </p>
                <p className="text-md py-2 leading-8 text-gray-800">
                  Using <span className="text-teal-500">Unity3D</span> with{" "}
                  <span className="text-teal-500">C#</span>, deployed on
                  itch.io(indie game website)
                </p>
                <div className="flex justify-around text-center">
                  <div className="flex">
                    <AiFillPlayCircle
                      className="h-8 w-8"
                      onClick={() => {
                        window.open("https://truman1998.itch.io/jump-man");
                      }}
                    />
                    <p className="font-burtons  text-lg underline">play</p>
                  </div>

                  <AiFillGithub
                    className="h-8 w-8"
                    onClick={() => {
                      window.open("https://github.com/a945936939/Prototype3");
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="flex-1 basis-1/3">
                <h3 className="pb-2 pt-8 text-2xl font-medium"> Fitness app</h3>
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
                  className="text-md cursor-pointer py-2 leading-8 text-gray-800 underline hover:text-red-500"
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
              <div className="flex-1 basis-1/3">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={futurecity}
                />
              </div>
              <div className="flex-1 basis-1/3">
                <h3 className="pb-2 pt-8 text-2xl font-medium">
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
                  className="text-md cursor-pointer py-2 leading-8 text-gray-800 underline hover:text-red-500"
                >
                  https://github.com/a945936939/FutureCity
                </a>
              </div>
            </div>
          </section>
          <section>
            <Footer />
          </section>
        </div>
      </main>
    </div>
  );
}
