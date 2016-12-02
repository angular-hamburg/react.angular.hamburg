
const webpack = require('webpack')
const baseConfig = require('./webpack.config.base')

module.exports = Object.assign(baseConfig, {
  devServer: {
    host: 'localhost',
    port: 3000,
    contentBase: './src',
    hot: true
  }
})
