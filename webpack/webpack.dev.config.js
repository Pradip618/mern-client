var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

var parentDir = path.join(__dirname, '../')
console.log(__dirname, 'dirname')
console.log(parentDir, 'parentDir')
module.exports = {
    // entry:[
    //     path.join(parentDir,'index.js')
    // ],
    entry: './index.js',
    // module: {
    //     rules: [{
    //         test: /\.(js|jsx)$/,
    //             exclude: /node\_modules/,
    //             loader: 'babel-loader'
    //         },{
    //             test: /\.less$/,
    //             loaders: ["style-loader", "css-loder", "less-loader"]
    //         }
    //     ]
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|jpe.?g|gif)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                },
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader', 'less-loader'],
            },
        ],
    },
    output: {
        path: path.join(parentDir, 'dist'), // <- change last argument
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        // compress: true,
        // port: 5000,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: true,
        }),
    ],
    // devServer:{
    //     contentBase: parentDir,
    //     historyApiFallback: true
    // }
}
