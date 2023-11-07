/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'Kalam' : ['Kalam', 'cursive'],
        'Monoton':[ 'Monoton', 'sans-serif'],
        'Mali': ['Mali', 'cursive']
      },
    },
  },
  plugins: [],
}