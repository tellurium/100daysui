var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        'day003/app': path.resolve(__dirname, 'Day 003/src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new HtmlWebpackPlugin({
            favicon: false,
            filename: 'day003/index.html',
            template: path.resolve(__dirname, 'Day 003/src/index.html')
        }),
    ],
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
            { test: /\.(jpe?g|gif|png)$/, loader: 'file-loader?name=[path][name].[ext]' },
            { test: /\.svg$/, loader: 'url-loader' }
        ]
    }
};
