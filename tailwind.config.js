/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#2E1A0E',
        caramel: '#9C6B3C',
        gold: '#C8941E',
        amber: '#E8A830',
        cream: '#FDF6EC',
        linen: '#F5E8D0',
        bark: '#7A4A28',
        deepbrown: '#1C0F06',
        muted: '#A08060',
        warm: '#EDD9B8',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Lato', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
