import React from "react";

function HeroSection() {
  return (
    <div id="hero" className="flex flex-column py-20">
      <div className="flex flex-col md:flex-row md:items-center">
        <img
          src="https://cdna.artstation.com/p/assets/images/images/050/392/912/original/nelson-tiapa-gif-con-telefono.gif?1654734490"
          className="w-25 h-25 md:h-25 mb-6 md:mr-6" // Adjust size and styling as needed
          alt="Your Alt Text"
        />
        <div>
          <h1 className="text-2xl md:text-3xl mb-1 md:mb-3 text-indigo-600 font-semibold">
            Hi, This is <br />
            <span className="text-center text-cyan-600">
              {" "}
              Lamees Mohammed Anees
            </span>
          </h1>
          <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
            I'm a skilled MERN stack developer proficient in MongoDB,
            Express.js, React.js, and Node.js, with a proven track record of
            building 15+ projects. Specializing in both front-end and back-end
            development, I excel in crafting dynamic user interfaces and
            scalable server-side solutions. Let's collaborate to turn your ideas
            into reality!
          </p>
          <a
            href="#works"
            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md"
          >
            See Works
          </a>{" "}
          &nbsp;
          <a
            href="https://drive.google.com/file/d/1Ycbh6yMpgdP_Xm3rlsBrfyBPZ1OpRgTR/view?usp=sharing"
            target="_blank"
            rel="norefferrer"
            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
