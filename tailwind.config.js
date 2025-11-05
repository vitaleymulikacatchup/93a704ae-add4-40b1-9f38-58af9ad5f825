/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0ea5e9',
        'brand-red': '#dc2626',
        'brand-yellow': '#fbbf24',
        'hero-overlay': 'rgba(0, 0, 0, 0.4)',
        'footer-bg': '#4a5568'
      },
      fontFamily: {
        'sans': ['Arial', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')"
      }
    },
  },
  plugins: [],
}