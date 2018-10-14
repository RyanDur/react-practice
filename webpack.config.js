const parts = require('./config'),
  merge = require('webpack-merge'),
  path = require('path'), PATHS = {
    app: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
    records: path.join(__dirname, 'records.json')
  };

const commonConfig = merge([
  {
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
  },
  {
    output: {
      chunkFilename: '[name].[chunkhash].js',
      filename: '[name].[chunkhash].js',
      path: PATHS.dist
    }
  },
  parts.loadTS(),
  parts.loadFonts(),
  parts.loadImages({
    options: {
      limit: 15000,
      name: '[name].[hash].[ext]'
    }
  }),
  parts.html(),
  parts.clean({dir: PATHS.dist}),
  parts.manifest(),
  {recordsPath: PATHS.records}
]);

const prodConfig = merge([
  parts.splitChunks(),
  parts.minifyJS(),
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

module.exports = mode =>
  mode === 'production' ?
    merge(commonConfig, prodConfig, {mode}) :
    merge(commonConfig, devConfig, {mode});