const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
};

const config = {
    context: paths.src,

    entry: {
        app: './index'
    },

    output: {
        path: paths.dist,
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },

    devServer: {
        proxy: [{
            path: '/api/',
            target: 'http://localhost:8010',
            secure: false,
            changeOrigin: true,
        }],
        historyApiFallback: true
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                    options: {
                        includePaths: ["absolute/path/a", "absolute/path/b"]
                    }
                }]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};

module.exports = config;