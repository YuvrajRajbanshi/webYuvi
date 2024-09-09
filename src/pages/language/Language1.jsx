import React from "react";
import { FaNodeJs } from "react-icons/fa6";
import Button from "./Button";
import { SiMongodb } from "react-icons/si";
import { SiAppwrite } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const Language1 = ({ Technology }) => {
  return (
    <div className="flex items-center justify-center p-10 ">
      <div className="bg-gray-500 h-[250px] w-[300px] p-4 rounded-md">
        <h2 className=" text-center text-xl font-serif mb-4">{Technology}</h2>
        <div className=" flex items-center justify-center flex-wrap gap-3 ">
          <Button Name={"Node.js"} logo={<FaNodeJs />} />
          <Button Name={"Mongo DB"} logo={<SiMongodb />} />
          <Button Name={"MySql"} logo={<SiMysql />} />
          <Button Name={"Appwrite"} logo={<SiAppwrite />} />
          <Button Name={"Firebase"} logo={<SiFirebase />} />
          <Button Name={"Epress.js"} logo={<SiExpress />} />
        </div>
      </div>
    </div>
  );
};

export default Language1;
