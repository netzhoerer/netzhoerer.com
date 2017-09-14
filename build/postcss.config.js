const syntax = require('postcss-scss');
const stylelint = require('stylelint');

module.exports = {
  parser: syntax,
  syntax: syntax,
  plugins: {
    // 'postcss-import': {},
    // 'postcss-cssnext': {},
    'autoprefixer': {
      browsers: 'last 2 versions, Explorer > 9',
      flexbox: true,
      grid: true,
      supports: true,
      remove: true
    },
    // 'cssnano': {}
  },
};