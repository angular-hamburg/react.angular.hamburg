
const webpack = require('webpack')
const baseConfig = require('./webpack.config.base')

baseConfig.module.loaders.push({
  test: /\.css$/,
  loaders: [
    'style-loader',
    'css-loader?modules&minimize&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
    'postcss-loader'
  ]
})

module.exports = Object.assign(baseConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    contentBase: './src',
    hot: true
  }
})
