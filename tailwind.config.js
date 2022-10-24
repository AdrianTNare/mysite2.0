/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mygreen: {
          light: "#dae1e7",
          dark: "#00909e",
        },
        myspace: "#EAEAEA",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
