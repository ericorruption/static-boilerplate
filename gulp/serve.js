'use strict';

import gulp        from 'gulp';
import browserSync from 'browser-sync';

browserSync.create('static-boilerplate');

gulp.task('serve', ['build'], function() {
  browserSync.init({
    // using vagrant or other server:
    // proxy: "http://localhost:8000"
    // or use builtin server:
    server: './dist'
  });

  gulp.watch(['src/*.html'], ['html']);
  gulp.watch(['src/img/**/*'], ['images']);
  gulp.watch(['src/scss/**/*.scss'], ['css']);
  gulp.watch(['src/js/**/*.js'], ['javascript']);
});
