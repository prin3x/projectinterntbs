const withSass = require('@zeit/next-sass');
module.exports = withSass({
    exportTrailingSlash: false,
    compress: true,
    plugins: [],
});
