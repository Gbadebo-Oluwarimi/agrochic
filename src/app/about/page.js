"use client";

import React from "react";
import Navbar from "../Components/Navbar";
import localFont from "next/font/local";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";
import Gallery from "../Components/Gallery";
const myfont2 = localFont({
  src: "../../font/poppins-medium-500.ttf",
});
const myfont3 = localFont({
  src: "../../font/Figtree-Light.ttf",
});
export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div style={myfont3.style} className="overflow-hidden w-full ">
      <Navbar />
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
              Our Story
            </div>
            <div className="text-xl w-full mb-5 font-light">
              At Agrochic, we recognize the intricate demands of running an
              agricultural enterprise. Efficient management hinges on seamless
              coordination and streamlined processes. That&apos;s why we&apos;ve
              honed our solutions to align perfectly with the cutting edge of
              agricultural innovation.
            </div>
            <div className="text-xl w-full font-light">
              Empowering you to seize control of your operations, boost
              productivity, and elevate your agricultural business to
              unprecedented heights, Hive transcends mere software solutions.
            </div>
            <div className="text-2xl font-bold mt-10">Terry Junior, CEO</div>
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
            className="lg:max-w-full lg:px-32 text-white mb-10  text-3xl md:text-5xl font-bold max-w-7xl md:w-full m-auto  p-5 md:p-20"
            data-aos="fade-down"
          >
            <div className="text-xl mb-10" data-aos="fade-down">
              Features
            </div>
            We are a team of young entrepreneurs aiming to
            <br /> reach the next level in industrial farming
          </div>
          <div className="inline-block md:flex gap-10 max-w-6xl m-auto lg:max-w-full lg:p-20">
            <div
              className="w-full bg-darkgreen rounded-md pb-10 mb-10"
              data-aos="fade-down"
            >
              <div className="text-3xl text-white p-10" data-aos="fade-down">
                <div className="text-xl font-light">Our Mission</div>
                Commitment to Transforming Operations and Driving Success.
              </div>
              <div className="text-white px-10" data-aos="fade-down">
                Our mission at Hive is to revolutionize the way businesses
                operate by providing them with a comprehensive business
                management solution that combines functionality, flexibility,
                and user-friendliness.
              </div>
            </div>
            <div
              className="w-full bg-green-200 rounded-md pb-10 mb-10"
              data-aos="fade-down"
            >
              <div className="text-3xl font-bold p-10" data-aos="fade-down">
                <div className="text-xl font-light" data-aos="fade-down">
                  Our Vision
                </div>
                Sustainable growth through Hive management solutions.
              </div>
              <div className="text-darkgreen px-10" data-aos="fade-down">
                At Hive, our vision is grounded in a future where businesses not
                only thrive but lead with unparalleled efficiency, innovation,
                and to the for sustainability. We envision a global landscape
                where.
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="team" className="bg-green-50 w-full h-full ">
        <div
          className="text-5xl text-darkgreen font-bold text-center py-24 md:py-32"
          data-aos="fade-right"
        >
          Meet everyone who made this
          <br /> possible.
        </div>
        <div className="p-7   inline-block w-full md:flex gap-10 max-w-7xl m-auto lg:max-w-full lg:px-32">
          <div
            className=" ceo rounded-lg w-full p-3  min-h-96 md:h-3/5  mb-10 "
            data-aos="fade-down"
          >
            <div className="relative md:bottom-3/5 top-56 w-full rounded-md bg-white p-4">
              <div className="font-bold ">Terry Junior </div>
              <div className="text-sm ">Chief Executive Officer (CEO) </div>
            </div>
          </div>

          <div
            className="co-founder rounded-lg p-3 w-full  min-h-96 md:h-3/5 mb-10"
            data-aos="fade-down"
          >
            <div className=" relative w-full top-56 md:bottom-3/5 rounded-md bg-white p-4 ">
              <div className="font-bold ">Constant Edoukou</div>
              <div className="text-sm ">Co-Founder </div>
            </div>
          </div>

          <div
            className="co4 rounded-md p-5 w-full min-h-96 md:h-3/5 mb-10"
            data-aos="fade-down"
          >
            <div className=" relative w-full top-56 md:bottom-3/5 rounded-md bg-white p-4 ">
              <div className="font-bold ">Ricky Stones Jr</div>
              <div className="text-sm ">General Manager </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-green-50 text-left  py-20 w-full">
        <div className="text-center mb-10 md:text-left text-darkgreen font-bold text-6xl md:p-4 p-10 max-w-6xl m-auto ">
          Team Gallery
          <div className="text-xl md:text-2xl mt-2 mb-5 text-center md:text-left">
            {" "}
            At Hive, our vision is grounded in a future where businesses
            <br /> not only thrive
          </div>
        </div>
      </div>
      <div className="bg-green-50 md:p-8">
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}
