import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
export default function Gallery() {
  const images = [
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery4.jpg",
  ];
  const zoomInProperties = {
    scale: 1,
    duration: 2500,
    transitionDuration: 300,
    infinity: true,

    //icons
    // prevArrow: (
    //   <div className="ml-10 md:top-1/2">
    //     <ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
    //   </div>
    // ),
    // nextArrow: (
    //   <div className="mr-10  md:top-1/2">
    //     <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
    //   </div>
    // ),
  };
  return (
    <div className="w-full p-2 md:px-32 rounded-xl m-auto bg-green-50   ">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div
            key={index}
            className="flex w-full md:max-w-8xl m-auto  rounded-lg justify-center md:items-center items-start h-96 md:h-screen relative"
          >
            <Image
              className="w-screen rounded-lg"
              src={each}
              width={1000}
              height={1000}
              alt="slidingimage"
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
}
