import React, { useEffect } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
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
        className="mt-20 p-6 md:p-20 bg-gray-50 dark:bg-slate-900 dark:text-white"
      >
      <div
        className="bg-slate-200 h-20 rounded-2xl dark:bg-slate-600 dark:text-white"
        data-aos="fade-right"
      >
        <div className="text-2xl pt-4 font-sans font-bold border-b-4 dark:border-b-white w-56 border-b-black mb-20 ml-4 sm:ml-10 lg:ml-20">
            Projects
        </div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {[
            {
              imgSrc: Todoimg,
              altText: "TODO Project",
              link: "https://karthikcrudmern.vercel.app/",
              githubFront: "https://github.com/Karthiik26/CRUD-Frontend-MERN",
              githubBack: "https://github.com/Karthiik26/CRUD-Backend-MERN",
              description: "User Can Create Update And Delete TODOs As Well As Can Update Their Profile",
              title: "TODO PROJECT",
              stack: "(MERN STACK)"
            },
            {
              imgSrc: Lectureimg,
              altText: "Lecture Scheduler Project",
              link: "https://schedule-lec-front-end.vercel.app/Email",
              githubFront: "https://github.com/Karthiik26/ScheduleLec_FrontEnd",
              githubBack: "https://github.com/Karthiik26/ScheduleLec_BackEnd",
              description: "Admin - Should Be Able To Handle The Lectures And Instructors",
              title: "LECTURE SCHEDULER PROJECT",
              stack: "(MERN STACK)"
            },
            {
              imgSrc: tailor,
              altText: "Tailor Business Web Application Project",
              link: "https://tailorbusinesswebapp.vercel.app/Login",
              githubFront: "https://github.com/Karthiik26/Tailor_Frontend",
              githubBack: "https://github.com/Karthiik26/Tailor_Backend",
              description: "User Purchase Cloths And Make Appointment With Tailors.",
              title: "TAILOR BUSINESS WEB APPLICATION PROJECT",
              stack: "(MEAN STACK)"
            },
            {
              imgSrc: ecomm,
              altText: "E-Commerce Project",
              link: "",
              githubFront: "",
              githubBack: "",
              description: "User Can Purchase And Seller Can Add Product",
              title: "E-COMMERCE PROJECT",
              stack: "(Angular js + REST API)"
            },
            {
              imgSrc: ChatApp,
              altText: "Chat Application Project",
              link: "https://karthik-chatapp.netlify.app/",
              githubFront: "https://github.com/Karthiik26/CHAT_APP",
              githubBack: "https://github.com/Karthiik26/CHAT_APP/tree/BackEnd",
              description: "Users Can Interact With The Registered Users.",
              title: "CHAT APPLICATION PROJECT",
              stack: "(MERN STACK + SOCKET.IO)"
            }
          ].map((project, index) => (
            <div
              key={index}
              data-aos-duration="2000"
              data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up"}
              className="relative bg-slate-900 shadow-xl shadow-gray-400 rounded-lg overflow-hidden"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.imgSrc}
                  alt={project.altText}
                  className="w-full h-64 object-cover"
                />
              </a>
              <div className="p-4">
                <div className="text-lg font-sans font-bold text-center">
                  {project.title}
                  <div className="text-md font-semibold">
                    {project.stack}
                  </div>
                </div>
                <div className="text-sm font-sans font-semibold text-gray-500 text-center mt-2">
                  {project.description}
                </div>
                <div className="flex justify-center gap-6 mt-3">
                  {project.githubFront && (
                    <a
                      className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                      href={project.githubFront}
                      target="blank"
                      title="GitHub Frontend"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                  {project.githubBack && (
                    <a
                      className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                      href={project.githubBack}
                      target="blank"
                      title="GitHub Backend"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      className="p-2 hover:bg-slate-700 hover:text-white rounded-full"
                      href={project.link}
                      target="blank"
                      title="Website Link"
                    >
                      <FaLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[url('../src/assets/code.png')] bg-fixed py-14 mt-24 dark:bg-slate-600 bg-slate-100">
          <div className="flex justify-center">
            <button
              onClick={() => nav("/Contact")}
              className="px-10 py-4 font-sans font-bold hover:bg-rose-200 hover:border-blue-500 hover:text-blue-500 bg-rose-500 text-gray-200 rounded-lg text-xl border border-rose-700 flex items-center gap-3"
            >
              Contact <IoCall />
            </button>
          </div>
        </div>

        <div className="dark:bg-slate-900 dark:text-white flex justify-center items-center py-20 bg-slate-200">
          <div
            id="ThankYou"
            className="animate-pulse"
            data-aos="fade-right"
            data-aos-duration="2500"
          >
            <div className="text-2xl font-sans font-bold">
              Thank You For Scrolling
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
