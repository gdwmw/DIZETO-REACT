/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.jsx", "./src/App.jsx", "./src/pages/*.jsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#23272d",
      },
      transitionDelay: {
        120: "120ms",
      },
      transitionDuration: {
        250: "250ms",
      },
      dropShadow: {
        "md-white": ["0 4px 3px rgb(255 255 255 / 0.12)", "0 2px 2px rgb(255 255 255 / 0.11)"],
        "md-black": ["0 4px 3px rgb(0 0 0 / 0.12)", "0 2px 2px rgb(0 0 0 / 0.11)"],
      },
    },
  },
  plugins: [],
};
