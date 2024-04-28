const path = require("path");

module.exports = {
    name: "serve-static",
    mode: "development",
    entry: {}, // No entry point needed for static server
    devServer: {
        static: {
            directory: path.join(__dirname, "/"), // Root directory with static pages
        },
        open: ['src/index.html'], // Open the page in the browser
        port: "auto",
        hot: true,
        watchFiles: {
            paths: "./dist",
            options: {
                ignored: ["node_modules"],
            },
        },
    },
};
