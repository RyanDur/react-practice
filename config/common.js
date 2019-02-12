const parts = require('./parts'),
  merge = require('webpack-merge');

exports.common = (paths) => merge([
  {
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
  },
  {
    output: {
      chunkFilename: '[name].[chunkhash].js',
      filename: '[name].[chunkhash].js',
      path: paths.dist
    }
  },
  parts.loaders.loadTS(),
  parts.loaders.loadFonts(),
  parts.loaders.loadImages({
    options: {
      limit: 15000,
      name: '[name].[hash].[ext]'
    }
  }),
  parts.html(),
  parts.clean({dir: paths.dist}),
  parts.optimizers.manifest(),
  {recordsPath: paths.records}
]);
