
const webpack = require('webpack')
const config = require('./webpack-config')

module.exports = Object.assign(config, {
  devServer: {
    host: 'localhost',
    port: 3000,
    contentBase: './src',
    hot: true
  }
})
