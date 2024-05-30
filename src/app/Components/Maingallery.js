import React from "react";

const Maingallery = () => {
  return (
    <div class="container mx-auto px-5 py-2 lg:px-26 lg:pt-24">
      <div class="-m-1 flex flex-wrap md:-m-2">
        <div class="flex w-1/2 flex-wrap">
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="image1.jpg"
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="image2.jpg"
            />
          </div>
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="gallery4.jpg"
            />
          </div>
        </div>
        <div class="flex w-1/2 flex-wrap">
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="image3.jpg"
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="image4.jpg"
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="image6.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maingallery;
