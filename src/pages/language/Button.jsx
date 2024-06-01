import React from "react";
import { BiLogoNetlify } from "react-icons/bi";

const Button = () => {
  return (
    <div>
      <button
        className="flex items-center justify-center  gap-4 p-1  border-2 border-whitebg-transparent
             rounded-lg transition duration-300 ease-in-out focus:outline-none "
      >
        <BiLogoNetlify className=" text-2xl text-white" />
        <span className="text-gray-200 text-xl">Netlify</span>
      </button>
    </div>
  );
};

export default Button;
