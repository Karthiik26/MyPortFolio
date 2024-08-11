/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        flyinBottom: "flyinBottom 1s ease-out forwards",
        flyinBottom1: "flyinBottom 2s ease-out forwards",
        flyinBottom2: "flyinBottom 3s ease-out forwards",
        flyinLeft: "flyinLeft 1s ease-out forwards",
        "bounce-slow": "bounce 2s linear infinite",
        wave: "wave 2s linear infinite",
      },
      keyframes: {
        wave: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-1%)" },
          "100%": { transform: "translateX(0)" },
        },
        flyinBottom: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        flyinLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, rgb(232, 84, 84) 0%, rgba(245, 198, 208, 0.922) 70%, rgba(255, 255, 255, 0.896796218487395) 100%)",
        "custom-gradient-2":
          "linear-gradient(0deg, rgb(232, 84, 84) 0%, rgba(245, 198, 208, 0.922) 70%, rgba(255, 255, 255, 0.896796218487395) 100%)",
      },
      screens: {
        // "mobile-sm": "320px", 
        "mobile-md": "360px", // Medium mobile devices
        "tablet": "768px", // Tablet devices
      },
    },
  },
  plugins: [],
};
