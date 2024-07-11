"use client";

import React from "react";
import Image from "next/image";
import { useEffect } from "react";

import localFont from "next/font/local";
import Footer from "./components/Footer";
import AOS from "aos";
import Link from "next/link";
import "aos/dist/aos.css";
import Prenav from "./components/Prenav";
import Navbar from "./components/Navbar";
import { useTranslations } from "next-intl";
const myfont2 = localFont({
  src: "../../font/Figtree-Light.ttf",
});
const myfont = localFont({
  src: "../../font/Figtree-Medium.ttf",
});
const myfont3 = localFont({
  src: "../../font/Figtree-Regular.ttf",
});
const myfont4 = localFont({
  src: "../../font/Figtree-ExtraBold.ttf",
});
const myfont5 = localFont({
  src: "../../font/Figtree-Bold.ttf",
});
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  const t = useTranslations("INDEXPAGE");
  const b = useTranslations("BUTTONS");
  return (
    <div
      style={myfont2.style}
      className="min-h-screen bg-green-50  overflow-hidden px-2"
    >
      <div className="grid grid-cols-10 2xl:gap-2 mt-16 max-w-6xl m-auto lg:max-w-full lg:px-32 2xl:px-64">
        <div className="col-span-10  md:col-span-6  m-auto ">
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

          <div
            className="m-auto max-w-5xl p-4 mt-12   z-10 "
            data-aos="fade-down"
          >
            <div
              style={myfont3.style}
              data-aos-delay="1000"
              data-aos="fade-down"
              className="flex md:w-72 text-center text-md align-middle w-80 max-w-2xl m-auto items-center bg-green-50 border-2  rounded-full p-1  md:m-0 text-textcolor mb-3"
            >
              <div
                className="text-center   w-full text-sm md:text-left pl-0 md:pl-3 text-green-500"
                data-aos-delay="1000"
                data-aos="fade-down"
              >
                {t("slug")}
              </div>
            </div>
            <div
              className="2xl:mr-10  2xl:text-6xl text-2xl items-center font-bold  align-middle text-center  md:text-left  md:text-5xl mb-3 md:pt-6 text-darkgreen w-full "
              style={myfont2.style}
              data-aos-delay="1000"
              data-aos="fade-down"
            >
              <h1>{t("title")}</h1>
              <span className="text-green-700"></span>
            </div>
            <div className="p-1 md:p-0 ">
              <div
                className="min-h-96 md:min-h-max user1 p-4 w-full rounded-md inline-block md:hidden"
                data-aos="fade-right"
              >
                {/* <div className="font-bold pb-3 text-sm">{t("title4")}</div> */}

                {/* <div className="font-bold">Terry Junior CEO</div> */}
              </div>
              <div className="hidden md:inline-block">
                <div
                  style={myfont3.style}
                  className="  w-full items-center align-middle text-center md:text-left  md:w-3/4 text-md mb-7 mt-9"
                  data-aos-delay="1000"
                  data-aos="fade-down"
                >
                  {t("description")}
                </div>
                <div className=" inline-block md:flex m-auto max-w-4xl  align-middle items-center text-center md:text-left">
                  <button className="mr-3 mb-3 md:mb-0  bg-green-700 w-72 rounded-tr-xl rounded-bl-xl p-3 md:w-40 text-sm text-white">
                    {b("CheckProducts")}
                  </button>
                  <Link href="/about">
                    <button className=" border-2 border-gray-600  bg-gray-50 w-72 rounded-tl-xl rounded-br-xl p-3 md:w-40 text-sm font-bold text-darkgreen ">
                      {b("Read more")}
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex max-w-3xl  md:w-full w-full justify-between m-auto mt-7 md:justify-normal">
                <div className="mr-10">
                  <div className="text-4xl font-extrabold">30+</div>
                  <div>{t("landing1")}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">10+</div>
                  <div>{t("landing2")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-large hidden md:flex col-span-4    "
          data-aos="fade-down"
          data-aos-delay="1000"
        >
          <video
            autoPlay
            loop
            muted
            className="rounded-bl-large rounded-tr-large  object-cover w-full mt-16 "
          >
            <source src="/vid2.mp4" />
          </video>
          <div className="absolute bottom-2 text-white"></div>
        </div>
      </div>
      <div
        className="w-full bg-darkgreen mt-10 text-center h-14 skew-y-2"
        data-aos="fade-up"
      >
        <div></div>
        <div></div>
      </div>
      <div className="text-center mt-20" data-aos="fade-down">
        <div className="m-auto max-w-8  text-sm inline-block mb-5">
          {t("missiontitle")}
          <div className="h-1 w-14 bg-green-600" />
        </div>

        <div className="text-center text-3xl p-3 md:p-0 md:text-5xl m-auto max-w-3xl mb-20">
          {t("mission")}
        </div>
      </div>

      <div className="inline-block md:flex max-w-7xl m-auto lg:max-w-full lg:px-32">
        <div
          className="user1 w-1/2  ml-4 md:ml-20 rounded-bl-large rounded-tr-large"
          data-aos="fade-right"
        ></div>
        <div
          className="mx-3 md:mx-14 w-full md:w-1/2 my-2 md:my-20"
          data-aos="fade-left"
        >
          <div className="text-xs">{t("dev-tag")}</div>
          <h1 className="text-5xl text-bold font-bold text-gray-700">
            {t("title2")}
          </h1>
          <div className="text-md my-6 p-2  text-gray-800">
            {t("text1")}
            <p>
              <br />
            </p>{" "}
            {t("text2")}
          </div>
          {/* <div className="p-2 text-md">
            Terry Junior has a Bachelor&apos;s degree in Environmental Science,
            a Master&apos;s in Agriculture, and extensive expertise in
            fertilizer, agricultural R&D, regulatory approvals, and
            funding/grants applications, coupled with a keen understanding
          </div> */}

          <div className="flex w-full mt-7 p-2 gap-2">
            <div className="mr-10">
              <div className="text-4xl font-bold" data-aos="fade-up">
                30+
              </div>
              <div data-aos="fade-up">{t("landing1")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold" data-aos="fade-up">
                10+
              </div>
              <div data-aos="fade-up">{t("landing2")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold" data-aos="fade-up">
                2+
              </div>
              <div data-aos="fade-up">{t("landding3")}</div>
            </div>
          </div>
        </div>
      </div>
      <section
        id="products"
        className="relative bg-green-50  mt-32  overflow-hidden "
      >
        <div className="pt-20 max-w-6xl m-auto lg:max-w-full lg:px-32">
          <Image
            src="/design.png"
            width={600}
            height={600}
            style={{
              position: "absolute",
              top: "-340px",
              right: "-340px",
              opacity: "20%",
            }}
            data-aos="fade-left"
          />
          <div
            className="text-center md:text-left text-md font-bold mb-8 "
            data-aos="fade-right"
          >
            {t("tag")}
          </div>
          <div
            className="text-center md:text-left text-3xl p-5 md:p-10  bg-green-50 md:bg-green-100 rounded-2xl md:w-full   md:text-5xl font-bold text-gray-800 "
            data-aos="fade-right"
          >
            <div className="w-full md:w-2/3">{t("title3")}</div>
            <div className="pb-3 md:p-0 w-full text-xl text-center md:text-left mt-6 md:w-4/6">
              {t("sub-title")}
            </div>
          </div>
          <div className="lg:max-w-full   md:flex max-w-6xl m-auto gap-5 p-8 md:p-0  mt-9 mb-14 w-full">
            <div
              className="p-5 text-gray-800 produce3 w-full rounded-md h-96 mb-5"
              data-aos="fade-down"
            >
              <div
                className="relative top-64 w-full rounded-md main3 p-5"
                data-aos="fade-down"
              >
                <div className="font-bold text-white">{t("produce1title")}</div>
                <div className="text-sm text-white">{t("produce1")} </div>
              </div>
            </div>

            <div
              className="p-4 text-gray-800 produce2 w-full rounded-md h-96 mb-5"
              data-aos="fade-down"
            >
              <div
                className="relative top-64 w-full rounded-md main3 p-5"
                data-aos="fade-down"
              >
                <div className="font-bold text-white">{t("produce2title")}</div>
                <div className="text-sm text-white">{t("produce2")} </div>
              </div>
            </div>
            <div
              className="p-5 text-gray-800 produce1 w-full rounded-md h-96"
              data-aos="fade-down"
            >
              <div
                className="relative top-64 w-full rounded-md main3 p-5"
                data-aos="fade-down"
              >
                <div className="font-bold text-white">{t("produce3title")}</div>
                <div className="text-sm text-white">{t("produce3")} </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center  bg-green-50 py-32">
        <div className="m-auto max-w-8  text-sm inline-block mb-5">
          {t("missiontitle")}
          <div className="h-1 w-14 bg-green-600" />
        </div>

        <div
          className=" text-center text-3xl md:text-5xl m-auto max-w-6xl  font-bold"
          data-aos="fade-down"
        >
          {t("mission2")}
        </div>
      </div>
      <div className="bg-green-50 pt-32">
        <div className=" inline-block md:flex lg:max-w-full lg:px-32 2xl:px-72  max-w-6xl m-auto  gap-20  mb-10 p-6 bg-green-50">
          <div
            className="min-h-96 md:min-h-max user2 p-8 w-full rounded-md"
            data-aos="fade-right"
          >
            <div
              className=" hidden md:inline-block relative top-72 w-full rounded-md  bg-white p-5"
              data-aos="fade-down"
            >
              <div className="font-bold pb-3 text-md">{t("sayings")}</div>
              <div className="font-bold">{t("author")}</div>
            </div>
          </div>
          <div className="mt-10 md:mt-4 mb-6" data-aos="fade-left">
            <div className="text-sm mb-4 font-bold">
              {t("tag")}
              <div className="h-1 w-14 bg-green-600" />
            </div>

            <div className="text-5xl font-bold">{t("title4")}</div>
            <div className="mt-10 text-xl">{t("title4")}</div>
            <div className="mt-10 text-xl flex mb-6 items-center align-middle">
              <div className="p-2 rounded-md bg-green-500 flex items-center align-middle text-center">
                <Image
                  src="/logo2.svg"
                  width={25}
                  height={25}
                  alt="logo"
                  className="font-bold"
                />
              </div>
              <div className="text-sm px-3"> {t("title4text")}</div>
            </div>

            <div className="mt-10 text-xl flex mb-6 items-center align-middle">
              <div className="p-2 rounded-md bg-green-500 flex items-center align-middle text-center">
                <Image
                  src="/logo2.svg"
                  width={25}
                  height={25}
                  alt="logo"
                  className="font-bold"
                />
              </div>
              <div className="text-sm px-3"> {t("title4sub")}</div>
            </div>
          </div>
        </div>
        <Prenav />
      </div>
      <Footer />
    </div>
  );
}
