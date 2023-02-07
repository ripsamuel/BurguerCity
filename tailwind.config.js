/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',],
  theme: {
    extend: {
      colors: {
        'primary':'#f3c614',
        'secundary':'#353535',
      },
      height:{ 
        '80':'20rem'
      }

    },
  },
  plugins: [],
}