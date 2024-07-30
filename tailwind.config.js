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
        darkBgColor: "#2A3B47",
      },
    },
  },
  plugins: [],
};
