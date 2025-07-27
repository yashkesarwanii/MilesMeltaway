/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // this includes all React components or JS files
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

