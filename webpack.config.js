const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    watch: true,
    entry: {
        index: './src/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]

}