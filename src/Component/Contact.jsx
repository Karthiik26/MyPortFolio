import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Togglebtn from "./ToggleBtn";
import { useLocation, useNavigate } from "react-router-dom";
import imgcontact from "../assets/contact1.png";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
    const [state, handleSubmit] = useForm("mldrdoyp");

    if (state.succeeded) {
        alert("Thanks!");
    }

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const nav = useNavigate();

    const [Dark, setDark] = useState();

    function ToggleDarkmode() {
        const x = localStorage.getItem("darkMode");
        setDark(x);
        if (Dark === "true") {
            // Your dark mode logic here
        }
        console.log("--------" + Dark);
    }

    return (
        <>
            <div id="Contact" className="dark:bg-slate-900 dark:text-white">
                <div className="flex justify-between p-4 md:p-6 lg:p-8 items-center mx-auto max-w-screen-lg gap-4">
                    <button
                        className="p-2 dark:hover:bg-slate-500 hover:bg-black hover:text-white rounded-full"
                        onClick={() => nav("/")}
                    >
                        <FaArrowAltCircleLeft size={24} />
                    </button>
                    <button onClick={() => ToggleDarkmode()}>
                        <Togglebtn size={24} />
                    </button>
                </div>
                <div className="flex justify-center items-center pb-24 px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="w-full max-w-4xl rounded-lg shadow-2xl dark:shadow-slate-100 shadow-slate-400 py-6 px-4 sm:px-6 md:px-8">
                        <div className="flex flex-col items-center">
                            <div className="text-2xl sm:text-3xl font-sans font-extrabold tracking-wider mb-2">
                                Contact Me
                            </div>
                            <div className="text-sm sm:text-md font-sans font-bold tracking-wide mb-6 text-center">
                                Let's connect and turn your ideas into reality!
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <img
                                        src={imgcontact}
                                        alt="Contact"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="flex-1 mt-4 md:mt-0">
                                    <form onSubmit={handleSubmit}>
                                        <div className="flex flex-col mt-2">
                                            <label htmlFor="Name" className="text-sm sm:text-base">
                                                Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                id="Name"
                                                type="text"
                                                name="name"
                                                required
                                                className="border px-4 py-2 rounded-md border-black dark:text-black text-md my-1"
                                            />
                                            <ValidationError
                                                prefix="Name"
                                                field="name"
                                                errors={state.errors}
                                            />
                                        </div>
                                        <div className="flex flex-col mt-2">
                                            <label htmlFor="Email" className="text-sm sm:text-base">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="Email"
                                                name="Email"
                                                required
                                                className="border px-4 py-2 rounded-md border-black dark:text-black text-md my-1"
                                            />
                                            <ValidationError
                                                prefix="Email"
                                                field="email"
                                                errors={state.errors}
                                            />
                                        </div>
                                        <div className="flex flex-col mt-2">
                                            <label htmlFor="Phone" className="text-sm sm:text-base">
                                                Phone
                                            </label>
                                            <input
                                                type="text"
                                                id="Phone"
                                                name="Phone"
                                                className="border px-4 py-2 rounded-md border-black dark:text-black text-md my-1"
                                            />
                                        </div>
                                        <div className="flex flex-col mt-2">
                                            <label htmlFor="Message" className="text-sm sm:text-base mb-1">
                                                Message <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                name="Message"
                                                id="Message"
                                                required
                                                cols="30"
                                                rows="4"
                                                className="border px-4 py-2 rounded-md border-black dark:text-black text-md my-1"
                                            ></textarea>
                                            <ValidationError
                                                prefix="Message"
                                                field="message"
                                                errors={state.errors}
                                            />
                                        </div>
                                        <div className="flex flex-col mt-4">
                                            <button
                                                type="submit"
                                                disabled={state.submitting}
                                                className="py-2 px-4 hover:bg-green-600 hover:text-white text-black bg-yellow-300 text-lg font-semibold tracking-wide rounded-md"
                                            >
                                                Contact
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
