import React from "react";
import Language from "./language/Language";
import AboutSkills from "./AboutSkills/AboutSkills";

const About = () => {
  return (
    <>
      <div className="  ">
        <AboutSkills />
      </div>
      <div className=" dark:text-white dark:bg-[#2f2f2f] p-20">
        <h1 className=" text-center  text-2xl md:text-4xl mt-10 md:mt-0 font-medium font-mono ">
          Skill
        </h1>
        <div className=" flex items-center  justify-center flex-wrap">
          <Language />
          <Language />
          <Language />
        </div>
      </div>
    </>
  );
};
export default About;
