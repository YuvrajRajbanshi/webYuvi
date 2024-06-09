import React from "react";
import CertificateCard from "./certificate/CertificateCard";
import certificate1 from "../../public/photos/certificate.jpg";
import certificate2 from "../../public/photos/certificate1.jpg";
import certificate3 from "../../public/photos/certificate2.jpg";

const Certifcate = () => {
  return (
    <div className=" dark:text-white dark:bg-[#2f2f2f] p-10  ">
      <div className=" flex items-center  justify-center flex-row flex-wrap gap-10">
        <CertificateCard
          photos={certificate1}
          title={"Decode to Code:"}
          desc={
            "College competition, our team had secured the first place in this competition"
          }
        />
        <CertificateCard
          photos={certificate2}
          title={"GDSC event:"}
          desc={
            "In this event we got second place. The event held in our college by CIT Bangalore "
          }
        />
        <CertificateCard
          photos={certificate3}
          title={"CIPHER-BATTLE 2.0"}
          desc={"This hackathon held in CIT Gubbi, Tumakuru."}
        />

        {/* <CertificateCard />
        <CertificateCard /> */}
      </div>
    </div>
  );
};

export default Certifcate;
