/* eslint-disable no-var */ // no ES2015 here ?
'use strict';

// Node.js built-ins

var path = require('path');

// foreign modules

var webpack = require('webpack');

// this module

module.exports = {
  entry: path.join('.'),
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel' }
    ]
  },
  output: {
    filename: 'bmstorageidb.js',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
