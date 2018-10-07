const parts = require('./config');
const merge = require('webpack-merge');
const path = require('path');
const glob = require('glob');

const PATHS = {
  app: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
  records: path.join(__dirname, 'records.json')
};

const commonConfig = merge([
  {
    output: {
      chunkFilename: '[name].[chunkhash].js',
      filename: '[name].[chunkhash].js',
      path: PATHS.dist
    }
  },
  parts.loadJS({
    include: PATHS.app,
    exclude: /node_modules/
  }),
  parts.loadFonts(),
  parts.loadImages({
    options: {
      limit: 15000,
      name: '[name].[hash].[ext]'
    }
  }),
  parts.clean({dir: PATHS.dist}),
  parts.html(),
  parts.manifest(),
  {recordsPath: PATHS.records}
]);

const prodConfig = merge([
  parts.splitChunks(),
  parts.extractCSS({
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
  parts.minifyJS(),
  parts.purifyCSS({
    paths: glob.sync(`${PATHS.app}/**/!(__test__)/*.js`, {nodir: true})
  }),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true
      },
      safe: true
    }
  })
]);

const devConfig = merge([
  {devtool: 'cheap-module-eval-source-map'},
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT
  }),
  parts.loadCSS({}),
  parts.errorOverlay(),
  parts.monitor(false)
]);

module.exports = mode => {
  if (mode === 'production') {
    return merge(commonConfig, prodConfig, {mode});
  } else {
    return merge(commonConfig, devConfig, {mode});
  }
};