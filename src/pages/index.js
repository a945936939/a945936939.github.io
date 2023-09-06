import { motion } from "framer-motion";

import { AiFillLinkedin, AiFillGithub, AiFillPlayCircle } from "react-icons/ai";

import Image from "next/image";
import deved from "public/dev-ed-wave.png";
import design from "public/design.png";
import Layout from "./Layout";
import code from "public/code.png";
import android1 from "public/android1.png";
import android2 from "public/android2.png";
import android3 from "public/android3.png";
import consulting from "public/consulting.png";
import futurecity from "public/futurecity.png";
import game1 from "public/game1.png";
import htmlPic from "public/icons/icons8-html-48.png";
import cssPic from "public/icons/icons8-css-48.png";
import jsPic from "public/icons/icons8-javascript-48.png";
import reactPic from "public/icons/icons8-react-native-48.png";
import tailwindPic from "public/icons/icons8-tailwind-css-48.png";
import { useState } from "react";
import Service from "./Service";
import Abilities from "./Abilities";
import CodePage from "./CodePage";
import css from "styled-jsx/css";
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
      <Layout>
        <script
          src="https://kit.fontawesome.com/d6e07d22b6.js"
          crossorigin="anonymous"
        ></script>

        <section className="m-auto min-h-screen  bg-teal-50 p-3 ">
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
          <div className="mx-auto flex items-center justify-center  ">
            <p>tech stack</p>
            <Image src={htmlPic} />
            <Image src={cssPic} />
            <Image src={jsPic} />
            <Image src={reactPic} />
            <Image src={tailwindPic} />
          </div>

          <div className="flex justify-center gap-16 py-3 text-5xl text-gray-600">
            <AiFillLinkedin
              className="transition duration-500 ease-in-out hover:scale-125 hover:cursor-pointer"
              onClick={() =>
                window.open("https://www.linkedin.com/in/truman-guo-946a80204/")
              }
            />

            <AiFillGithub
              className="transition duration-500 ease-in-out hover:scale-125 hover:cursor-pointer"
              onClick={() => window.open("https://github.com/a945936939")}
            />
          </div>
          <div className="relative mx-auto my-10 mt-1 h-32 w-32 overflow-hidden rounded-full bg-gradient-to-b from-teal-700 sm:mt-5 sm:h-48 sm:w-48 md:mt-10 md:h-96 md:w-96">
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1 }}
            >
              <Image src={deved} layout="fill" objectFit="cover" />
            </motion.div>
          </div>
        </section>

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
        <section className="bg-teal-50 px-10 py-10  text-center shadow-lg md:px-20 lg:px-40">
          <div>
            <h3 className="py-1 text-3xl">Work I have done</h3>
            <h3 className="pb-2 pt-8 text-lg font-medium"> Designs</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Design is the key to a great user experience. I can help the team
              to design aesthetic products in
              <span className="text-teal-700"> Web development </span>and some
              <span className="text-teal-700"> Games</span>
            </p>
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
                Emission Tracker
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800">
                Using{" "}
                <span className="text-teal-700">
                  PHP, CSS, Bootstrap, Cloud Deploy
                </span>{" "}
                and built a website which can track your carbon footprint based
                on your destination, and will show the result on our modified
                google map.
              </p>

              <CodePage link=" https://github.com/a945936939/FutureCity" />
            </div>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="flex-1 basis-1/3">
              <h3 className="pb-2 pt-8 text-2xl font-medium"> Fitness app</h3>
              <p className="text-md py-2 leading-8 text-gray-800">
                Built a fitness app on{" "}
                <span className="text-teal-700">Android Platform</span>{" "}
                (demonstrated on emulators)
              </p>
              <CodePage link="https://github.com/a945936939/FIT5046" />
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
                src={game1}
              />
            </div>

            <div className="flex-1 basis-1/3">
              <h3 className="pb-2 pt-8 text-2xl font-medium"> Jump Man</h3>
              <p className="text-md py-2 leading-8 text-gray-800">
                Press the <span className="text-teal-700">spacebar</span> to
                jump to avoid the obstacles.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800">
                Using <span className="text-teal-700">Unity3D</span> with
                <span className="text-teal-700">C#</span>, deployed on
                itch.io(indie game website)
              </p>
              <div className="flex justify-around text-center">
                <div className="mt-8 flex cursor-pointer select-none">
                  <AiFillPlayCircle
                    className="h-8 w-8"
                    onClick={() => {
                      window.open("https://truman1998.itch.io/jump-man");
                    }}
                  />
                  <p
                    onClick={() => {
                      window.open("https://truman1998.itch.io/jump-man");
                    }}
                    className="font-burtons  text-2xl underline underline-offset-8"
                  >
                    Play
                  </p>
                </div>
                <CodePage link="https://github.com/a945936939/Prototype3" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
