const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                /* BABEL Loader */
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                /* BabylonJS file loader: searches for .babylon file extension and output to public path */
                test: /\.babylon$/,
                use: [
                    {
                        loader: 'babylon-file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/models/',
                            publicPath: 'assets/models/'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    devtool: 'source-map'
}
