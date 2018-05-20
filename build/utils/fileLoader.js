const assetsPath = require('./assetsPath')

module.exports = (options) => {
  let fileLoader = []
  const assetName = options.env === 'production'
    ? assetsPath(options.subFolder + '/[name].[hash:8].[ext]')
    : assetsPath(options.subFolder + '/[name].[ext]')

  fileLoader = [{
    loader: 'file-loader',
    options: {
      name: assetName
    }
  }]

  if (options.limit) {
    fileLoader = [{
      loader: 'url-loader',
      options: {
        name: assetName,
        limit: options.limit
      }
    }]
  }

  return fileLoader
}
