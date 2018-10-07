exports.loadFonts = () => ({
  module: {
    rules: [
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
            mimetype: 'application/font-woff',
            name: './fonts/[name].[ext]',
            publicPath: '../',
          },
        },
      },
    ],
  },
});