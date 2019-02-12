const manifest = require('./manifest').manifest;
const minifyCSS = require('./minifyCSS').minifyCSS;
const minifyJS = require('./minifyJS').minifyJS;
const splitChunks = require('./splitChunks').splitChunks;

module.exports = {
  manifest,
  minifyCSS,
  minifyJS,
  splitChunks
};
