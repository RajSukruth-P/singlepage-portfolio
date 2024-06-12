/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      gridColumn: {
        '1/2': 'span 1 / span 2', // Allows for 2 items per row in a grid
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

