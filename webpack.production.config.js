var webpack = require('webpack')
var objectAssign = require('object-assign')

var defaultConfig = require('./webpack.config.js')

var plugins = defaultConfig.plugins || []

module.exports = objectAssign({}, defaultConfig, {
  plugins: plugins.concat([
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
})
