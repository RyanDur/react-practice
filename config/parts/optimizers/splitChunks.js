exports.splitChunks = () => ({
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
});