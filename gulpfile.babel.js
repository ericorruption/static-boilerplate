'use strict';

import gulp from 'gulp';

import './gulp/serve';
import './gulp/scripts';
import './gulp/styles';
import './gulp/images';
import './gulp/html';

gulp.task('build', ['html', 'css', 'javascript', 'images']);
gulp.task('default', ['serve']);
