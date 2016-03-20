'use strict';

import gulp from 'gulp';

import './gulp/serve';
import './gulp/scripts';
import './gulp/styles';
import './gulp/images';
import './gulp/html';
import './gulp/clean';

gulp.task('build', ['html', 'css', 'javascript', 'images']);
gulp.task('build:production', ['build', 'clean', 'css:production', 'javascript:production']);
gulp.task('default', ['serve']);
