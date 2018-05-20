const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob')

const config = require('./config.js')
const utils = require('./utils')

const env = process.env.NODE_ENV

const baseConfig = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: env === 'production' ? '[name].[chunkhash:8].js' : '[name].js',
    path: config.build.assetsRoot,
    publicPath: env === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.css', '.styl', '.scss'],
    alias: {
      'styles': path.resolve(__dirname, './src/styles/'),
      'assets': path.resolve(__dirname, './src/assets/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: utils.cssLoaders({ env: env, preprocessor: false })
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: utils.cssLoaders({ env: env, preprocessor: config.cssPreprocessor })
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        exclude: /node_modules/,
        use: utils.fileLoader({ env: env, limit: 100, subFolder: 'img' })
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: utils.fileLoader({ env: env, limit: 10000, subFolder: 'fonts' })
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        exclude: /node_modules/,
        use: utils.fileLoader({ env: env, limit: 10000, subFolder: 'medias' })
      }
    ]
  },

  plugins: []
}

const viewFiles = glob.sync(process.cwd() + '/public/*.html')
viewFiles.forEach(file => {
  baseConfig.plugins.push(new HtmlWebpackPlugin({
    template: env === 'production' ? config.build.index : config.dev.index,
    filename: path.basename(file),
    template: file,
    inject: true,
    chunksSortMode: env === 'production' ? 'dependency' : 'auto'
  }))
})

module.exports = baseConfig
