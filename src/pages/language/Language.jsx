import React from "react";
import { BiLogoNetlify } from "react-icons/bi";
import Button from "./Button";

const Language = () => {
  return (
    <div className="flex items-center justify-center p-10 ">
      <div className="bg-gray-500 h-[250px] w-[300px] p-4 rounded-md">
        <h2 className=" text-center text-xl font-serif mb-4">Frontend</h2>
        <div className=" flex items-center justify-center flex-wrap gap-3 ">
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Language;
