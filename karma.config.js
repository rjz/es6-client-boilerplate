module.exports = function (config) {
  config.set({
    autoWatch: true,
    browsers: ['PhantomJS'],
    files: [
      'node_modules/babel-core/browser-polyfill.min.js',
      'src/*_spec.js'
    ],
    frameworks: [
      'jasmine',
      'sinon'
    ],
    reporters: ['spec', 'coverage'],
    preprocessors: {
      'src/*_spec.js': [ 'webpack', 'coverage' ],
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
    },
    coverageReporter: {
      reporters: [
        { type: 'lcovonly', subdir: '.', file: 'lcov.info' }
      ]
    }
  });
};

