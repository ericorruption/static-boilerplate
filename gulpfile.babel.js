'use strict';

import gulp from 'gulp';

import './gulp/serve';
import './gulp/scripts';
import './gulp/styles';
import './gulp/images';
import './gulp/html';
import './gulp/copy';

gulp.task('build', ['copy', 'html', 'css', 'javascript', 'images']);
gulp.task('default', ['serve']);
