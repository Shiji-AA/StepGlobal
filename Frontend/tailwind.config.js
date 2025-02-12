/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tealLight: "#00A0A0", // Custom name for #00A0A0
        tealDark: "#026971", // Custom name for #026971
      },
    },
  },
  plugins: [],
}
