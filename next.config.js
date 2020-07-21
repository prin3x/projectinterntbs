var webpack = require('webpack');

module.exports = {
  /* config options here */
  env: {
    API_URL: process.env.API_URL,//'https://tbs-account-api.ngrok.1mobyline.com',
    DOMAIN_URL: process.env.DOMAIN_URL,//'https://d1vb0eqohs6ps7.cloudfront.net',
    API_URL_SHOPPING: process.env.API_URL_SHOPPING
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
