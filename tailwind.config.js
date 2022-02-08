//the following no longer seems necessary after upgrading to TW 3.0:
// const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    fontFamily: {
      bebas: ['"Bebas Neue"', "cursive"],
      montserrat: ["Montserrat", "sans-serf"],
      playfair: ['"Playfair Display"', "serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        purpleG1: "#391c70",
        purpleG2: "#0c143d",
        devGreen: "#07F901",
      },
      backgroundImage: {
        "purple-web": "url('/assets/newsletter_web.png')",
      },
      boxShadow: {
        card: "0px 0px 4px 1px #D1D1D1",
      },
    },
  },
  plugins: [],
};
