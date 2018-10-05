const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackMonitor = require('webpack-monitor');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new WebpackMonitor({
      capture: true,
      target: '../monitor/myStatsStore.json',
      launch: true,
      port: 3030
    })
  ]
});