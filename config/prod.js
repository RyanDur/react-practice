const merge = require('webpack-merge');
const common = require("./common").common;
const parts = require('./parts');

module.exports = prod = (paths) => merge([
  common(paths),
  parts.optimizers.splitChunks(),
  parts.optimizers.minifyJS(),
  parts.loaders.extractCSS({
    use: [{
      loader: 'css-loader',
      options: {
        minimize: true,
        sourceMap: true
      }
    }, {
      loader: 'postcss-loader',
      options: {
        plugins: () => ([
          require('precss'),
          require('postcss-cssnext')
        ])
      }
    }]
  }),
  parts.optimizers.minifyCSS({
    options: {
      discardComments: {
        removeAll: true
      },
      safe: true
    }
  })
]);
