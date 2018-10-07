const CleanWebpackPlugin = require('clean-webpack-plugin');

exports.clean = ({dir}) => ({
  plugins: [new CleanWebpackPlugin(dir, {
    verbose: true,
    allowExternal: true
  })]
});