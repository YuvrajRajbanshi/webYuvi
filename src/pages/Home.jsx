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
import AboutSkills from "./AboutSkills/AboutSkills";

const Home = () => {
  return (
    <div className="dark:text-white dark:bg-[#2f2f2f] ">
      <AboutSkills />

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

      <div className="md:flex justify-center items-center flex-wrap gap-24 mx-7 p-5">
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
