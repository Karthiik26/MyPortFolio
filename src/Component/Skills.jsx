import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      id="skills"
      className="mt-0 p-6 sm:p-12 lg:p-20 bg-gray-50 dark:bg-slate-900 dark:text-white"
    >
      <div
        className="bg-slate-200 h-20 rounded-2xl dark:bg-slate-600 dark:text-white"
        data-aos="fade-right"
      >
        <div className="text-2xl pt-4 font-sans font-bold border-b-4 dark:border-b-white w-56 border-b-black mb-20 ml-4 sm:ml-10 lg:ml-20">
          Skills
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 mt-[50px] sm:mt-[70px]">
        <div data-aos="fade-up" data-aos-duration="2000">
          <div className="py-6 px-6 sm:py-10 sm:px-10 w-[300px] sm:w-[350px] border-2 shadow-gray-500 shadow-2xl rounded-2xl text-center">
            <div className="text-blue-700 font-bold font-sans text-lg sm:text-[22px]">
              Web Design
            </div>
            <div className="text-gray-700 p-2 mx-1 dark:text-white font-semibold text-sm sm:text-md">
              Design is where I experiment, innovate, and create unique visuals
              before I start developing.
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000">
          <div className="py-6 px-6 sm:py-10 sm:px-10 w-[300px] sm:w-[350px] border-2 shadow-gray-500 shadow-2xl rounded-2xl text-center">
            <div className="text-blue-700 font-bold font-sans text-lg sm:text-[22px]">
              Web Development
            </div>
            <div className="text-gray-700 p-2 mx-1 dark:text-white font-semibold text-sm sm:text-md">
              I am a Full Stack Web Developer & Web Designer proficient in MERN and MEAN
              stacks
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000">
          <div className="py-6 px-6 sm:py-10 sm:px-10 w-[300px] sm:w-[350px] border-2 shadow-gray-500 shadow-2xl rounded-2xl text-center">
            <div className="text-blue-700 font-bold font-sans text-lg sm:text-[22px]">
              Problem Solving
            </div>
            <div className="text-gray-700 p-2 mx-1 dark:text-white font-semibold text-sm sm:text-md">
              I love solving problems whether programming problems or real life
              problems.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-20 sm:mt-14 sm:gap-12 font-bold">
        <div data-aos="fade-right" data-aos-duration="2000">
          <div className="flex flex-wrap justify-center items-center">
            <div className="my-2 py-2 px-4 text-sm sm:text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-green-200">
              HTML
            </div>
            <div className="my-2 py-2 px-4 text-sm sm:text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-green-200 ">
              CSS
            </div>
            <div className="my-2 py-2 px-4 text-sm sm:text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-green-200 ">
              TAILWIND CSS
            </div>
            <div className="my-2 py-2 px-4 text-sm sm:text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-green-200 ">
              BOOTSTRAP
            </div>
            <div className="my-2 py-2 px-4 text-sm sm:text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-green-200 ">
              JAVASCRIPT
            </div>
            <div className="my-2 py-2 px-4 text-sm sm:text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-green-200 ">
              NODE JS
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000">
          <div className="flex flex-wrap justify-center items-center">
            <div className="my-2 py-2 px-4 text-sm sm:text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-red-200">
              REACT JS
            </div>
            <div className="my-2 py-2 px-4 text-sm sm:text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-red-200">
              ANGULAR JS
            </div>
            <div className="my-2 py-2 px-4 text-sm sm:text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-red-200">
              MONGO DB
            </div>
            <div className="my-2 py-2 px-4 text-sm sm:text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-red-200">
              REDUX
            </div>
            <div className="my-2 py-2 px-4 text-sm sm:text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-red-200">
              SOCKET.IO
            </div>
            <div className="my-2 py-2 px-4 text-sm sm:text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-red-200">
              EXPRESS JS
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-duration="2000">
          <div className="flex flex-wrap justify-center items-center">
            <div className="my-2 py-2 px-4 text-sm sm:text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-blue-200">
              GIT
            </div>
            <div className="my-2 py-2 px-4 text-sm sm:text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-blue-200">
              C++
            </div>
            <div className="my-2 py-2 px-4 text-sm sm:text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-blue-200">
              JAVA
            </div>
            <div className="my-2 py-2 px-4 text-sm sm:text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-blue-200">
              C
            </div>
            <div className="my-2 py-2 px-4 text-sm sm:text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-blue-200">
              PYTHON
            </div>
            <div className="my-2 py-2 px-4 text-sm sm:text-lg text-gray-500 rounded-lg hover:text-black hover:border-b-2 hover:border-b-black hover:bg-blue-200">
              My SQL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
