var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'source/entry.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      //{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets:['react'] } }
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets:['react', 'es2015'] } }
    ]
  }
}
