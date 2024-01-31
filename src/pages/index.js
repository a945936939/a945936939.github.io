import { motion } from "framer-motion";

import { AiFillLinkedin, AiFillGithub, AiFillPlayCircle } from "react-icons/ai";

import Image from "next/image";
import youtube from "public/youtube.png";
import design from "public/design.webp";
import Layout from "./Layout";
import code from "public/code.webp";
import android1 from "public/android1.webp";
import android2 from "public/android2.webp";
import android3 from "public/android3.webp";
import consulting from "public/consulting.webp";
import futurecity from "public/futurecity.webp";
import game1 from "public/game1.webp";

import { useState } from "react";
import Service from "./Service";
import Abilities from "./Abilities";
import CodePage from "./CodePage";
import Personalintro from "./Personalintro";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  console.log(process.env.OPENAI_API_KEY);
  const content1 =
    "React.js, Tailwind, HTML, Javascript, CSS, Next.js, Node.js, Express.js, Bootstrap, Git, Github, Vercel, Java, C#, C++... Knowledge with mainstream tech stacks.";
  const content2 =
    "I possess a keen interest in design and hold a certain level of understanding regarding product design.";
  const content3 =
    "Developing games is a hobby of mine, and I've created several games in my spare time, using different tech stacks.";
  const title1 = "Web Development";
  const title2 = "Design";
  const title3 = "Game Development";
  const [darkMode, setIsDark] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Layout>
        <section className="m-auto  bg-[#00424a]  ">
          <Personalintro />
        </section>
        <section>
          <div className="relative mx-auto bg-white bg-opacity-50 py-24  shadow-xl after:blur-2xl">
            <div className="slider clear-none mx-auto flex items-center justify-center gap-24 hover:  ">
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
              />
              <img
                width={96}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              />
            </div>
          </div>
        </section>
        <section id="About">
          <About />
        </section>

        <section className="bg-white px-10 py-40 pb-10 md:px-20 lg:px-40">
          <Abilities />
          <div className="my-10 flex flex-col md:gap-5 lg:flex-row ">
            <Service content={content1} title={title1} src={design} />
            <Service content={content2} title={title2} src={code} />
            <Service content={content3} title={title3} src={consulting} />
          </div>
        </section>

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
                Using
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
                Built a fitness app on Android Android Studio,
                <span className="text-teal-700">using Java and XML</span>
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
                src={youtube}
              />
            </div>

            <div className="flex-1 basis-1/3">
              <h3 className="pb-2 pt-8 text-2xl font-medium">
                {" "}
                Youtube Home Page Clone
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800">
                Using React, Tailwind built a{" "}
                <span className="text-teal-700">youtube</span> responsive web
                page,built with React & Tailwind in T3 Stack.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800">
                Note. It is{" "}
                <span className="text-teal-700">static responsive webpage</span>{" "}
                , suitable for mobile phones.{" "}
              </p>
              <div className="flex justify-around text-center">
                <div className="mt-8 flex cursor-pointer select-none">
                  <AiFillPlayCircle
                    className="h-8 w-8"
                    onClick={() => {
                      window.open("https://youtube-black-five.vercel.app/");
                    }}
                  />
                  <p
                    onClick={() => {
                      window.open("https://youtube-black-five.vercel.app/");
                    }}
                    className="font-burtons  text-2xl underline underline-offset-8"
                  >
                    Browse
                  </p>
                </div>
                <CodePage link="https://github.com/a945936939/youtube" />
              </div>
            </div>
          </div>
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </Layout>
    </div>
  );
}
