module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./conponents/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
