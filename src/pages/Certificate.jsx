import React from "react";

import CertificateCard from "./certificate/CertificateCard";

const Certifcate = () => {
  return (
    <div className=" dark:text-white dark:bg-[#2f2f2f] p-10  ">
      <div className=" flex items-center  justify-center flex-row flex-wrap gap-10">
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
      </div>
    </div>
  );
};

export default Certifcate;
