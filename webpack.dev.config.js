const path = require('path'); //
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: { // Output file - generated file
        filename: '[name].js',
        path: path.resolve(__dirname, './dev'),
        publicPath: '', // Tells webpack where all generated files are found
        // publicPath: 'http://dinnagonzales.com/',                //online
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dev'),
        index: 'index.html',
        port: 9000,
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
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.hbs$/,
                use:{
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
        new CleanWebpackPlugin(), // Clean output.path folder
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Dinna Gonzales | Portfolio',
            chunks: ['main'],
            template: 'src/page-template.hbs',
        }),
    ],
};
