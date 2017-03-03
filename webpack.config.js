const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  context: resolve(__dirname, 'src'),
  module: {
    loaders: [
      { test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
          // 'postcss-loader',
        ],
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      }
    ],
  },
  resolve:{
  alias: {
    'game_files': resolve(__dirname, 'game_files'),
  },
},
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // activates HMR
    //html
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      filename: 'index.html'
    }),

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
}
