/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
        mont: ["Montserrat Alternates", "sans-serif"],
      },

      colors: {
        orange: "#EF8A3A",
        paleOrange: "hsl(25, 100%, 94%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        gravishBlue: "hsl(220, 14%, 75%)",
        lightGravishBlue: "hsl(223, 64%, 98%)",
        blackMenu: "hsla(0, 0%, 0%, .75)",
        lightWhite: "hsla(255, 100%, 100%, .75)",
        bgModal: "rgba(5, 12, 28, 0.9)",
        bgCardModal: "rgba(255,255,255,0.1)",
        borderCardModal: "rgba(255,255,255,0.5)",

        dark: {
          darkElements: "hsl(209, 23%, 22%)",
          darkBg: "hsl(207, 26%, 17%)",
          darkText: "hsl(0, 0%, 100%)",
        }
      }
    },
  },
  plugins: [],
}

