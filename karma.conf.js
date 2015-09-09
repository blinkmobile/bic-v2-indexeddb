/* eslint-disable no-var */ // no ES2015 here ?
'use strict';

// local modules

var webpackCfg = require('./webpack.conf');

// this module

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['tap'],
    files: ['tests/**/*.js'],
    preprocessors: {
      'tests/**/*.js': ['webpack']
    },
    webpack: {
      node: {
        fs: 'empty'
      },
      module: {
        loaders: webpackCfg.module.loaders,
        postLoaders: [{
          exclude: /(tests|node_modules)/,
          loader: 'istanbul-instrumenter',
          test: /\.js$/
        }]
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    reporters: [
      'dots',
      'coverage'
    ],
    coverageReporter: {
      type: 'text',
      dir: 'coverage/'
    },
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: false,
    singleRun: true
  });
};
