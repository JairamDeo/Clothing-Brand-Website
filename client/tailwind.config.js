/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      backgroundImage: {
        'Logo' : "url('/src/assets/logo.png')", //white bg
        'LogoOg' : "url('/src/assets/logo.jpg')", //beige bg
      },
    },
  },
  plugins: [],
}