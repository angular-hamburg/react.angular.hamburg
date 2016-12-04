
const path = require('path')
const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')
const postcssImportUrl = require('postcss-import-url')
const postcssCustomProperties = require('postcss-custom-properties')
const CleanPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')

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
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&minimize&importLoaders=1&localIdentName=[hash:base64:5]',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanPlugin(['docs'], {
      verbose: true
    }),
    new CopyPlugin([
      {
        from: 'service-*.js'
      },
      {
        from: 'media/**'
      },
      {
        context: '../node_modules',
        from: 'font-awesome/**',
        to: './vendors/'
      }
    ]),
    new ImageminPlugin({
      test: 'media/*',
      pngquant: {
        quality: '80-90'
      },
      jpegtran: null,
      plugins: [
        imageminMozjpeg({
          quality: '80, 90'
        })
      ]
    })
  ],
  resolve: {
    extensions: ['', '.js', '.css']
  },
  postcss: [
    autoprefixer,
    postcssImport,
    postcssImportUrl,
    postcssCustomProperties
  ]
}
