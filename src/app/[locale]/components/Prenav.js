import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
const Prenav = () => {
  const t = useTranslations("INDEXPAGE");
  const u = useTranslations("BUTTONS");
  return (
    <div className="  w-full min-h-96 bg-darkgreen text-white  inline-block md:flex overflow-hidden">
      <div className=" lg:max-w-full lg:px-32 max-w-10xl m-auto md:flex inline-block">
        <div className=" ">
          <div className="text-3xl w-full md:text-6xl md:w-full font-bold py-5 md:py-20 px-6 md:px-20">
            {t("prenavtitle")}
            <br /> {t("prenavtitle2")}
            <div className="text-lg w-full md:w-2/6 font-medium mt-6 ">
              {t("prenavtext")}
            </div>
            <button className="   bg-white w-72 rounded-tr-xl rounded-bl-xl p-3 md:w-40 text-sm text-darkgreen">
              {u("CheckProducts")}
            </button>
          </div>
        </div>
        {/* <div className="min-h-full w-full overflow-hidden">
          <Image
            src="/logo3.svg"
            width={200}
            height={0}
            alt="logo"
            className=" font-bold relative top-20 md:top-54 opacity-100 md:opacity-100 h-full min-h-24 md:min-h-96"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Prenav;
