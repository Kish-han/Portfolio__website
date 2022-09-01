/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      headingtext: ['Lobster', "cursive"],
      Raleway: ['Raleway', "sans-serif"],
    },
    extend: {
      colors: {
        'primarycolor': '#39FF13',
        'secondarycolor' : '#252629'
      },
    },
  },
  plugins: [],
}
