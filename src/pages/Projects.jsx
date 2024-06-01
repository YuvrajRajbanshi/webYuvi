import React from "react";
import ProjectsCard from "./projects/ProjectsCard";

const Projects = () => {
  return (
    <div className=" dark:text-white dark:bg-[#2f2f2f] p-10  ">
      <div className=" flex items-center  justify-center flex-row flex-wrap gap-10">
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </div>
  );
};

export default Projects;
