const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./apps/**/*.{html,ts,scss}', './libs/**/*.{html,ts,scss}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,
    fontFamily: {
      sans: ['Raleway', ...fontFamily.sans],
    },
    extend: {
      transitionProperty: {
        'background-image': 'background-image',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
