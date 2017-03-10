'use strict';

const path = require('path');

const OUT_PATH = path.resolve('./build');
const PUBLIC_PATH = path.resolve('./app');
const IS_DEV = process.env.APP_ENV === 'development';
const IS_PROD = process.env.APP_ENV === 'production';

module.exports = [{
  name: 'js',
  entry: path.resolve('./app/main.js'),
  output: {
    path: OUT_PATH,
    // publicPath: PUBLIC_PATH,
    filename: 'main.bundle.' + (IS_PROD ? '' : '') + 'js'
  },
  devtool: IS_DEV ? 'source-map' : false,
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      // query: {
      //   presets: [
      //     [
      //       "es2015",
      //       {
      //         "modules": false
      //       }
      //     ]
      //   ]
      // },
      options: {
        cacheDirectory: true
      }
    }]
  }
}];
