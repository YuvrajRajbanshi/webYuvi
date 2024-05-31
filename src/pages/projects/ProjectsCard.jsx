import React from "react";
import background1 from "../../../public/photos/image.png";
import { FaGithub } from "react-icons/fa";

const ProjectsCard = ({ img, title, about }) => {
  return (
    <div className=" mt-5">
      <div className=" flex items-center justify-center flex-wrap">
        <div className=" bg-gray-500 h-[300px] w-[300px] p-4  rounded-md">
          <img src={background1} alt="" />
          <h1 className="font-semibold font-serif mt-4">Netflix Clone</h1>

          <p className=" text-[#1C1E53]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            architecto.
          </p>
          <div className=" flex justify-between mt-3">
            <button className=" underline hover:text-xl">View</button>
            <button>
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
