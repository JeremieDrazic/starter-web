const path = require('path')

const webpack = require('webpack')
const merge = require('webpack-merge')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const baseConfig = require('./webpack.base.conf.js')
const config = require('./config.js')
const utils = require('./utils/index.js')

const env = process.env.NODE_ENV
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devConfig = merge(baseConfig, {
  mode: 'development',
  devtool: config.dev.devtool,

  devServer: {
    clientLogLevel: 'warning',
    contentBase: config.dev.contentBase,
    https: config.dev.https,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    hot: true,
    inline: true,
    publicPath: config.dev.assetsPublicPath,
    overlay: config.dev.errorOverlay,
    quiet: true,
    watchOptions: {
      poll: config.dev.poll
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: config.dev.emitWarnings,
          emitErrors: !config.dev.emitWarnings,
          formatter: require('eslint-friendly-formatter')
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})

const https = config.dev.https ? 'https' : 'http'

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: ${https}://${devConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
          ? utils.createNotifierCallback()
          : undefined
      }))

      resolve(devConfig)
    }
  })
})
