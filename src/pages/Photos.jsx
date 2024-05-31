import React from "react";
import back from "../../public/photos/back.png";
import front from "../../public/photos/front.png";
import yuvraj from "../../public/photos/yuvi.png";

const Photos = () => {
  return (
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
  );
};

export default Photos;
