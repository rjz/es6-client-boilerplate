module.exports = function (config) {
  config.set({
    autoWatch: true,
    browsers: ['PhantomJS'],
    files: [
      'src/*_spec.js'
    ],
    frameworks: [
      'jasmine',
      'sinon'
    ],
    reporters: ['spec', 'coverage'],
    preprocessors: {
      'src/*_spec.js': [ 'webpack', 'coverage' ]
    },
    webpack: {
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
  })
}
