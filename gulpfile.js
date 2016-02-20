'use strict';

var gulp = require('gulp');

require('./gulp/serve');
require('./gulp/scripts');
require('./gulp/styles');
require('./gulp/images');
require('./gulp/html');
require('./gulp/clean');

gulp.task('build', ['html', 'css', 'javascript', 'images']);
gulp.task('build:production', ['build', 'clean', 'css:production', 'javascript:production']);
gulp.task('default', ['serve']);
