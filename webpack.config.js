const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server', // "only" prevents reload on syntax errors
    path.resolve(__dirname, 'client/src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    publicPath: '/client/dist/',
    filename: 'index.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
