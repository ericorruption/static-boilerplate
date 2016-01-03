'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync').create('static-boilerplate');

gulp.task('serve', ['build'], function() {
  browserSync.init({
    // using vagrant or other server:
    // proxy: "http://localhost:8000"
    // or use builtin server:
    server: './dist',
    files: ['src/*.html']
  });

  gulp.watch(['src/*.html'], ['html']);
  gulp.watch(['src/img/**/*'], ['images']);
  gulp.watch(['src/scss/**/*.scss'], ['css']);
  gulp.watch(['src/js/**/*.js'], ['javascript']);
});
