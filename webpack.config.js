var path = require('path');
var webpack = require('webpack');
//定义了一些文件夹的路径
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'index.js')
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {test: /\.scss$/, loader: ['style-loader?sourceMap', 'css-loader?sourceMap', 'sass-loader?sourceMap']},
      {test: /\.(png|jpg)$/, use: [{ loader: 'url-loader', options: { limit: 8000 },}]},
      {test: /\.jsx?$/, loader: 'babel-loader', include: APP_PATH, query: { presets: ['es2015', 'react']}},
    ],
  },
  devServer: {
    contentBase: APP_PATH,
    compress: true,
    port: 9090,
    historyApiFallback: true,
    hot: true,
    inline: true,
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello World app'
    }),
    new webpack.ProvidePlugin({
      R: 'ramda'
    })
  ]
}