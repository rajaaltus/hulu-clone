const colors = require('tailwindcss/colors')
module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "2000px"
      },
      colors: {
        "back": "#06202A"
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'group-hover'],
      translate: ['hover']
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
