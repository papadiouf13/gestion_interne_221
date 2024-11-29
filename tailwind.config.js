/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'rouge': '#C9151B',
        'beige': '#B89A53',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
