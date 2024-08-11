import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import tailor from "../../src/assets/tail.png";
import ecomm from "../../src/assets/image3.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Todoimg from "../assets/image2.png";
import Lectureimg from "../assets/image.png";
import ChatApp from "../assets/Chatapp.png";

const Projects = () => {
  const nav = useNavigate();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div
        id="projects"
        className="mt-20 p-20 bg-gray-50 dark:bg-slate-900 dark:text-white"
      >
        <div
          className="bg-slate-200 h-20 rounded-2xl dark:bg-slate-600 dark:text-white"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="text-2xl pt-4 font-sans font-bold border-b-4  dark:border-b-white w-56  border-b-black mb-20 ml-20 ">
            Projects
          </div>
        </div>

        <div className="flex justify-center items-center gap-20 flex-row mt-14 max-w-90">
          <div data-aos-duration="2000" data-aos="fade-up-right">
            <div className="w-auto my-4 py-6 px-4 shadow-xl shadow-gray-400 rounded-lg max-w h-[500px] animate-flyinBottom">
              <a
                href="https://karthikcrudmern.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Todoimg}
                  alt="Img Not Found"
                  width={600}
                  className="border-2 border-gray-800 rounded-lg"
                />
              </a>
              <div className="flex justify-center items-center flex-col mx-2 mt-2 gap-2">
                <div className=" font-sans font-bold my-4">
                  <div className="text-lg">TODO PROJECT </div>
                  <div className="text-center font-semibold text-md">
                    {" "}
                    ( MERN STACK )
                  </div>
                </div>
                <div className="text-sm font-sans font-semibold text-gray-500">
                  User Can Create Update And Delete TODOs As Well As Can Update
                  Their Profile
                </div>
              </div>
              <div className="ml-12 flex gap-6 mt-3">
                <a
                  className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                  href="https://github.com/Karthiik26/CRUD-Frontend-MERN"
                  target="blank"
                  title="CRUD FRONTEND"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                  href="https://github.com/Karthiik26/CRUD-Backend-MERN"
                  target="blank"
                  title="CRUD BACKEND"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                  href="https://karthikcrudmern.vercel.app/"
                  target="blank"
                >
                  <FaLink size={18} />
                </a>
                {/* <a href="https://tailorbusinesswebapp.vercel.app/Login" target='blank'><FaLink size={18} /></a> */}
              </div>
            </div>
          </div>

          <div data-aos-duration="2000" data-aos="fade-up">
            <div className="w-auto my-4 py-6 px-4 shadow-xl shadow-gray-400 rounded-lg max-w h-[500px] animate-flyinBottom">
              <a
                href="https://schedule-lec-front-end.vercel.app/Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Lectureimg}
                  alt="Img Not Found"
                  width={630}
                  className="border-2 border-gray-800 rounded-lg"
                />
              </a>
              <div className="flex justify-center items-center flex-col mx-2 mt-2 gap-2">
                <div className="text-lg font-sans font-bold text-center my-4">
                  <div className="text-lg">LECTURE SCHEDULER PROJECT</div>
                  <div className="text-center font-semibold text-md">
                    {" "}
                    ( MERN STACK )
                  </div>
                </div>
                <div className="text-sm font-sans font-semibold text-gray-500">
                  <b>Admin - </b> Should Be Able To Handle The Lectures And
                  Instructors
                </div>
              </div>
              <div className="ml-12 flex gap-6 mt-3">
                <a
                  className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                  href="https://github.com/Karthiik26/ScheduleLec_FrontEnd"
                  target="blank"
                  title="Lecture Schedule FrontEnd"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                  href="https://github.com/Karthiik26/ScheduleLec_BackEnd"
                  target="blank"
                  title="Lecture Schedule BackEnd"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                  href="https://schedule-lec-front-end.vercel.app/Email"
                  target="blank"
                  title="Website Link"
                >
                  <FaLink size={18} />
                </a>
                {/* <a href="https://tailorbusinesswebapp.vercel.app/Login" target='blank'><FaLink size={18} /></a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-28 flex-row mt-20 max-w-90">
          <div data-aos-duration="2000" data-aos="fade-up-right">
            <div className="w-auto my-4 py-6 px-4 shadow-xl shadow-gray-400 rounded-lg h-[500px] animate-flyinBottom">
              <a
                href="https://tailorbusinesswebapp.vercel.app/Login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={tailor}
                  alt="Img Not Found"
                  width={600}
                  className="border-2 border-gray-800 rounded-lg"
                />
              </a>
              <div className="flex justify-center items-center flex-col mx-2 mt-2 gap-2">
                <div className="font-sans font-bold text-center my-4">
                  <div className="text-lg">
                    TAILOR BUSINESS WEB APPLICATION PROJECT
                  </div>
                  <div className="text-center font-semibold text-md">
                    {" "}
                    ( MEAN STACK )
                  </div>
                </div>
                <div className="text-sm font-sans font-semibold text-gray-500">
                  User Purchase Cloths And Make Appointment With Tailors.
                </div>
              </div>
              <div className="ml-12 flex gap-6 mt-3">
                <a
                  className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                  href="https://github.com/Karthiik26/Tailor_Frontend"
                  target="blank"
                  title="Tailor FrontEnd"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                  href="https://github.com/Karthiik26/Tailor_Backend"
                  title="Tailor Backend"
                  target="blank"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                  href="https://tailorbusinesswebapp.vercel.app/Login"
                  target="blank"
                >
                  <FaLink size={18} />
                </a>
              </div>
            </div>
          </div>

          <div data-aos-duration="2000" data-aos="fade-up">
            <div className="w-auto my-4 py-6 px-4 shadow-xl shadow-gray-400 rounded-lg h-[500px] animate-flyinBottom">
              <img
                src={ecomm}
                alt="Img Not Found"
                width={600}
                className="border-2 border-gray-800 rounded-lg"
              />
              <div className="flex justify-center items-center flex-col mx-2 mt-2 gap-2">
                <div className="font-sans font-bold text-center my-4">
                  <div className="text-lg">E-COMMERCE PROJECT </div>
                  <div className="text-center font-semibold text-md">
                    {" "}
                    ( Angular js + REST API )
                  </div>
                </div>
                <div className="text-sm font-sans font-semibold text-gray-500">
                  User Can Purchase And Seller Can Add Product
                </div>
              </div>
              <div className="ml-12 flex gap-6 mt-3">
                {/* <a
                className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                href=""
                target="blank"
                title="Not Available"
              >
              </a> */}
                <FaGithub size={18} />
                {/* <a
                className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                href=""
                target="blank"
                title="Not Available"
              >
              </a> */}
                <FaLink size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-28 flex-row mt-20 max-w-90">
          <div data-aos-duration="2000" data-aos="fade-up-right">
            <div className="w-auto my-4 py-6 px-4 shadow-xl shadow-gray-400 rounded-lg h-[500px] animate-flyinBottom">
              <a
                href="https://karthik-chatapp.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ChatApp}
                  alt="Img Not Found"
                  width={600}
                  className="border-2 border-gray-800 rounded-lg"
                />
              </a>
              <div className="flex justify-center items-center flex-col mx-2 mt-2 gap-2">
                <div className="font-sans font-bold text-center my-4">
                  <div className="text-lg">CHAT APPLICATION PROJECT</div>
                  <div className="text-center font-semibold text-md">
                    {" "}
                    ( MERN STACK + SOCKET.IO )
                  </div>
                </div>
                <div className="text-sm font-sans font-semibold text-gray-500">
                  Users Can Interact With The Registered Users.
                </div>
              </div>
              <div className="ml-12 flex gap-6 mt-3">
                <a
                  className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                  href="https://github.com/Karthiik26/CHAT_APP"
                  target="blank"
                  title="CHAT APP FrontEnd & BackEnd"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                  href="https://karthik-chatapp.netlify.app/"
                  target="blank"
                >
                  <FaLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('../src/assets/code.png')] bg-fixed py-14 dark:bg-slate-600 bg-slate-100">
        <div className="flex justify-end items-center ml-auto mr-28">
          <div data-aos="zoom-in" data-aos-duration="3000">
            <button
              onClick={() => nav("/Contact")}
              className="flex justify-center px-10 py-4 items-center gap-3 font-sans font-bold hover:bg-rose-200 hover:border-blue-500 hover:text-blue-500 bg-rose-500 text-gray-200 rounded-lg text-right text-xl border border-rose-700"
            >
              Contact <IoCall />
            </button>
          </div>
        </div>
      </div>

      <div className="dark:bg-slate-900 dark:text-white flex justify-center items-center py-20 bg-slate-200">
        <div
          id="ThankYou"
          className="animate-pulse"
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          <div className="text-2xl font-sans font-bold ">
            Thank You For Scrolling
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
