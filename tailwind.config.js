/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#2D0A45',   // deep warm plum — primary dark bg
        caramel:  '#6B2E8A',   // medium warm purple
        gold:     '#C8941E',   // warm gold accent — kept for warmth
        amber:    '#E8A830',   // warm amber — highlight
        cream:    '#FDF6FC',   // warm white with purple tint
        linen:    '#F2E8F8',   // soft warm lavender — light bg
        bark:     '#4A1068',   // mid-dark warm purple
        deepbrown:'#1A0230',   // deepest plum — navbar/footer
        muted:    '#A07AB8',   // muted warm purple — body text
        warm:     '#E8D0F5',   // soft lavender — light text on dark
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Lato', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
