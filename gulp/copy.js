'use strict';

import gulp from 'gulp';

gulp.task('copy', () => gulp.src(['src/*.*','!src/*.html']).pipe(gulp.dest('dist/')));
