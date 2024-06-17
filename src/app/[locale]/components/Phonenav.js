"use client";
import React, { startTransition, useTransition } from "react";
import { useStore } from "../../../../Store.js";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image.js";
import { Router, useRouter } from "next/navigation.js";
const Phonenav = ({ locale }) => {
  const updatebox = useStore((state) => state.updatepopup);
  const router = useRouter();
  const t = useTranslations("NAVIGATION");
  const [isPending, startTransition] = useTransition();
  const localeActive = useLocale();
  const onSelectChange = (e) => {
    const nextlocale = e.target.value;

    startTransition(() => {
      router.replace(`/${nextlocale}`);
      updatebox();
    });
  };

  return (
    <div className="h-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100 w-full  z-50 min-h-screen fixed   ">
      <div className="flex ">
        <div className="hidden md:inline-block w-full"></div>
        <div className="w-96 bg-white min-h-screen p-10">
          <div onClick={() => updatebox()}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 fill-green-500 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <ul onClick={() => updatebox()} className="text-center w-full mt-10">
            <Link href="/">
              <li className="text-xl pb-10 flex items-center align-center justify-between ">
                {t("home")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className=" text-green-600 w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </li>
            </Link>
            <Link href="./#products">
              <li className="text-xl pb-10 flex items-center align-center justify-between">
                {t("Products")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className=" text-green-600 w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </li>
            </Link>
            <Link href={`/${locale}/about#team`}>
              <li className="text-xl pb-10 flex items-center align-center justify-between">
                {t("Team")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className=" text-green-600 w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </li>
            </Link>
            <Link href={`/${locale}/contact`}>
              <li className="text-xl pb-10 flex items-center align-center justify-between">
                {t("Contacts")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className=" text-green-600 w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </li>
            </Link>
            <Link href={`/${locale}/about`}>
              <li className="text-xl pb-10 flex items-center align-center justify-between">
                {t("About")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className=" text-green-600 w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </li>
            </Link>
            <Link href={`/${locale}/Press`}>
              <li className="text-xl pb-10 flex align-center items-center justify-between">
                {t("Press")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className=" text-green-600 w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </li>
            </Link>
            <li>
              <Link href="https://Wa.me/+2250757559041">
                <button className=" flex  md:inline rounded-tr-xl rounded-bl-xl bg-green-900  text-sm px-7 py-5 text-white w-full">
                  <div className="flex justify-between m-auto ">
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
            </li>
            <li></li>
          </ul>
          <button className="   text-sm px-7 py-3 min-w-96">
            <div className="flex justify-between">
              <label className="border-2 rounded">
                <p className="sr-only">change-Language</p>
                <select
                  defaultValue={localeActive}
                  className="bg-gray-50 border min-w-60 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        </div>
      </div>
    </div>
  );
};

export default Phonenav;
