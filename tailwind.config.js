/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue1: "#0D1B2A",
          blue2: "#1B263B",
          blue3: "#415A77",
          blue4: "#778DA9",
          gris1: "#E0E1DD",
          orange1: "#FB5607",
        },
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-3%)', 
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        bounce: 'bounce 1s infinite',
      },
    }
  },
  plugins: [],
}