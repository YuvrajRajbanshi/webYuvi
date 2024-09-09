import React from "react";
import Typewriter from "typewriter-effect";
import Photos from "../Photos";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AboutSkills = () => {
  return (
    <div className=" dark:text-white dark:bg-[#2f2f2f] h-[80vh] md:h-[70vh] ">
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
                    "Backend Developer ",
                    "Student",
                  ],
                  autoStart: true,
                  loop: true,
                  cursorStyle: "|",
                }}
              />
            </span>
          </h1>
          <p className="md:w-[60%] w-[90%] font-mono">
            I am passionate about developing efficient and scalable software
            solutions. My goal is to become a proficient software engineer who
            can contribute to impactful projects and continuously learn and grow
            in the field. I am particularly interested in web development and
            artificial intelligence.
          </p>
          <div className=" flex  items-center gap-6 mt-4">
            <Link to="https://github.com/YuvrajRajbanshi">
              <FaGithub />
            </Link>
            <Link to="https://www.linkedin.com/in/yuvraj-singh-893845259/">
              <FaLinkedin />
            </Link>
            <Link to="https://www.instagram.com/yuvraj_singh_49/">
              <FaSquareInstagram />
            </Link>
          </div>
        </div>
      </div>
      <Photos />
    </div>
  );
};

export default AboutSkills;
