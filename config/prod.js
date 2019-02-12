const merge = require('webpack-merge');
const common = require("./common").common;

module.exports = prod = (paths) => merge([
  common(paths),
  config.parts.optimizers.splitChunks(),
  config.parts.optimizers.minifyJS(),
  config.parts.loaders.extractCSS({
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
  config.parts.optimizers.minifyCSS({
    options: {
      discardComments: {
        removeAll: true
      },
      safe: true
    }
  })
]);
