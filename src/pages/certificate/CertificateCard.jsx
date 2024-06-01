import React from "react";
import certificate1 from "/public/photos/certificate (1).jpg";
const CertificateCard = () => {
  return (
    <div className=" mt-5">
      <div className=" flex items-center justify-center ">
        <div className=" bg-[#2D343F] text-white h-[350px] w-[350px] p-4  rounded-md">
          <img src={certificate1} alt="" />
          <h1 className="font-semibold font-mono text-xl  mt-4">
            Decode to Code
          </h1>

          <p className=" ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            architecto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
