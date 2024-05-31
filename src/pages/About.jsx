import React from "react";
import { CiGlobe } from "react-icons/ci";
import { TbCrown } from "react-icons/tb";
import SkillCards from "./skill/SkillCards";
import { SiBackendless } from "react-icons/si";
const About = ({ Heading, skills, icons, technology }) => {
  return (
    <div>
      <div className="dark:bg-white text-white dark:text-black bg-gray-600 gap-4">
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
      </div>
    </div>
  );
};
export default About;
