var webpack = require('webpack');
var objectAssign = require('object-assign');

var defaultConfig = require('./webpack.config.js');

module.exports = objectAssign({}, defaultConfig, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
});

