/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito Sans', 'ui-sans-serif', 'system-ui'],
      },
      colors:{
        'webdevbg':'#F2F2F2'
      }
    },
  },
  plugins: [],
}