/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,svelte}"],
  theme: {
    extend: {
      colors: {
        lightest: "#D0FFCF",
        medium: "#68FF92",
        "medium-dark": "#12E734",
        primary: "#2FDE41",
      },
    },
  },
  plugins: [],
};
