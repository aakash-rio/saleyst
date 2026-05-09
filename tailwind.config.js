/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        'grid-move': {
          '0%': { transform: 'perspective(1000px) rotateX(60deg) translateY(0)' },
          '100%': { transform: 'perspective(1000px) rotateX(60deg) translateY(50px)' },
        }
      },
      animation: {
        'grid-move': 'grid-move 20s linear infinite',
      }
    },
  },
  plugins: [],
}
