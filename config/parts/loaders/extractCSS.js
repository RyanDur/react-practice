const MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.extractCSS = ({include, exclude, use}) => {
  const plugin = new MiniCssExtractPlugin({
    filename: 'style.[hash].css',
    chunkFilename: '[id][hash].css'
  });

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader
          ].concat(use)
        }
      ]
    },
    plugins: [plugin]
  };
};