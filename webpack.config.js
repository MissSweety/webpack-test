var path = require('path');
var webpack = require('webpack');
//定义了一些文件夹的路径
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
      {test: /\.(png|jpg)$/, use: [{ loader: 'url-loader', options: { limit: 8000 },}]},
      {test: /\.jsx?$/, loader: 'babel-loader', include: APP_PATH, query: { presets: ['es2015']}},
    ],
  },
  devServer: {
    contentBase: APP_PATH,
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello World app'
    }),
    new webpack.ProvidePlugin({
      R: 'ramda'
    })
  ]
}