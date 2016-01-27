const HtmlwebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlwebpackPlugin({title: 'Webpack-demos'}),
        new OpenBrowserPlugin({url: 'http://localhost:8080'})
    ]
};