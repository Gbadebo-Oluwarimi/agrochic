import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "../../../Store";
import Phonenav from "./Phonenav.js";
const Navbar = () => {
  const box = useStore((state) => state.popup);
  const updatebox = useStore((state) => state.updatepopup);
  return (
    <>
      {box ? <Phonenav /> : ""}
      <div
        className="main2 fixed w-full bg-green-50  z-10"
        data-aos="fade-down"
      >
        <div className=" relative m-auto max-w-7xl w-full  px-5 flex justify-between">
          <div className="flex justify-between items-center">
            <div className="mr-20 font-bold flex items-center align-middle ">
              <Image
                src="/logo.png"
                width={100}
                height={100}
                alt="logo"
                className="font-bold"
              />
            </div>
            <ul className=" hidden md:flex justify-between items-center text-gray-800">
              <Link href="/">
                {" "}
                <li className="mr-7">Home</li>
              </Link>
              <Link href="/about">
                <li className="mr-7">About us</li>
              </Link>
              <li className="mr-7">Pricing</li>
              <li className="mr-7">Blog</li>
              <li className="mr-7">Contact</li>
            </ul>
          </div>

          <ul className="flex justify-between text-center items-center ">
            <Link href="/about">
              <button className="rounded-tr-xl rounded-bl-xl bg-green-900  text-xs px-7 py-3 text-white">
                Product
              </button>
            </Link>
            <div className="md:hidden inline-block px-10">
              <svg
                onClick={() => updatebox()}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
