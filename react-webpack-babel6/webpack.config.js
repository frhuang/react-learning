var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './app/index.jsx'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'app')
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};