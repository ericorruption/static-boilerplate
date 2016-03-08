'use strict';

import gulp        from 'gulp';
import browserSync from 'browser-sync';
import minifyHtml  from 'gulp-htmlmin';
import validator   from 'gulp-html5-lint';

browserSync.get('static-boilerplate');

gulp.task('validate-html', function() {
  return gulp.src('src/*.html')
  .pipe(validator());
});

gulp.task('html', ['validate-html'], function() {
  return gulp.src('src/*.html')
    .pipe(minifyHtml({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream());
});
