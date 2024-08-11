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
        <div className="text-center mb-4">
          <div data-aos="zoom-in" data-aos-duration="1500">
            <div className="text-xl font-bold animate-flyinBottom2">
              Let's Connect DIGITALLY........
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mx-8 mt-4">
          <div className="flex justify-center gap-3 items-center mb-4 md:mb-0">
            <div className="font-serif font-extrabold text-md">
              &copy; 2024
            </div>
            <div className="font-serif font-medium text-md">
              Created By Karthik Nagula
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              className="animate-flyinBottom2 hover:bg-gray-600 dark:hover:bg-white dark:hover:text-black hover:text-white hover:rounded-full p-3"
              data-aos="fade-"
              data-aos-duration="2000"
              href="https://www.linkedin.com/in/karthik-nagula-b6a463283"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              data-aos="fade-"
              data-aos-duration="2000"
              className="animate-flyinBottom2 hover:bg-gray-600 dark:hover:bg-white dark:hover:text-black hover:text-white hover:rounded-full p-3"
              href="https://github.com/Karthiik26"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareGithub size={22} />
            </a>
            <a
              data-aos="fade-"
              data-aos-duration="2000"
              className="animate-flyinBottom2 hover:bg-gray-600 dark:hover:bg-white dark:hover:text-black hover:text-white hover:rounded-full p-3"
              href="mailto:imkarthiik26@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail size={22} />
            </a>
            <a
              data-aos="fade-"
              data-aos-duration="2000"
              className="animate-flyinBottom2 hover:bg-gray-600 dark:hover:bg-white dark:hover:text-green-600 hover:text-green-400 bg-green-500 rounded-full p-3"
              href="https://wa.me/7385494029"
              aria-label="Chat on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
