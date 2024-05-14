"use client";

import Footer from "../Components/Footer.js";
import Navbar from "../Components/Navbar.js";
const Contact = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="bg-green-100 w-full h-96 text-gray-200 p-10">
        <div className="max-w-mx m-auto mt-20 relative">
          <div className="text-sm py-3">
            Agrochic/ <span className="text-green-300 py-10">Contact us</span>
          </div>
          <div className="text-5xl pb-3 ">Wanna Reach out to us ?</div>
          <div className="text-sm">
            Your Feedback Matters: Contact Us Today for Support and Inquiries
          </div>
        </div>
      </div>
      <div className="listbackground min-h-screen p-20">
        {/* <div className="absolute text-gray-200 z-0 right-10">
          <img src={doodle} alt="" className="  w-96 h-96 z-0 opacity-5" />
        </div> */}
        <div className="font-semibold text-3xl text-center z-10">
          {" "}
          Reach Out and Connect with
          <br /> Our <span className="text-green-400">Team</span>{" "}
        </div>
        <div className="text-xs text-center py-4 text-gray-500">
          We're Here to Assist You – Let's Start a Conversation{" "}
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

              <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 z-10">
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
      <Footer />
    </div>
  );
};

export default Contact;
