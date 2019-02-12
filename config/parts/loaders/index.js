const extractCSS = require('./extractCSS').extractCSS;
const loadCSS = require('./loadCSS').loadCSS;
const loadFonts = require('./loadFonts').loadFonts;
const loadImages = require('./loadImages').loadImages;
const loadJS = require('./loadJs').loadJS;
const loadTS = require('./loadTS').loadTS;
const optimizers = require('./optimizers');

module.exports = {
  extractCSS,
  loadCSS,
  loadFonts,
  loadImages,
  loadJS,
  loadTS,
  optimizers
};
