const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant Page',
        }),

    ],
    optimization: {
        runtimeChunk: 'single',
      },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 1000,
    },
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|svg|webp|gif)$/i,
                type: 'asset/resource',

            },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[name][ext]',
        clean: true,
    },
};