var webpack = require('webpack');

module.exports = {
  /* config options here */
  exportTrailingSlash: true,
  plugins: [
    // other plugins,
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery',
    // }),
  ],
};
