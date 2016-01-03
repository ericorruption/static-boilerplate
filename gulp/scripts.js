'use strict'

var gulp        = require('gulp'),
    browserSync = require('browser-sync').get('static-boilerplate'),
    webpack     = require('webpack');

gulp.task('javascript', function() {
  webpack({
    entry: "./src/js/main.js",
    output: {
      filename: "./dist/js/bundle.js"
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({ output: { comments: false }})
    ]
  }, function () {
    browserSync.reload();
  });
});
