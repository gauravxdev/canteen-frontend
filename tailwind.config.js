// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // This is the crucial part for finding your files
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}