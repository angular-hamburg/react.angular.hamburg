
const path = require('path')
const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')
const postcssImportUrl = require('postcss-import-url')
const postcssCustomProperties = require('postcss-custom-properties')

module.exports = {
  dev: 'cheap-module-source-map',
  context: path.join(__dirname, './src'),
  entry: {
    js: ['babel-polyfill', './index.js'],
    html: './index.html'
  },
  output: {
    path: path.join(__dirname, './docs'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  postcss: [
    autoprefixer,
    postcssImport,
    postcssImportUrl,
    postcssCustomProperties
  ]
}
