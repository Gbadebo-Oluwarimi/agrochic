import React from "react";
import Image from "next/image";
const Prenav = () => {
  return (
    <div className="w-full min-h-96 bg-darkgreen text-white  inline-block md:flex">
      <div className="max-w-7xl m-auto ">
        <div className="text-3xl w-full md:text-6xl md:w-full font-bold py-5 md:py-20 px-6 md:px-20">
          Supercharge your
          <br /> business with Hive!
          <div className="text-lg w-full md:w-3/5 font-medium mt-6 ">
            From streamlined project coordination to enhanced team
            collaboration, Hive empowers your organization to reach new heights.
            Experience the transformation, boost productivity, increase
            profitability.
          </div>
          <button className="   bg-white w-72 rounded-tr-xl rounded-bl-xl p-3 md:w-40 text-sm text-darkgreen">
            Check Products
          </button>
        </div>
      </div>
      <div className="min-h-full w-1/2 overlflow-hidden">
        <Image
          src="/logo3.svg"
          width={630}
          height={630}
          alt="logo"
          className="font-bold relative top-20 md:top-54 opacity-100 md:opacity-100 h-full md:min-h-96"
        />
      </div>
    </div>
  );
};

export default Prenav;
