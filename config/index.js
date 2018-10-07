const {manifest} = require('./parts/optimizers/manifest');
const {errorOverlay} = require('./parts/devHelpers/errorOverlay');
const {monitor} = require('./parts/devHelpers/monitor');
const {clean} = require('./parts/clean');
const {devServer} = require('./parts/devHelpers/devServer');
const {html} = require('./parts/html');
const {extractCSS} = require('./parts/loaders/extractCSS');
const {loadCSS} = require('./parts/loaders/loadCSS');
const {loadFonts} = require('./parts/loaders/loadFonts');
const {loadImages} = require('./parts/loaders/loadImages');
const {loadJS} = require('./parts/loaders/loadJs');
const {minifyCSS} = require('./parts/optimizers/minifyCSS');
const {minifyJS} = require('./parts/optimizers/minifyJS');
const {purifyCSS} = require('./parts/optimizers/purifyCSS');
const {splitChunks} = require('./parts/optimizers/splitChunks');

module.exports = {
  loadJS,
  minifyJS,
  minifyCSS,
  splitChunks,
  html,
  clean,
  purifyCSS,
  devServer,
  loadCSS,
  loadFonts,
  loadImages,
  extractCSS,
  monitor,
  errorOverlay,
  manifest
};