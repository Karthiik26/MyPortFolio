import React, { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="w-full max-w-full h-40 py-5 border-t-2 dark:border-t-white border-t-black border-b-white">
        <div>
          <div data-aos="zoom-in" data-aos-duration="1500">
            <div className="text-xl font-bold text-right mx-12 mt-4 animate-flyinBottom2">
              Let's Connect DIGITALLY........
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mx-8 mt-4">
          {/* <div data-aos="fade-" data-aos-duration="2000"> */}
          <div className="flex justify-center gap-3 items-center">
            <div className=" font-serif font-extrabold text-md">
              &copy; 2024
            </div>
            <div className=" font-serif font-medium text-md">
              Created By Karthik Nagula
            </div>
            {/* </div> */}
          </div>

          <div className="flex gap-2 ml-10">
            <div className="flex justify-center items-center gap-4 mr-10">
              <a
                className="animate-flyinBottom2 hover:bg-gray-600 dark:hover:bg-white dark:hover:text-black hover:text-white hover:rounded-full p-3"
                data-aos="fade-"
                data-aos-duration="2000"
                href="https://www.linkedin.com/in/karthik-nagula-b6a463283"
                target="blank"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                data-aos="fade-"
                data-aos-duration="2000"
                className="animate-flyinBottom2 hover:bg-gray-600 dark:hover:bg-white dark:hover:text-black hover:text-white hover:rounded-full p-3"
                href="https://github.com/Karthiik26"
                target="blank"
              >
                <FaSquareGithub size={22} />
              </a>
              <a
                data-aos="fade-"
                data-aos-duration="2000"
                className="animate-flyinBottom2 hover:bg-gray-600 dark:hover:bg-white dark:hover:text-black hover:text-white hover:rounded-full p-3"
                href="mailto:imkarthiik26@gmail.com"
                target="blank"
              >
                <SiGmail size={22} />
              </a>
              <a
                data-aos="fade-"
                data-aos-duration="2000"
                className="animate-flyinBottom2 hover:bg-gray-600 dark:hover:bg-white dark:hover:text-green-600 hover:text-green-400 bg-green-500 rounded-full hover:rounded-full p-3"
                href="https://wa.me/7385494029"
                aria-label="Chat on WhatsApp"
                target="blank"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
