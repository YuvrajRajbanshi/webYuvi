import React from "react";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import Photos from "./Photos";
import About from "./About";
import { CiGlobe } from "react-icons/ci";
import { BsDatabaseFill } from "react-icons/bs";
import { SiBackendless } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { MdOutlineCodeOff } from "react-icons/md";
import SkillCards from "./skill/SkillCards";
import ProjectsCard from "./projects/ProjectsCard";
import AboutSkills from "./AboutSkills/AboutSkills";
import project1 from "../../public/photos/Project1.jpg";
import project2 from "../../public/photos/project2.jpg";
import project3 from "../../public/photos/project3.jpg";
import project4 from "../../public/photos/project4.jpg";

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
          icons={<CiGlobe />}
          technology={"Web Development"}
          skills={
            "As a frontend developer, I create dynamic and user-centric interfaces using HTML, CSS, tailwind and JavaScript. With expertise in React, I keep pace with emerging technologies to build robust and innovative web applications."
          }
        />

        <SkillCards
          icons={<FaFigma />}
          technology={"UI/UX Design"}
          skills={
            "I am committed to creating user-friendly designs and staying current with industry trends to provide impactful digital experiences. "
          }
        />
        <SkillCards
          skills={
            "I specialize in database management with a strong focus on SQL and database design. Proficient in MySQL and MongoDB, I optimize data performance and integrity. "
          }
          icons={<BsDatabaseFill />}
          technology={"Database"}
        />
        <SkillCards
          icons={<MdOutlineCodeOff />}
          technology={"Competitive Programming"}
          skills={
            "I have a strong passion for competitive programming, which has significantly honed my problem-solving and algorithmic skills.  I have developed a deep understanding of data structures and algorithms. "
          }
        />
      </div>
      <h1 className=" text-center md:text-4xl text-2xl font-mono font-semibold mt-20">
        Projects
      </h1>

      <div className="md:flex justify-center items-center flex-wrap gap-24 mx-7 p-5">
        <ProjectsCard
          img={project1}
          title={"Netflix Clone"}
          description={
            "This is application is integrated with Api and for backend is firebase"
          }
          gitHubLink={"https://github.com/YuvrajRajbanshi/Netflix-watch"}
          webSiteLink={"https://netflix-watch-cyan.vercel.app/"}
        />
        <ProjectsCard
          img={project2}
          title={"Food Application"}
          description={"The application technology is redux toolkit   "}
          gitHubLink={"https://github.com/YuvrajRajbanshi/flovaraFood"}
          webSiteLink={"https://flovara-food.vercel.app/"}
        />
        <ProjectsCard
          img={project3}
          title={"E-commerece"}
          description={
            "This basic E-commerence website is design in HTML and CSS"
          }
          gitHubLink={"https://github.com/YuvrajRajbanshi"}
          webSiteLink={"https://yuvrajsinghe-com.netlify.app/"}
        />
        <ProjectsCard
          img={project4}
          title={"Portfolio"}
          description={
            "This is my previous portfolio. Here I have used HTML and CSS"
          }
          gitHubLink={"https://github.com/YuvrajRajbanshi/PortFolio"}
          webSiteLink={"https://port-folio-jade-six.vercel.app/"}
        />
      </div>
    </div>
  );
};

export default Home;
