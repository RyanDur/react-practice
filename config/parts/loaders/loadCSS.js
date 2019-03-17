exports.loadCSS = ({include, exclude}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require("precss"),
                require('postcss-nested'),
                require("postcss-cssnext")()
              ]
            }
          }
        ]
      }
    ]
  }
});
