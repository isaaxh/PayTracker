/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        accentColor: "#29874c",
        bgColor: "#f2f5f6",
        bgSecondaryColor: "#fffefe",
        tintLight: "#a0b3c8",
        darkBgColor: "#18181b",
        darkBgSecondaryColor: "#27272a",
        tintDark: "#d4d4d4",
      },
    },
  },
  plugins: [],
};
