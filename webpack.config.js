const path = require("path");
const webpack = require('webpack');
require('regenerator-runtime/runtime')

module.exports = {
    mode: 'development',
    entry: ['regenerator-runtime/runtime', './client/main.js'],
    devServer: {
        hot: true
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'

    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    }
};