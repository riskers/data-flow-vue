var webpack = require('webpack')
var fs = require('fs')
var path = require('path')

var ROOT = path.resolve(__dirname)
var ENV = process.env.ENV

var entry = {
  index: [
    ROOT + '/src/index.js'
  ]
}

module.exports = {
  entry: entry,
  devtool: 'eval-source-map',
  output: {
    path: ROOT + '/dist',
    publicPath: '//localhost:8888/dist/',
    filename: '[name].js'
  },
  devServer: {
    inline: true,
    quiet: true,
    contentBase: "./",
    port: 8888
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      components: ROOT + '/src/components',
      pages: ROOT + '/src/pages'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}