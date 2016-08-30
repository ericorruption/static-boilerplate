'use strict';

import gulp        from 'gulp';
import browserSync from 'browser-sync';
import minifyHtml  from 'gulp-htmlmin';

browserSync.get('static-boilerplate');

gulp.task('html', () =>
  gulp.src('src/*.html')
    .pipe(minifyHtml({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream())
);
