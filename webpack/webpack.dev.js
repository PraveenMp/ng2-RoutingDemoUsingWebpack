'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin')

const rootDir = path.resolve(__dirname, '..');

module.exports = {
    debug: true,
    devServer: {
        contentBase: path.resolve(rootDir, 'dist'),
        port: 9000
    },
    devtool: 'source-map',
    entry: {
        app: [path.resolve(rootDir, 'src', 'bootstrap')],
        vendor: [path.resolve(rootDir, 'src', 'vendor')],
        styles: [path.resolve(rootDir, 'src', 'styles')]
    },
    module: {
        loaders: [            
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            { loader: 'raw', test: /\.(html)$/ },
            { exclude: /node_modules/, loaders: ['ts'], test: /\.ts$/ },
        ]
    },
    output: {
        filename: '[name].bundle-[hash].js',
        path: path.resolve(rootDir, 'dist')
    },
    plugins: [
        new AssetsPlugin(),
        new ExtractTextPlugin("styles.bundle-[hash].css"),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
        }),
        new ChunkWebpack({
            filename: 'vendor.bundle-[hash].js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(rootDir, 'src', 'index.html')
        })
    ],
    resolve: {
        extensions: ['', '.js', '.ts', '.json' , '.css']
    }
};