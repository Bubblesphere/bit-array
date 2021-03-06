const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.common.js');


module.exports = merge(common, {
  // remove comment to get source map in production
  //devtool: 'source-map',
  plugins: [
    new BundleAnalyzerPlugin(),
    new UglifyJSPlugin({
      // remove comment to get source map in production
      //sourceMap: true
    })
  ]
});