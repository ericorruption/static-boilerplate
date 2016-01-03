'use strict';

var gulp       = require('gulp'),
    minifyHtml = require('gulp-minify-html');

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(minifyHtml({
      conditionals: true
    }))
    .pipe(gulp.dest('dist/'));
});
