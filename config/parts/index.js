const devHelpers = require('./devHelpers');
const loaders = require('./loaders');
const optimizers = require('./optimizers');
const clean = require('./clean').clean;
const html = require('./html').html;

module.exports = {
  devHelpers,
  loaders,
  optimizers,
  clean,
  html
};
