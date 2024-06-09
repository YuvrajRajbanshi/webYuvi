import React from "react";
import { Link } from "react-router-dom";
import background1 from "../../../public/photos/image.png";
import { FaGithub } from "react-icons/fa";

const ProjectsCard = ({ img, title, description, gitHubLink, webSiteLink }) => {
  return (
    <div className=" mt-5  hover:scale-110 transition-all ease-in-out">
      <div className=" flex items-center justify-center flex-wrap">
        <div className=" bg-gray-500 h-[300px] w-[300px] p-4  rounded-md">
          <img src={img} alt="" />
          <h1 className="font-semibold font-serif mt-4"> {title} </h1>

          <p className=" text-[#1C1E53]">{description}</p>
          <div className=" flex justify-between mt-3">
            <button className=" underline hover:text-xl">
              <Link to={webSiteLink}>View</Link>
            </button>
            <button>
              <Link to={gitHubLink}>
                <FaGithub />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
