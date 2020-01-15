const path = require('path');


module.exports = {
    entry: { 
        main :['babel-polyfill', './src/js/index.js'],
        vendor: './src/js/vendor.js'
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
        ]
    }
};