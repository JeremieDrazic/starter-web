const processorExtension = require('./build/config').cssPreprocessorExtension

module.exports = {
  syntax: processorExtension === 'scss' ? 'postcss-scss' : undefined,
  plugins: [
    require('autoprefixer')
  ]
}
