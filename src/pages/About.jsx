import React from "react";
import { CiGlobe } from "react-icons/ci";
import { TbCrown } from "react-icons/tb";
import SkillCards from "./skill/SkillCards";
import { SiBackendless } from "react-icons/si";
import Typewriter from "typewriter-effect";
import Photos from "./Photos";

const About = () => {
  return (
    <div className=" dark:text-white dark:bg-[#2f2f2f]">
      <div className="   flex items-center justify-center flex-col h-[60vh]  mx-auto w-[80%] md:w-[60%] ">
        <div>
          <h1 className="flex  items-start flex-col gap-3">
            <span className="text-gray-500 font-mono text-5xl font-bold">
              Hi, I am
            </span>
            <span className=" text-4xl font-serif font-semibold text-gray-700 dark:text-white">
              <Typewriter
                options={{
                  strings: [
                    "Yuvraj Singh ",
                    "Web Developer ",
                    "UI/UX designer ",
                    "Student",
                  ],
                  autoStart: true,
                  loop: true,
                  cursorStyle: "|",
                }}
              />
            </span>
          </h1>
          <p className="md:w-[60%] w-[90%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
            repellat rerum! Perspiciatis facilis minima provident laboriosam,
            unde vitae deserunt est ipsam distinctio voluptates quaerat! Minima
            vel, similique doloremque repellat
          </p>
          <div className=" flex  items-center gap-6">
            <h1>gihub</h1>
            <h1>Linkdin</h1>
            <h1>Leetcode</h1>
          </div>
        </div>
      </div>
      <Photos />
    </div>
  );
};
export default About;
