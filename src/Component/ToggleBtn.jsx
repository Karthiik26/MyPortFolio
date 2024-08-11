import { useState } from "react";
import { useEffect } from "react";
import { LiaToggleOnSolid, LiaToggleOffSolid } from "react-icons/lia";
import "../App.css";

export default function Togglebtn() {

  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode"));
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", JSON.stringify(true));
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", JSON.stringify(false));
    }
  }, [darkMode]);

  return (
    <>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex justify-center items-center mt-[3px]"
      >
        {darkMode ? (
          <span>
            <LiaToggleOnSolid size={28} />
          </span>
        ) : (
          <span>
            <LiaToggleOffSolid size={28} />
          </span>
        )}
      </button>
    </>
  );
}
