exports.loadJS = ({include, exclude}) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
});