'use strict';

var gulp       = require('gulp'),
    minifyHtml = require('gulp-htmlmin'),
    validator  = require('gulp-html5-lint');

gulp.task('validate-html', function() {
  return gulp.src('src/*.html')
  .pipe(validator());
});

gulp.task('html', ['validate-html'], function() {
  return gulp.src('src/*.html')
    .pipe(minifyHtml({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'));
});
