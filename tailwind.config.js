/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "retro-blue": "#90AFFF",
        "retro-light-blue": "#C4D9FF",
        "retro-green-pastel": "#E6FFE6",
      },
      fontFamily: {
        display: ["VT323", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}