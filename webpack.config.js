const { resolve } = require('path')

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
