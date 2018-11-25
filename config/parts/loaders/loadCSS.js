exports.loadCSS = ({ include, exclude }) => ({
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
              plugins: () => ([
                require('postcss-preset-env')({
                  features: {
                    'nesting-rules': true
                  }
                })
              ])
            }
          }
        ]
      }
    ]
  }
});