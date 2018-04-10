var webpack = require('webpack')
var fs = require('fs')
var path = require('path')

var ROOT = path.resolve(__dirname)
var ENV = process.env.ENV

var entry = {
  index: [
    ROOT + '/src/index.ts'
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
    extensions: ['.ts', '.js'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'components': ROOT + '/src/components',
      'pages': ROOT + '/src/pages'
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
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    ]
  }
}