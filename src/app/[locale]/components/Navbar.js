"use client";

import React, { useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "../../../../Store.js";
import Phonenav from "./Phonenav.js";
import { useRouter } from "next/navigation.js";
import { useLocale, useTranslations } from "next-intl";
const Navbar = ({ locale }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const box = useStore((state) => state.popup);
  const updatebox = useStore((state) => state.updatepopup);
  const localeActive = useLocale();
  const onSelectChange = (e) => {
    const nextlocale = e.target.value;

    startTransition(() => {
      router.replace(`/${nextlocale}`);
    });
  };
  const t = useTranslations("NAVIGATION");
  return (
    <>
      {box ? <Phonenav locale={locale} /> : ""}
      <div
        className="main2 fixed w-full bg-green-50 z-10 "
        data-aos="fade-down"
      >
        <div className=" relative m-auto max-w-7xl w-full lg:max-w-full  px-5 flex justify-between items-center align-middle">
          <div className="flex justify-between items-center ">
            <div className="mr-20 font-bold flex items-center align-middle ">
              <Link href="/">
                <Image
                  src="/logo.png"
                  width={100}
                  height={100}
                  alt="logo"
                  className="font-bold"
                />
              </Link>
            </div>

            <ul className=" hidden md:flex justify-between items-center text-gray-800">
              <Link href="/">
                {" "}
                <li className="mr-7">{t("home")}</li>
              </Link>
              <Link href="/#products">
                <li className="mr-7">{t("Products")} </li>
              </Link>
              <Link href={`/${locale}/about#team`}>
                <li className="mr-7">{t("Team")} </li>
              </Link>
              <Link href={`/${locale}/contact`}>
                <li className="mr-7">{t("Contacts")} </li>
              </Link>
              <Link href={`/${locale}/about`}>
                <li className="mr-7">{t("About")} </li>
              </Link>
              <Link href={`/${locale}/Press`}>
                <li className="mr-7">{t("Press")} </li>
              </Link>
            </ul>
          </div>
          <div className="inline-block md:hidden mr-12">
            <Link href="https://Wa.me/+2250757559041">
              <Image
                src="/icon1.svg"
                className="mr-3 p-1 rounded-full bg-green-500"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <ul className="flex justify-between text-center items-center ">
            <Link href="https://Wa.me/+2250757559041">
              <button className=" hidden   md:inline rounded-tr-xl rounded-bl-xl bg-green-900  text-sm px-7 py-3 text-white">
                <div className="flex justify-between">
                  <Image
                    src="/icon1.svg"
                    className="pr-3"
                    width={30}
                    height={30}
                  />
                  {t("WhatsApp")}
                </div>
              </button>
            </Link>
            <button className=" hidden md:block    text-sm px-7 py-3 ">
              <div className="flex justify-between">
                <label className="border-2 rounded">
                  <p className="sr-only">change-Language</p>
                  <select
                    defaultValue={localeActive}
                    className="bg-gray-50 border min-w-40 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={onSelectChange}
                    disabled={isPending}
                  >
                    <option value="en">English</option>
                    <option value="de">Deutch</option>
                    <option value="fr">French</option>
                  </select>
                </label>
              </div>
            </button>
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
