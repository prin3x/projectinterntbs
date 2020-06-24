var webpack = require('webpack');

module.exports = {
  /* config options here */
  env: {
    API_URL: 'API_URL',
  },
  exportTrailingSlash: true,
  compress: true,
  plugins: [
    // other plugins,
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery',
    // }),
  ],
};
