const { CheckerPlugin } = require('awesome-typescript-loader');

exports.loadTS = () => ({
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new CheckerPlugin()
  ]
});