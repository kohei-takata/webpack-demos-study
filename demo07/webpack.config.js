const webpack = require('webpack');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new uglifyJsPlugin({
            compress: {
                warnings:false
            }
        })
    ]
};