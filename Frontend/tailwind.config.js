/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        custom: ['Graphik', 'Tahoma', 'sans-serif'],
      }, 
     
      colors: {
        tealLight: "#00A0A0", // Custom name for #00A0A0
        tealDark: "#026971", // Custom name for #026971
        cream: '#fdfdfd',
      },

    },
  },
  plugins: [],
  
}