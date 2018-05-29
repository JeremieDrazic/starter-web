const path = require('path')

module.exports = {
  cssPreprocessor: 'sass',
  cssPreprocessorExtension: 'scss',

  dev: {
    index: path.resolve(__dirname, '../public/index.ejs'),
    contentBase: path.resolve(__dirname, '../public'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    https: false,
    port: 8080,
    host: 'localhost',
    errorOverlay: true,
    poll: false,
    emitWarnings: true,
    devtool: 'cheap-module-eval-source-map'
  },

  build: {
    index: path.resolve(__dirname, '../public/index.ejs'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    devtool: 'source-map'
  }
}
