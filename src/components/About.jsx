import React from "react";
import SectionTitle from "./SectionTitle";
import { SiPreact } from "react-icons/si";
function About() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
        <div className="w-full md:w-6/12">
          <SectionTitle>About Me</SectionTitle>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Passionate full-stack developer specializing in the MERN stack.
              Dedicated to crafting dynamic web applications and staying at the
              forefront of emerging technologies.
            </p>
            <ul className="flex flex-wrap gap-2 text-gray-600 dark:text-gray-300 mt-5">
              <li>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-4-1175139.png?f=webp"
                  alt="MongoDB Logo"
                  className="w-10 h-30 mr-1"
                />
                MongoDB
              </li><br />
              <li>
                <img
                  src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
                  alt="Express.js Logo"
                  className="w-10 h-30 mr-1"
                />
                Express.js
              </li> <br />
              <li>
                <img
                  src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                  alt="React.js Logo"
                  className="w-10 h-30 mr-1"
                />
                React.js
              </li> <br />
              <li>
                <img
                  src="https://www.mindrops.com/images/nodejs-image.webp"
                  alt="Node.js Logo"
                  className="w-10 h-30 mr-1"
                />
                Node.js
              </li>
            </ul>
          </div>
          <a
            href="mailto:lamees.anees@gmail.com"
            className="block mt-3 text-md md:text-lg font-regular text-gray-600 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500"
          >
            lamees.anees@gmail.com
          </a>
        </div>
        <img
          src="https://www.infomazeelite.com/wp-content/uploads/2022/12/MERN-Stack-Development.png"
          alt="Lamees Anees"
          className="w-full md:w-6/12 mt-6 rounded-lg object-cover"
        />
      </div>
    </>
  );
}

export default About;
