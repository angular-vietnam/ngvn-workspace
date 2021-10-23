const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./apps/**/*.{html,ts,scss}', './libs/**/*.{html,ts,scss}'],
  darkMode: false,
  theme: {
    colors,
    fontFamily: {
      sans: ['Raleway', ...fontFamily.sans],
    },
    extend: {
      transitionProperty: {
        'background-image': 'background-image',
      },
      minHeight: {
        'day-card-description': '4rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
