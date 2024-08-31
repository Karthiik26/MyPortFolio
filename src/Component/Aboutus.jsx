import React, { useEffect } from "react";
import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Aboutus = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div
        id="about"
        className="mt-20 p-4 sm:p-8 md:p-12 lg:p-20 bg-gray-50 dark:bg-slate-900 dark:text-white"
      >
        <div
          className="bg-slate-200 h-16 sm:h-20 rounded-2xl dark:bg-slate-600 dark:text-white"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="text-xl sm:text-2xl pt-4 font-sans font-bold border-b-4 dark:border-b-white w-48 sm:w-56 border-b-black mb-10 sm:mb-20 ml-4 sm:ml-20">
            About Me
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-20 items-center mt-8 sm:mt-16 mx-4 sm:mx-20">
          {/* img */}
          <div data-aos="zoom-out-down" data-aos-duration="2500">
            <div className="About-1 my-4"></div>
          </div>

          {/* text */}
          <div className="w-auto text-center sm:text-left">
            <div className="text-xl sm:text-2xl font-bold mb-3">
              <div data-aos="fade-left" data-aos-duration="1700">
                My Name Is Karthik Nagula
              </div>
            </div>

            <div className="ml-0 sm:ml-4 tracking-wider mt-4 sm:mt-8">
              <div data-aos="fade-up" data-aos-duration="3000">
                <div className="text-base sm:text-lg font-medium indent-4 sm:indent-8 leading-6 sm:leading-7">
                  I am a recent graduate with a <b> Bachelor of Science in
                  Information Technology </b> from BNN College. I am from Bhiwandi
                  and passionate about <b>Full Stack Web Development</b>, eager to dive
                  into the world of web technologies. My interest lies in
                  crafting efficient, user-friendly web applications and
                  bringing innovative ideas to life through code. As a fresher,
                  I am enthusiastic about learning new technologies and
                  continuously improving my skills to deliver high-quality
                  solutions.
                </div>
                <div className="my-4 text-lg sm:text-xl font-bold">
                  "The only way to do great work is to love what you do."
                </div>
                <div className="text-base sm:text-lg font-medium leading-6 sm:leading-7">
                  I am excited to contribute to projects that make a difference
                  and look forward to growing professionally in the dynamic
                  field of web development.
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 mt-8 sm:mt-10 m-auto animate-flyinBottom1">
              <a data-aos="zoom-in-up" data-aos-duration="1500" href="#skills">
                <button className="border hover:bg-opacity-80 bg-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-sans font-bold text-base sm:text-lg">
                  Skills
                </button>
              </a>
              <div data-aos="zoom-in-up" data-aos-duration="1800">
                <a
                  href="https://drive.google.com/file/d/1ddyyQYHxjn9XvtjewDRFKBY6UKO19LSa/view?usp=sharing"
                  target="blank"
                >
                  <button className="border hover:bg-opacity-80 bg-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-sans font-bold text-base sm:text-lg">
                    Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
