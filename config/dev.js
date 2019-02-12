const merge = require('webpack-merge');
const parts = require('./parts');
const common = require("./common").common;

module.exports = dev = (paths) => merge([
  common(paths),
  {devtool: 'cheap-module-eval-source-map'},
  parts.devHelpers.devServer({
    host: process.env.HOST,
    port: process.env.PORT
  }),
  parts.loaders.loadCSS({}),
  parts.devHelpers.errorOverlay(),
  parts.devHelpers.monitor(false)
]);
