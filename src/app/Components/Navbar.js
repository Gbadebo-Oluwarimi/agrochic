import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div
      className="main2 fixed w-full bg-green-50 py-4 z-10"
      data-aos="fade-down"
    >
      <div className=" relative m-auto max-w-7xl w-full  px-5 flex justify-between">
        <div className="flex justify-between items-center">
          <div className="mr-20 font-bold flex items-center align-middle ">
            <Image
              src="/logo2.svg"
              width={30}
              height={30}
              alt="logo"
              className="font-bold"
            />
            <div>Agrochic</div>
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
          <button className="rounded-tr-xl rounded-bl-xl bg-green-900  text-xs px-7 py-3 text-white">
            Products
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
