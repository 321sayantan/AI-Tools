/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // This tells Tailwind to purge unused styles in these files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}
