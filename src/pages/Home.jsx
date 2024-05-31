import React from "react";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import Photos from "./Photos";
import About from "./About";
import { CiGlobe } from "react-icons/ci";
import { TbCrown } from "react-icons/tb";
import { SiBackendless } from "react-icons/si";
import SkillCards from "./skill/SkillCards";
import ProjectsCard from "./projects/ProjectsCard";

const Home = () => {
  return (
    <div className="dark:text-white dark:bg-[#2f2f2f] ">
      <div className="flex items-center justify-center flex-col h-[60vh]  mx-auto w-[80%] md:w-[60%] ">
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

      <div>
        <h1 className=" text-center  font-semibold  mt-40 md:text-4xl text-2xl font-mono  ">
          Services
        </h1>
      </div>
      <div className="md:flex items-center justify-center md:gap-20 flex-wrap">
        <SkillCards
          skills={"Hi, I am yuvraj. I am a front end developer "}
          icons={<CiGlobe />}
          technology={"Web Development"}
        />

        <SkillCards
          skills={
            "Hi, I am yuvraj. I am a front end developer I can be good coder in futute "
          }
          icons={<TbCrown />}
          technology={"UI/UX Design"}
        />
        <SkillCards
          skills={"Hi, I am yuvraj. I am a front end developer "}
          icons={<SiBackendless />}
          technology={"Database"}
        />
        <SkillCards
          skills={"Hi, I am yuvraj. I am a front end developer "}
          icons={<SiBackendless />}
          technology={"Database"}
        />
      </div>
      <h1 className=" text-center md:text-4xl text-2xl font-mono font-semibold mt-20">
        Projects
      </h1>

      <div className="md:flex justify-center items-center flex-wrap gap-24 mx-7">
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </div>
  );
};

export default Home;
