import React from "react";
import certificate1 from "/public/photos/certificate.jpg";
import certificate2 from "/public/photos/certificate.jpg";
import certificate3 from "/public/photos/certificate.jpg";

const CertificateCard = ({ photos, title, desc }) => {
  return (
    <div className=" mt-5   hover:scale-110 transition-all ease-in-out">
      <div className=" flex items-center justify-center ">
        <div className=" bg-[#2D343F] text-white h-[350px] w-[350px] p-4  rounded-md">
          <img src={photos} alt="" />
          <h1 className="font-semibold font-mono text-xl  mt-4">{title}</h1>

          <p className=" ">{desc} </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
