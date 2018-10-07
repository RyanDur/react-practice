exports.manifest = () => ({
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
  },
});