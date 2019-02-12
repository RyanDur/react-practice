const config = require('./config'),
  merge = require('webpack-merge'),
  path = require('path'), PATHS = {
    app: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
    records: path.join(__dirname, 'records.json')
  };

module.exports = mode =>
  mode === 'production' ?
    merge(config.prod(PATHS), {mode}) :
    merge(config.dev(PATHS), {mode});
