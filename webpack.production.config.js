const path = require('path'); //
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: { // Output file - generated file
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './docs'),
        publicPath: '',                //online
    },
    mode: 'production',
    optimization: {
        namedModules: true,
        namedChunks: true,
        splitChunks: {
            chunks: 'all',
            minSize: 10000,
            automaticNameDelimiter: '_',
        },
    },
    module: {
        rules: [
            {
                test: /\.(pdf|png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.hbs$/,
                use: {
                    loader: 'handlebars-loader',
                },
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['transform-class-properties'],
                    },
                },
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            }  
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CleanWebpackPlugin(), // Clean output.path folder
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Dinna Gonzales',
            chunks: ['main', 'vendors_main'],
            template: 'src/page-template.hbs',
        }),
    ],
};
