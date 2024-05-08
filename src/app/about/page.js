"use client";

import React from "react";
import Navbar from "../Components/Navbar";
import localFont from "next/font/local";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";
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
        <div className="bg-green-50 inline-block md:flex max-w-6xl m-auto py-10">
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
            className="text-white mb-10  text-3xl md:text-5xl font-bold max-w-7xl md:w-full m-auto  p-5 md:p-20"
            data-aos="fade-down"
          >
            <div className="text-xl mb-10" data-aos="fade-down">
              Features
            </div>
            We&apos;re a team of experienced financial advisors, here to help
            with the financial tasks that you don&apos;t like, and we do.
          </div>
          <div className="inline-block md:flex gap-10 max-w-6xl m-auto">
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
      <div className="bg-green-50 w-full ">
        <div
          className="text-5xl text-darkgreen font-bold text-center py-24 md:py-32"
          data-aos="fade-right"
        >
          Meet everyone who made this
          <br /> possible.
        </div>
        <div className="p-7   inline-block w-full md:flex gap-10 max-w-7xl m-auto ">
          <div
            className=" ceo rounded-lg w-full p-3   mb-10 "
            data-aos="fade-down"
          >
            <div
              className="relative top-72 w-full rounded-md bg-white p-4"
              data-aos="fade-down"
            >
              <div className="font-bold ">Terry Junior </div>
              <div className="text-sm ">Chief Executive Officer (CEO) </div>
            </div>
          </div>

          <div
            className="co-founder rounded-md p-3 w-full min-h-96 mb-10"
            data-aos="fade-down"
          >
            <div
              className=" relative w-full top-60 rounded-md bg-white p-4 "
              data-aos="fade-down"
            >
              <div className="font-bold ">Ricky Stones Junior</div>
              <div className="text-sm ">Co-Founder </div>
            </div>
          </div>
          <div
            className=" co3 rounded-md p-5 w-full h-96 mb-10"
            data-aos="fade-down"
          >
            <div
              className=" relative w-full top-56 rounded-md bg-white p-4 "
              data-aos="fade-down"
            >
              <div className="font-bold ">Ricky Stones Jr</div>
              <div className="text-sm ">General Manager </div>
            </div>
          </div>
          <div
            className="co4 rounded-md p-5 w-full h-96 mb-10"
            data-aos="fade-down"
          >
            <div
              className=" relative w-full top-56 rounded-md bg-white p-4 "
              data-aos="fade-down"
            >
              <div className="font-bold ">Ricky Stones Jr</div>
              <div className="text-sm ">General Manager </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-50 text-left  py-20 w-full">
        <div className="text-darkgreen font-bold text-6xl md:p-4 p-10 max-w-6xl m-auto ">
          Gallery of Works done
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
}
