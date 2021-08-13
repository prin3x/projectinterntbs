const withSass = require('@zeit/next-sass');
module.exports = withSass({
    exportTrailingSlash: true,
    trailingSlash: true,
    compress: true,
    plugins: [],
});
