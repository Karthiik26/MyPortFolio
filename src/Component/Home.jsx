import React, { useEffect } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import Aboutus from "./Aboutus";
import Skills from "./Skills";
import Projects from "./Projects";
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {/* Home wave */}
      <div className="relative mt-2" id="Home">
        <div className="flex justify-center items-center dark:bg-slate-900 dark:text-white">
          <div className="custom absolute left-0 top-7 z-[-1] w-full overflow-hidden line-height-0 max-h-fit bg-blue-500 bg-gradient-to-b from-white dark:from-12% to-red-400 to-90% dark:bg-gradient-to-b dark:from-slate-900 dark:from-12% dark:to-red-200 dark:to-90%">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-full h-[240px] bottom-0 top-[380px]"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="fill-white dark:fill-slate-900"
              ></path>
            </svg>
          </div>
        </div>
        <div className="bg-transparent mx-4 sm:mx-8 md:mx-20 flex flex-col md:flex-row justify-between items-center">
          <div className="mt-12 md:mt-20 flex flex-col justify-start w-full md:w-[480px]">
            <div
              className="font-extrabold text-3xl md:text-5xl font-sans tracking-wider text-center md:text-left"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              Hello, <br /> I Am Karthik
            </div>
            <div
              className="font-bold lg:w-[550px] font-sans text-base md:text-lg my-4 text-center md:text-left tracking-wider leading-7"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              <b className="text-lg md:text-2xl ">
                Full Stack Web Developer & Web Designer
              </b>
            </div>
          </div>
          <div
            className="mt-12 md:mt-20"
            data-aos="zoom-out-down"
            data-aos-duration="2500"
          >
            <div className="relative About-2 hidden md:block"></div>
          </div>
        </div>
        {/* Arrow Button */}
        <div data-aos="fade-up" data-aos-duration="2500">
          <div className="flex justify-center items-center rounded-full">
            <a
              href="#about"
              className="bg-black text-white dark:bg-white dark:text-black border-2 p-4 md:p-5 rounded-full my-6 animate-bounce shadow-2xl hover:border-4 hover:border-red-200"
            >
              <FaArrowDownLong size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* About Us */}
      <Aboutus />

      {/* Skills and Education */}
      <Skills />

      {/* Projects */}
      <Projects />
    </>
  );
};

export default Home;
