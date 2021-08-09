const withSass = require('@zeit/next-sass');
module.exports = withSass({
    // exportTrailingSlash: true,
    trailingSlash: false,
    compress: true,
    plugins: [],
});
