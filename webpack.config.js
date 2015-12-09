var path = require('path')

module.exports = {
  entry: {
    app: [ './src/main.js' ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        include: /src/,
        loader: 'babel',
        query: {
          plugins: [ 'transform-runtime' ],
          presets: [ 'es2015' ]
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js'],
    moduleDirectories: ['node_modules']
  },
  plugins: []
}
