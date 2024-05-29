import React from "react";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import back from "../../public/photos/back.png";
import front from "../../public/photos/front.png";
import yuvraj from "../../public/photos/yuvi.png";
const Home = () => {
  return (
    <div className="dark:text-white dark:bg-[#2f2f2f] ">
      <div className="flex items-center justify-center flex-col h-[60vh]  mx-auto w-[80%] md:w-[60%] ">
        <div>
          <h1 className="flex  items-start flex-col gap-3">
            <span className="text-gray-500 font-mono text-5xl font-bold">
              Hi, I am
            </span>
            <span className=" text-4xl font-serif font-semibold text-gray-700 dark:text-white">
              <Typewriter
                options={{
                  strings: [
                    "Yuvraj Singh ",
                    "Web Developer ",
                    "UI/UX designer ",
                    "Student",
                  ],
                  autoStart: true,
                  loop: true,
                  cursorStyle: "|",
                }}
              />
            </span>
          </h1>
          <p className="md:w-[60%] w-[90%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
            repellat rerum! Perspiciatis facilis minima provident laboriosam,
            unde vitae deserunt est ipsam distinctio voluptates quaerat! Minima
            vel, similique doloremque repellat
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center mt-12 ">
        <img
          src={back}
          className="w-[40%] absolute  animate-move-left-right md:w-[20%] md:right-40 md:bottom-[275px]"
          alt=""
        />
        <img
          src={front}
          className="w-[35%] mt-5 absolute md:w-[16%] md:right-40 md:bottom-[275px] "
          alt=""
        />
        <img
          src={yuvraj}
          className="w-[35%] bottom-11 mt-5 mix-blend-normal absolute md:w-[16%] md:right-40 md:bottom-[275px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
