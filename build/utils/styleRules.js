const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const generateLoaders = function (config) {
  let styleLoaders = [
    config.env === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        sourceMap: true,
        minimize: config.env === 'production'
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true
      }
    }
  ]

  if (config.preprocessor.enabled) {
    styleLoaders.push({
      loader: config.preprocessor.name + '-loader',
      options: {
        sourceMap: true
      }
    })
  }

  return styleLoaders
}

module.exports = (config) => {
  let styleRules = [
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: generateLoaders(config)
    }
  ]

  if (config.preprocessor.enabled) {
    styleRules.push({
      test: new RegExp('\\.' + config.preprocessor.extension + '$'),
      exclude: /node_modules/,
      use: generateLoaders(config)
    })
  }

  return styleRules
}
