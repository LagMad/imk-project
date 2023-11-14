/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "cust-darkest-brown": "#3A220A",
        "cust-darker-brown": "#774818",
        "cust-lighter-brown": "#E1AA74",
        "cust-lightest-brown": "#F3F0CA",
        "cust-darkest-blue": "#121B3B",
        "cust-darker-blue": "#1D3178",
        "cust-lighter-blue": "#3876BF",
        "cust-lightest-blue": "#C3DFFF",
      },
      backgroundImage:{
        'dust' : `url("https://res.cloudinary.com/dr0lbokc5/image/upload/v1682158133/bg_VisiMisi.svg")`,
      },
    },
  },
  plugins: [],
});
