const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

exports.minifyJS = () => ({
  optimization: {
    minimizer: [new UglifyJsPlugin({ sourceMap: true })]
  }
});
