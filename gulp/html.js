'use strict';

var gulp       = require('gulp'),
    minifyHtml = require('gulp-htmlmin');

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(minifyHtml({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'));
});
