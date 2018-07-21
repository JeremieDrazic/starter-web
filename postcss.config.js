const processorExtension = require('./build/config').stylesExtension

module.exports = {
  syntax: processorExtension === 'scss' ? 'postcss-scss' : undefined,
  plugins: [
    require('autoprefixer')
  ]
}
