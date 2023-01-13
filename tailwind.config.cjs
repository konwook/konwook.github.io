const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      sans: [...defaultTheme.fontFamily.sans],
      serif: ["Newsreader", ...defaultTheme.fontFamily.serif],
    },
  },
  plugins: [],
};
