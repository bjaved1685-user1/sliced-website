/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#3D2B1F',
        caramel: '#8B5E3C',
        gold: '#C9A84C',
        cream: '#FAF7F2',
        linen: '#F0E8D8',
        bark: '#6B4226',
        deepbrown: '#2C1810',
        muted: '#9E8A78',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Lato', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
