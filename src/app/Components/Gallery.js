import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
export default function Gallery() {
  const Images = [
    "gallery3.jpg",
    "gallery4.jpg",
    "gallery5.jpg",
    "gallery4.jpg",
  ];
  const zoomInProperties = {
    scale: 1,
    duration: 2500,
    transitionDuration: 300,
    infinity: true,

    //icons
    prevArrow: (
      <div className="ml-10 top-40 md:top-72">
        <ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="ml-10 top-40 md:top-72">
        <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
      </div>
    ),
  };
  return (
    <div className="w-full bg-green-50   rounded-md">
      <Zoom {...zoomInProperties}>
        {Images.map((each, index) => (
          <div
            key={index}
            className="flex justify-center md:items-center items-start h-96 w-screen  relative"
          >
            <img className="w-screen h-96" src={each} />
          </div>
        ))}
      </Zoom>
    </div>
  );
}
