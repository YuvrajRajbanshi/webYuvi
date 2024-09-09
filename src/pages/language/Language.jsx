import React from "react";
import { BiLogoNetlify } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";

import Button from "./Button";

const Language = ({ Technology }) => {
  return (
    <div className="flex items-center justify-center p-10 ">
      <div className="bg-gray-500 h-[250px] w-[300px] p-4 rounded-md">
        <h2 className=" text-center text-xl font-serif mb-4">{Technology}</h2>
        <div className=" flex items-center justify-center flex-wrap gap-3 ">
          <Button Name={"HTML"} logo={<FaHtml5 />} />
          <Button Name={"CSS"} logo={<SiCss3 />} />
          <Button Name={"Tailwind"} logo={<SiTailwindcss />} />
          <Button Name={"JavaScript"} logo={<IoLogoJavascript />} />
          <Button Name={"React.js"} logo={<RiReactjsFill />} />
        </div>
      </div>
    </div>
  );
};

export default Language;
