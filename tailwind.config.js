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
      boxShadow: {
        'card' : '20px 20px 40px -6px rgba(0,0,0,0.2)'
      }
    },
  },
  plugins: [],
}
