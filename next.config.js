const withSass = require('@zeit/next-sass');
module.exports = withSass({
  exportTrailingSlash: true,
  compress: true,
  plugins: [],
});

