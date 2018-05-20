const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (options) => {
  let cssLoaders = [
    options.env === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        sourceMap: true,
        minimize: options.env === 'production'
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true
      }
    }
  ]

  if (options.preprocessor) {
    cssLoaders.push({
      loader: options.preprocessor + '-loader',
      options: {
        sourceMap: true
      }
    })
  }

  return cssLoaders
}
