/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", 
            "./node_modules/tw-elements-react/dist/js/**/*.js",
            "./node_modules/tw-elements/dist/js/**/*.js",
            "./src/*.html"
          ],
  theme: {
    fontFamily: {
      sans: ["source-sans-pro"],
      arimo: ["arimo" ,'sans-serif'],
    },
    letterSpacing: {
      wider: '0.04rem',
    },
    extend: {
      boxShadow:{
        boxshadow: "0 0 10px 1px gray"
      },
      backgroundImage:{
        carasol:"linear-gradient(114deg, #06D8AB 7.35%, #1DAFBF 27.57%, #10C9B1 47.41%, rgba(17, 119, 187, 0.72) 68.85%, rgba(3, 225, 157, 0.85) 87.15%, #92FE9D 107.75%)"
      },
      border:{
        bdr:"2px solid black"
      }
    },
    // colors:{
    //   'Titan':'#F9F9FF'
    // }
  },
  plugins: [addDynamicIconSelectors(), require('@tailwindcss/forms')],
  darkMode: "class",
};
