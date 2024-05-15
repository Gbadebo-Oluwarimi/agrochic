"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image.js";
import Footer from "../Components/Footer.js";
import Navbar from "../Components/Navbar.js";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="bg-green-100 w-full pt-24">
        <div className=" md:w-full flex align-middle items-center">
          <Image
            src="/contact.png"
            width={600}
            height={600}
            className="max-w-5xl m-auto items-center"
            data-aos="fade-down"
          />
        </div>

        <div className="listbackground min-h-screen  p-2 md:p-20 w-full">
          {/* <div className="absolute text-gray-200 z-0 right-10">
          <img src={doodle} alt="" className="  w-96 h-96 z-0 opacity-5" />
        </div> */}
          <div
            className="font-semibold text-3xl text-center z-10 w-full md:w-full"
            data-aos="fade-down"
          >
            {" "}
            Reach Out and Connect with
            <br /> Our <span className="text-green-400">Team</span>{" "}
          </div>
          <div
            className="text-xs text-center py-4 text-gray-500"
            data-aos="fade-down"
          >
            We&apos;re Here to Assist You – Let&apos;s Start a Conversation{" "}
          </div>
          <section class="">
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
              <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div class="lg:col-span-2 lg:py-12">
                  <p class="max-w-xl text-lg">
                    <span className="text-green-600 font-semibold">
                      {" "}
                      Email us at
                    </span>
                    <br /> agrochic@gmail.com
                    <br />
                    info@agrochic.com
                  </p>

                  <div class="mt-8">
                    <a href="" class="text-2xl font-bold text-green-600"></a>

                    <address class="mt-2 not-italic">Agrochic address</address>
                  </div>
                </div>

                <div
                  class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 z-10"
                  data-aos="fade-down"
                >
                  <form class="space-y-4">
                    <div className="">
                      <label class="sr-only" for="name" name="user_name">
                        Name
                      </label>
                      <input
                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Name"
                        type="text"
                        id="name"
                        name="user_name"
                      />
                    </div>

                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label class="sr-only" for="email" name="user_email">
                          Email
                        </label>
                        <input
                          class="w-full rounded-lg border-gray-200 p-3 text-sm"
                          placeholder="Email address"
                          type="email"
                          id="email"
                          name="user_email"
                        />
                      </div>

                      <div>
                        <label class="sr-only" for="phone" name="user_phone">
                          Phone
                        </label>
                        <input
                          class="w-full rounded-lg border-gray-200 p-3 text-sm"
                          placeholder="Phone Number"
                          type="tel"
                          id="phone"
                          name="user_number"
                        />
                      </div>
                    </div>

                    <div>
                      <label class="sr-only" for="message" name="message">
                        Message
                      </label>

                      <textarea
                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Message"
                        rows="8"
                        id="message"
                        name="message"
                      ></textarea>
                    </div>

                    <div class="mt-4">
                      <button
                        type="submit"
                        class="inline-block w-full rounded-lg bg-green-500 px-5 py-3 font-medium text-white sm:w-auto"
                      >
                        Send Enquiry
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
