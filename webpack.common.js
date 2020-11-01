const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./src/index.js",
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
                test: /\.babylon$/,
                use: ['babylon-file-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    }
};
