var webpack = require('webpack');

module.exports = {
  /* config options here */
  env: {
    API_URL: 'API_URL',
    DOMAIN_URL: 'https://d1vb0eqohs6ps7.cloudfront.net',
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
