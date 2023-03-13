/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  prefix: 'tw-',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      margin: '2rem',
    },
    theme: {
      fontFamily: {
        'mono': ['ui-monospace', 'Roboto'],
        'display': ['Roboto'],
        'body': ['"Roboto"'],
      }
    },
    extend: {},
  },
  plugins: [],
}