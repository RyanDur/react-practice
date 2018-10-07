const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.html = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: 'src/index.html',
      favicon: 'favicon.ico'
    })
  ]
});