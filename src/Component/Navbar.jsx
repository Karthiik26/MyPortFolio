import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import "../App.css";
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

  useEffect(()=>{
    console.log(pathname);
    SetPathName(pathname)
  }, [pathname])

  return (
    <>
    {
      PathName === '/' ? 
      (<div className=" w-full max-w-full bg-white bg-transparent h-auto py-2 sticky top-0 opacity-95 z-40 dark:opacity-95 dark:bg-slate-900 dark:text-white">
        <div className="flex justify-between items-center mx-auto">
          <div className="mx-4">
            <div className="text-left font-extrabold font-sans text-lg">
              PORFOLIO
            </div>
          </div>
          <div className="mx-4 mt-[3px] flex flex-row gap-4 justify-center items-center">
            <button onClick={() => ToggleDarkmode()}>
              <Togglebtn />
            </button>
            <a
              onClick={()=>window.scrollTo(0, 0)}
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
            {/* <a
              href="#Contact"
              className="py-1.5 px-4 font-semibold dark:hover:bg-white dark:hover:text-black hover:bg-slate-600 flex justify-center items-center gap-2 rounded text-center hover:text-white border-2 dark:border-white border-black"
            >
              Contact <IoCall />
            </a> */}
            {/* <NavLink
            className="py-1.5 px-4 font-semibold dark:hover:bg-white dark:hover:text-black hover:bg-slate-600 flex justify-center items-center gap-2 rounded text-center hover:text-white border-2 dark:border-white border-black"
            to={'/Contact'}
            > Contact <IoCall /></NavLink> */}
          </div>
        </div>
      </div>) : null
    }
      
    </>
  );
};

export default Navbar;
