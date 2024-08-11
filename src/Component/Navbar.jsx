import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Togglebtn from "./ToggleBtn";

const Navbar = () => {
  const { pathname } = useLocation();
  const [Dark, setDark] = useState();
  const [PathName, SetPathName] = useState();

  function ToggleDarkmode() {
    const x = localStorage.getItem("darkMode");
    setDark(x);
    if (Dark === "true") {
      console.log("--------" + Dark);
    }
  }

  useEffect(() => {
    console.log(pathname);
    SetPathName(pathname);
  }, [pathname]);

  return (
    <>
      {PathName === "/" ? (
        <div className="lg:sticky lg:top-0 lg:z-40 lg:opacity-95 dark:bg-black bg-white lg:shadow-md lg:py-2 lg:px-4 lg:mx-auto lg:max-w-full lg:flex lg:justify-between lg:items-center lg:w-full lg:container">
          <div className="flex lg:flex-row lg:items-center lg:gap-4 justify-center flex-col lg:w-full">
            <div className="lg:text-left font-extrabold font-sans text-lg mb-2 lg:mb-0 lg:ml-6 text-center">
              PORTFOLIO
            </div>
            <div className="flex justify-center flex-row lg:gap-4 lg:ml-auto lg:items-center">
              <a className="py-1.5 px-4 font-semibold dark:hover:bg-white dark:hover:text-black hover:bg-slate-600 rounded text-center hover:text-white">
                <button onClick={() => ToggleDarkmode()}>
                  <Togglebtn />
                </button>
              </a>
              <a
                onClick={() => window.scrollTo(0, 0)}
                href="#Home"
                className="py-1.5 px-4 font-semibold dark:hover:bg-white dark:hover:text-black hover:bg-slate-600 rounded text-center hover:text-white"
              >
                Home
              </a>
              <a
                href="#about"
                className="py-1.5 px-4 font-semibold dark:hover:bg-white dark:hover:text-black hover:bg-slate-600 rounded text-center hover:text-white"
              >
                About
              </a>
              <a
                className="py-1.5 px-4 font-semibold dark:hover:bg-white dark:hover:text-black hover:bg-slate-600 rounded text-center hover:text-white"
                href="#skills"
              >
                Skills
              </a>
              <a
                className="py-1.5 px-4 font-semibold dark:hover:bg-white dark:hover:text-black hover:bg-slate-600 rounded text-center hover:text-white"
                href="#projects"
              >
                Projects
              </a>
              {/* Uncomment for contact link */}
              {/* <a
                href="#Contact"
                className="py-1.5 px-4 font-semibold dark:hover:bg-white dark:hover:text-black hover:bg-slate-600 flex items-center gap-2 rounded text-center hover:text-white border-2 dark:border-white border-black"
              >
                Contact <IoCall />
              </a> */}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
