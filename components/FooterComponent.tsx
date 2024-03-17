import React from "react";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function FooterComponent() {
  return (
    <footer className="bg-blue-900">
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white py-10">
        <div className="flex flex-col items-center px-4">
          <a href="https://istad.co">
            <img
              src="https://istad.co/resources/img/logo_md.png"
              alt="CSTAD"
              className="w-24 h-24"
            />
          </a>
          <span className="mt-5 text-white">
            Start your IT Career with CSTAD
          </span>
        </div>
        <div className="flex flex-col justify-between h-36">
          <span className="font-semibold text-lg">Learn More</span>
          <ul className="list-none space-y-2">
            <li>
              <a
                href="#"
                className="text-white no-underline hover:text-gray-300"
              >
                Course
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white no-underline hover:text-gray-300"
              >
                IT News
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white no-underline hover:text-gray-300"
              >
                Job Opportunity
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white no-underline hover:text-gray-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white no-underline hover:text-gray-300"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between h-36">
          <span className="font-semibold text-lg">Contact Us</span>
          <ul className="list-none space-y-2">
            <li>
              <a
                href="tel:(+855 959 909 10)"
                className="text-white no-underline hover:text-gray-300"
              >
                (+855) 95-990-910
              </a>
            </li>
            <li>
              <a
                href="tel:(+855 939 909 10)"
                className="text-white no-underline hover:text-gray-300"
              >
                (+855) 93-990-910
              </a>
            </li>
          </ul>
          <div className="flex items-center flex-wrap justify-evenly">
            <FaTelegram />
            Telegram
            <FaYoutube />
            Youtube
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <span className="font-semibold text-lg">Follow Us</span>
          <div className="mt-5">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fistad.co&hide_cover=false&show_facepile=true&appId=536767018150991"
              frameBorder="0"
              className="w-full h-32"
            ></iframe>
          </div>
        </div>
      </section>
      <hr className="my-5" />
      <section className="py-5 text-center">
        <span className="text-white">
          {" "}
          @ 2023 Center of Science and Technology Advanced Development | All
          Rights Reserved
        </span>
      </section>
    </footer>
  );
}
