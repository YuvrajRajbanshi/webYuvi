import React from "react";
import Language from "./language/Language";
import AboutSkills from "./AboutSkills/AboutSkills";
import Button from "./language/Button";
import Language1 from "./language/Language1";
import Language2 from "./language/Language2";

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
          <Language Technology={"Frontend"} />
          <Language1 Technology={"Backend"} />
          <Language2 Technology={"Others"} />
        </div>
      </div>
    </>
  );
};
export default About;
