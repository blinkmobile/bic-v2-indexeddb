'use strict';

// Node.js built-ins

var path = require('path');

// foreign modules

var webpack = require('webpack');

// this module

module.exports = {
  devtool: 'source-map',
  entry: path.join('.'),
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel' }
    ]
  },
  output: {
    filename: 'index.js',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    sourceMapFilename: '[file].map'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
