/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        blackColor: '#231F20',
        orange: '#CF8C0B'
      }
    },
  },
  plugins: [],
}