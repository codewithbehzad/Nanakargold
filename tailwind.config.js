/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["iranyekan"],
      },
      colors: {
        "backdrop-color": "rgba(0, 0, 0, 0.5)",
        navlinks: "#555775",
        primary:"#6A6C87",
        sloganSecondary: "#9CA3AF",
        sloganPrimary:"#2A2D53",
      },
    },
  },
  plugins: [],
};
