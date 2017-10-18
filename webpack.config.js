const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const myPlugin = require('./myPlugin.js');

module.exports = {
    entry: {
        index: './src/index.js',
        another: './src/another-module.js',
        vendor: [
            'lodash'
        ]
    },
    plugins: [
        new myPlugin({}),
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor' // 指定公共 bundle 的名称。
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime' // 指定公共 bundle 的名称。
        }),
        new HTMLWebpackPlugin({
            title: 'Caching'
        })
    ],
    output: {
        // filename: '[name].bundle.js',
        filename: '[name].[chunkhash].js',
        // chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};