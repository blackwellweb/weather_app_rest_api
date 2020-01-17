const path = require('path');
const common = require("./webpack.common");
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ['style-loader',  // 3. Injects styles into DOM
                    'css-loader',       // 2. Turns css into commonjs
                    'sass-loader']     // 1. Turns sass into css
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'imgs',
                        esModule: false,
                    }
                },]
            }
        ]
    }
});