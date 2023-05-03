/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat', defaultTheme.fontFamily.sans],
        head:['Bruno Ace', defaultTheme.fontFamily.serif],
        foot:['Hanken Grotesk', defaultTheme.fontFamily.serif],
        hand:['Red Hat Mono', defaultTheme.fontFamily.serif],
        eye:['Inter Tiger', defaultTheme.fontFamily.serif],
        ear:['Sora', defaultTheme.fontFamily.sans],
       },
    },
  },
  plugins: [],
}
