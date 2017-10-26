module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'dist/js/bundle.js'
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
