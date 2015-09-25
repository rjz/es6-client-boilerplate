module.exports = function (config) {
  config.set({
    autoWatch: true,
    browsers: ['PhantomJS'],
    files: [
      'node_modules/es5-shim/es5-shim.js',
      'node_modules/es6-shim/es6-shim.js',
      'node_modules/custom-event-polyfill/custom-event-polyfill.js',
      'src/*_spec.js'
    ],
    frameworks: [
      'jasmine',
      'sinon'
    ],
    reporters: ['spec'],
    preprocessors: {
      'src/*_spec.js': [ 'webpack' ]
    },
    webpack: {
      module: {
        loaders: [
          {
            test: /\.js/,
            exclude: /node_modules/,
            loader: 'babel'
          }
        ]
      },
      cache: true,
      resolve: {
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules']
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};

