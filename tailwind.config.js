const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        body: "url('/body-bg.png')",
      },
      colors: {
        primary: "#E5F0FF",
        neutral: "#353A40",
        button: "#69B7E1",
        accentBlue: "#F0F7FF",
        lightGray: "#939AA4",
      },
      boxShadow: {
        blueShadow: "0px 4px 12px rgba(105, 183, 225, 0.5)",
        blueShadowLight: "0px 4px 12px rgba(105, 183, 225, 0.2)",
      },
    },
  },
  plugins: [],
};
