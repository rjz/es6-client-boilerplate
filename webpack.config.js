var path = require('path');
var project = require('./package');

module.exports = {
  entry: {
    app: [ './src/main.js' ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js",
    chunkFilename: "[id].js"
  },
   module: {
    loaders: [
      { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js'],
    moduleDirectories: ['node_modules']
  }
};

