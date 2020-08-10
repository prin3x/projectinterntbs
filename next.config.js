var webpack = require('webpack');
const withSass = require('@zeit/next-sass');
module.exports = withSass({
  /* config options here */
  // env: {
  //   API_URL: 'https://tbs-account-api.ngrok.1mobyline.com',
  //   DOMAIN_URL: 'https://d1vb0eqohs6ps7.cloudfront.net',
  // },
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
});
