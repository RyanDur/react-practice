exports.devServer = ({ host, port }) => ({
  devServer: {
    stats: 'errors-only',
    host,
    port,
    open: true,
    overlay: true,
    headers: { "Access-Control-Allow-Origin": "*" }
  }
});
