/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{.js,jsx}",
    "./src/components/*{.js,jsx}",
    "./src/assets/*.{.js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blue-green': '#008181'
      }
    },
  },
  plugins: [],
}

