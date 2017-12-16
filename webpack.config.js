const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: "./main",
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        },
        output: {
          comments: false
        }
      }
    })
  ]
}
