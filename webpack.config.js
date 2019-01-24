const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname +  '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}