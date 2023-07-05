/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    fontFamily: {
      funky: "funky",
      subscribe: "subscribe",
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        "textColour" : 'rgb(14 116 144)',
        "bgColour" : "rgb(6 182 212)",

      },

      boxShadow:{
        "bottomShadow" : "0px 30px 18px -8px rgba(0, 0, 0, 0.1)"
      },
    },
  },
  plugins: [],
}
