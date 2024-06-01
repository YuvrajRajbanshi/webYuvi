import React from "react";
import ProjectsCard from "./projects/ProjectsCard";
import project1 from "../../public/photos/Project1.jpg";
import project2 from "../../public/photos/project2.jpg";
import project3 from "../../public/photos/project3.jpg";
import project4 from "../../public/photos/project4.jpg";

const Projects = () => {
  return (
    <div className=" dark:text-white dark:bg-[#2f2f2f] p-20 h-[80%] ">
      <div className=" flex items-center  justify-center flex-row flex-wrap gap-10">
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

export default Projects;
