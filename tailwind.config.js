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
        "cust-darkest-blue": "#000C39",
        "cust-darker-blue": "#001767",
        "cust-lighter-blue": "#3876BF",
        "cust-lightest-blue": "#C3DFFF",
        "cust-green": "#23B000",
        "cust-red": "#BA0000",
        "cust-orange": "#FF9900"
      },
      backgroundImage:{
        'dust' : `url("https://res.cloudinary.com/dr0lbokc5/image/upload/v1682158133/bg_VisiMisi.svg")`,
        'contact': `url("/src/assets/ContactUs.png")`,
        'books': `url("/src/assets/Books.png")`,
        'laptop': `url("/src/assets/laptop.png")`,
        'profile': `url("/src/assets/profile.svg")`,
        'not-found': `url("/src/assets/NotFound.svg")`,
      },
    },
  },
  plugins: [],
});
