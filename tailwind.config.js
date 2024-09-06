/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.3' },
        },
      },
      animation: {
        fadeOut: 'fadeOut 1s ease-in-out', // 1s duration, ease-in-out timing
      },
    },
  },
  plugins: [],
}

