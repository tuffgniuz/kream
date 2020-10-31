const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: 'main.[contenthash].js', 
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/template.html',
            filename: 'index.html',
            path: path.resolve(__dirname, 'dist')
        })
    ],
    module: {
        rules: [
            // 
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
        ]
    }
};
