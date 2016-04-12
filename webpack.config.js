var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        'day003/app': path.resolve(__dirname, 'Day 003/src/index.js'),
        'day004/app': path.resolve(__dirname, 'Day 004/src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.html/, loader: 'html-loader' },
            { test: /\.(jpe?g|gif|png)$/, loader: 'url-loader?name=[path][name].[ext]' },
            { test: /\.svg$/, loader: 'url-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: false
        }),
        new HtmlWebpackPlugin({
            favicon: false,
            filename: 'day003/index.html',
            template: path.resolve(__dirname, 'Day 003/src/index.html'),
            inject: false
        }),
        new HtmlWebpackPlugin({
            favicon: false,
            filename: 'day004/index.html',
            template: path.resolve(__dirname, 'Day 004/src/index.html'),
            inject: false
        }),
        new webpack.DefinePlugin({
            __DEV__: process.env.NODE_DEV === 'true'
        })
    ]
};
