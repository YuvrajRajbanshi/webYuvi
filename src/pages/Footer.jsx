import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { SiTwitter } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" dark:bg-gray-700 bg-[#2f2f2f] text-white p-10  ">
      <div className=" flex items-center justify-center gap-5 ">
        <div className="   items-center justify-center gap-4">
          <div className=" flex items-center gap-8">
            <Link to="https://www.linkedin.com/in/yuvraj-singh-893845259/">
              <FaLinkedin />
            </Link>
            <Link to="https://x.com/singhrajsingj?t=j6w4FfeoXhesAP2WUixeWQ&s=09">
              <SiTwitter />
            </Link>
            <Link to="https://www.instagram.com/yuvraj_singh_49/">
              <FaSquareInstagram />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100067533970603">
              <FaFacebook />
            </Link>
          </div>
          <div className="flex items-center gap-8 mt-4">
            <Link to="https://github.com/YuvrajRajbanshi">
              <FaGithub />
            </Link>
            <Link to="https://leetcode.com/SinghRajYuvraj/">
              <SiLeetcode />
            </Link>
            <Link to="https://www.hackerrank.com/profile/Yuvraj_Singh347">
              <FaHackerrank />
            </Link>

            <Link to="https://www.geeksforgeeks.org/user/singhrazkgh/">
              <SiGeeksforgeeks />
            </Link>
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
