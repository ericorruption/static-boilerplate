'use strict';

import gulp from 'gulp';
import del  from 'del';

gulp.task('clean', () => del(['dist/css', 'dist/js']));
