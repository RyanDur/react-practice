const WebpackMonitor = require('webpack-monitor');

exports.monitor = (on) => ({
  plugins: [
    new WebpackMonitor({
      capture: true,
      target: '../../../monitor/myStatsStore.json',
      launch: on,
      port: 3030
    })
  ]
});