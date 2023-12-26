/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "23ch" },
        },
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "blue" },
        },
      },
      animation: {
        typing: "typing 3s steps(18) infinite alternate, blink 0.4s infinite",
      },
    },
    screens: {
      'sm': '576px',
      'md': '1200px',
      'lg': '1890px'
    }
  },
  plugins: [],
};
