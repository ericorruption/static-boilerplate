'use strict'

var gulp        = require('gulp'),
    browserSync = require('browser-sync').get('static-boilerplate'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer'),
    uglify      = require('gulp-uglify');

gulp.task('javascript', function() {
  return browserify('src/js/main.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});
