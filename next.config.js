var webpack = require('webpack');

module.exports = {
  /* config options here */
  env: {
    API_URL: 'https://tbs-account-api.ngrok.1mobyline.com',
    DOMAIN_URL: 'https://d1vb0eqohs6ps7.cloudfront.net',
    // GTM_CODE: process.env.GTM_CODE
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
