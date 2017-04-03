var webpack = require("webpack")
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require("copy-webpack-plugin")
module.exports = {
    entry: './src/app/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
                test: /\.component\.ts$/,
                loader: 'ts!angular2-template-loader'
            },
            {
                test: /\.ts$/,
                exclude: /\.component\.ts$/,
                loader: 'ts'
            },
            { test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.css$/,
                loader: 'raw'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts', 'html', 'css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin([
            { from: "./src/app/images", to: "images" }
        ]),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Hammer: "hammerjs/hammer"
        })

    ]
};