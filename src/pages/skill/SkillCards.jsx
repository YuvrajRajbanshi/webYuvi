import React from "react";

const SkillCards = ({ Heading, skills, icons, technology }) => {
  return (
    <div className=" ">
      <h1 className=" p-4 text-center text-3xl font-serif ">{Heading}</h1>
      <div className="flex items-center justify-center mb-4 ">
        <div className="dark:bg-white text-white dark:text-black bg-gray-600 w-[250px] h-[250px] rounded-sm flex flex-col items-center gap-4 p-8">
          <span className=" shadow-lgwww">
            {/* <CiGlobe className=" text-4xl   " /> */}
            {icons}
          </span>
          <h1>{technology}</h1>
          <p className="text-center">{skills}</p>
        </div>
      </div>
    </div>
  );
};
export default SkillCards;
