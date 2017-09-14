/*
    ./webpack.config.js
*/

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: [
  'react-hot-loader/patch', // activate HMR for React
   'webpack-dev-server/client?http://localhost:3000',// bundle the client for webpack-dev-server and connect to the provided endpoint
   'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
   './src/index.js',
 ],
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
  },
  resolve: {
    modules: [
      './src/Components',
      './src/Tools',
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.png', '.jpg', '.jpeg', '.gif'],
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader/webpack',
          'babel-loader'
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          // 'resolve-url',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              modules: true
            }
         },
        ],
      },


      // {
      //   test: /\.js?$/,
      //   exclude: /node_modules/,
      //   use: [
      //     { loader: 'react-hot-loader' },
      //     { loader: 'babel-loader' },
      //     {
      //       loader: 'eslint-loader',
      //       options: {
      //         modules: true
      //       }
      //    },
      //   ],
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      title: 'netzhoerer - Frontend Developer',
      hash: true,
      language: 'de',
      author: 'Torsten Mirow',
      twitter: '@netzhoerer'
    }),
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates

    // new webpack.optimize.UglifyJsPlugin({
    //  compress: {
    //    warnings: false,
    //  },
    // }),
  ],
  devServer: {
    contentBase: './dist',
    publicPath: '/',
    hot: true,
    host: 'localhost',
    port: 3000,
    // quiet: true,
    noInfo: true
  },
  devtool: 'cheap-module-eval-source-map',

};
