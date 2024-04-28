const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === "development";
    const entries = {
        example: "./src/example.ts",
    };

    return Object.keys(entries).map((entry) => ({
        mode: isDevelopment ? "development" : "production",
        entry: {
            [entry]: entries[entry],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
            // Needed to avoid error when using "util" in @blockly/dev-tools sinon dependency
            fallback: {
                util: false,
            },
        },
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, "dist"),

            // If this were a library, you could use the following:
            // library: "[name]", // think jquery($), lodash(_), etc..
            // libraryTarget: "umd",
            // umdNamedDefine: true,
            // For "umd", see globalObject thread: https://github.com/webpack/webpack/issues/6784
            // globalObject: "typeof self !== 'undefined' ? self : this",
        },
        optimization: {
            minimize: false, // Disable code minimization
        },
        plugins: [
            // @blockly/dev-scripts expects this to be defined
            new webpack.DefinePlugin({
                "process.env.PACKAGE_NAME": JSON.stringify("my-package-name"),
            }),
        ],
        devtool: "source-map",
    }));
};
