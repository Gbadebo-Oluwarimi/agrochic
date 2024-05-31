"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image.js";
import localFont from "next/font/local";
import Footer from "../Components/Footer.js";
import Navbar from "../Components/Navbar.js";

const myfont2 = localFont({
  src: "../../font/Figtree-Light.ttf",
});

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="" style={myfont2.style}>
      <Navbar />
      <div className="bg-green-100 w-full pt-24 ">
        <div className="py-10 px-20 ">
          <div className="text-4xl m-auto font-semibold py-6">
            Latest Press Release
          </div>
          <div className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority
            <br /> have suffered alteration in some form, by injected humour, or
            randomised words which <br />
            dont look even slightly believable.
          </div>
        </div>

        <div className="pt-10">
          <div className="bg-green-100 inline-block md:flex lg:max-w-full lg:px-32 2xl:px-72  max-w-6xl m-auto  gap-20  mb-10 p-6 ">
            <div
              className="min-h-96 md:min-h-max article1 p-8 w-full rounded-md"
              data-aos="fade-right"
            ></div>
            <div className="mt-10 md:mt-4 mb-6" data-aos="fade-left">
              <div className="text-sm mb-4 font-bold">
                Latest Press
                <div className="h-1 w-14 bg-green-600" />
              </div>

              <div className="text-3xl font-bold">
                An agricultural company rewards the best students of the BAD
                modern high school in Ayamé
              </div>
              <div className="mt-10 text-sm">
                The BAD modern high school in Ayamé experienced a special
                atmosphere this Friday, May 17, 2024. It was thanks to the
                double ceremony celebrating the thirtieth anniversary of the
                said establishment and its best students in the evening of this
                school year.
                <a href="https://pressecotedivoire.ci/article/19874-une-entreprise-agricole-recompense-les-meilleurs-eleves-du-lycee-moderne-bad-dayame">
                  {" "}
                  Read more
                </a>
              </div>
              <div className="mt-10 text-xl flex mb-6 items-center align-middle">
                <a href="https://pressecotedivoire.ci/article/19874-une-entreprise-agricole-recompense-les-meilleurs-eleves-du-lycee-moderne-bad-dayame">
                  <button className=" border-2 border-gray-600  bg-green-100 w-72 rounded-tl-xl rounded-br-xl p-3 md:w-40 text-sm font-bold text-darkgreen ">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;