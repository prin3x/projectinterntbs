const withSass = require('@zeit/next-sass');
module.exports = withSass({
    trailingSlash: false,
    compress: true,
    plugins: [],
});
