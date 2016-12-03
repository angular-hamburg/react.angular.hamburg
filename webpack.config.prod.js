
const webpack = require('webpack')
const baseConfig = require('./webpack.config.base')

baseConfig.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    },
    comments: false
  }),
  new webpack.optimize.DedupePlugin()
])

module.exports = baseConfig
