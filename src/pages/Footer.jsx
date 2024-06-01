import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { SiTwitter } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
const Footer = () => {
  return (
    <div className=" dark:bg-gray-700 bg-[#2f2f2f] text-white p-10  ">
      <div className=" flex items-center justify-center gap-5 ">
        <div className="   items-center justify-center gap-4">
          <div className=" flex items-center gap-8">
            <FaLinkedin className=" cursor-pointer" />
            <SiTwitter className=" cursor-pointer" />
            <BsInstagram className=" cursor-pointer" />
            <FaFacebook className=" cursor-pointer" />
          </div>
          <div className="flex items-center gap-8 mt-4">
            <ImGithub className=" cursor-pointer" />
            <SiLeetcode className=" cursor-pointer" />
            <FaHackerrank className=" cursor-pointer" />
            <SiGeeksforgeeks className=" cursor-pointer" />
          </div>
        </div>
      </div>
      <p className=" text-center mt-10">
        © 2024 Yuvraj singh. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
