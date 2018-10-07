const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

exports.errorOverlay = () => ({
  plugins: [new ErrorOverlayPlugin({})]
});