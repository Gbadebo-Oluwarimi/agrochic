"use client";

import React, { useTransition } from "react";
import Navbar from "../components/Navbar";
import localFont from "next/font/local";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Maingallery from "../components/Maingallery";
import { useTranslations } from "use-intl";
const myfont2 = localFont({
  src: "../../../font/poppins-medium-500.ttf",
});
const myfont3 = localFont({
  src: "../../../font/Figtree-Light.ttf",
});

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  const t = useTranslations("ABOUTPAGE");
  const u = useTranslations("INDEXPAGE");
  return (
    <div style={myfont3.style} className="overflow-hidden w-full ">
      <Image
        src="/design.png"
        width={600}
        height={600}
        style={{
          position: "absolute",
          top: "-340px",
          left: "-340px",
          opacity: "12%",
        }}
        data-aos="fade-right"
      />
      <div className="bg-green-50 pb-10">
        <div className="bg-green-50 inline-block md:flex max-w-6xl m-auto py-10 lg:max-w-full lg:px-32 2xl:px-72">
          <div className="mt-32 p-10 w-full md:mr-10" data-aos="fade-down">
            <div className="text-5xl font-extrabold pb-5 text-green-900 ">
              {t("title")}
            </div>
            <div className="text-xl w-full mb-5 font-light">
              {t("description")}
            </div>
            <div className="text-xl w-full font-light">{t("text1")}</div>
            <div className="text-2xl font-bold mt-10">{u("author")}</div>
          </div>
          <div className="p-10 w-full ">
            <div
              className="ceo rounded-md w-full mt-20 rounded-br-large min-h-96 md:h-full"
              data-aos="fade-down"
            ></div>
          </div>
        </div>
      </div>
      <div className=" relative w-full min-h-80 about t-20  p-5">
        <div className="">
          <div
            className="lg:max-w-full lg:px-32 text-white   text-3xl md:text-5xl font-bold max-w-7xl md:w-full m-auto  p-5 md:p-20"
            data-aos="fade-down"
          >
            <div className="text-xl mb-10" data-aos="fade-down">
              {u("tag")}
            </div>
            {t("text2")}
            <br /> {t("text2sub")}{" "}
            <span className="text-green-500">{t("text2sub2")}</span>
            <div className="text-2xl mt-10 font-light">{t("mission1")}</div>
          </div>
          <div className="inline-block md:flex gap-10 max-w-6xl m-auto lg:max-w-full lg:p-40">
            <div
              className="w-full bg-darkgreen mb-2 rounded-md pb-10 "
              data-aos="fade-down"
            >
              <div className="text-3xl text-white p-10" data-aos="fade-down">
                <div className="text-xl font-light">{t("mission1title")}</div>
                {t("mission1sub")}
              </div>
              <div className="text-white px-10" data-aos="fade-down">
                {t("missiontext")}
              </div>
            </div>
            <div
              className="w-full mb-2 bg-green-200 rounded-md pb-10 "
              data-aos="fade-down"
            >
              <div className="text-3xl font-bold p-10" data-aos="fade-down">
                <div className="text-xl font-light" data-aos="fade-down">
                  {t("visiontitle")}
                </div>
                {t("vision1sub")}
              </div>
              <div className="text-darkgreen px-10" data-aos="fade-down">
                {t("vision1text")}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="team" className="bg-green-50 w-full  ">
        <div
          className="text-5xl text-darkgreen font-bold text-center py-24 md:py-32"
          data-aos="fade-right"
        >
          {t("peopletitle")}
          <br /> {t("peopletitle2")}
          <br />
          <div className="p-1 bg-green-500 w-72 flex align-center items-center m-auto mt-5" />
        </div>
        <div className="inline-block w-full min-h-96  md:flex md:max-w-8xl  p-2 md:p-10 m-auto pb-10">
          <div
            data-aos="fade-right"
            className="w-full mb-4 p-10  transition duration-500 delay-300 hover:brightness-75 md:w-1/2 min-h-[600px] bg-gray-200 rounded-2xl ceo md:p-2 relative flex flex-col justify-end"
          >
            <div className=" relative pb-10 text-white">
              <div className="px-10 text-4xl font-bold text-outline">
                {t("ceo")}
              </div>
              <div className="px-10 text-2xl ">{t("role1")}</div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="w-full mb-4 mx-0 md:mx-4 p-10 transition duration-500 delay-300 hover:brightness-75 md:w-1/2 min-h-[600px] bg-gray-200 rounded-2xl co-founder md:p-2 relative flex flex-col justify-end"
          >
            <div className=" relative pb-10 text-white">
              <div className="px-10 text-4xl font-bold text-outline">
                {t("co")}
              </div>
              <div className="px-10 text-2xl ">{t("role2")}</div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="w-full  mb-4 p-10 transition duration-500 delay-300 hover:brightness-75 md:w-1/2 min-h-[600px] bg-gray-200 rounded-2xl co-founder3 md:p-2 relative flex flex-col justify-end"
          >
            <div className=" relative pb-10 text-white">
              <div className=" md:px-10 text-4xl font-bold text-outline">
                {t("tech")}{" "}
              </div>
              <div className="px-10 text-2xl ">{t("role3")}</div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-green-50 text-left  py-4 w-full">
        <div className="text-center  md:text-left text-darkgreen font-bold text-6xl md:p-4 p-10 max-w-6xl m-auto ">
          {t("Teamgallery")}
          <div className="text-xl md:text-2xl mt-2  text-center md:text-left">
            {" "}
            {t("gallerytext")}
            <br /> {t("gallerytext2")}
          </div>
        </div>
      </div>
      <div className="bg-green-50">
        <Maingallery />
        <p></p>
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}
