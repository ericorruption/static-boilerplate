'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync').get('static-boilerplate'),
    plumber     = require('gulp-plumber'),
    sourcemaps  = require('gulp-sourcemaps'),
    sass        = require('gulp-sass'),
    postcss     = require('gulp-postcss'),
    cssPlugins  = [
      require('autoprefixer')({ remove: false, browsers: '> 1%, last 2 versions, ie 9'}),
      require('postcss-import'),
      require('cssnano')({ autoprefixer: false })
    ];

// error function for plumber
var onError = function(err) {
  console.log(err);
  this.emit('end');
};

gulp.task('css', function() {
  return gulp.src(['src/scss/*.scss', '!src/scss/_*.scss'])
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss(cssPlugins))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('css:production', function() {
  return gulp.src(['src/scss/*.scss', '!src/scss/_*.scss'])
    .pipe(sass())
    .pipe(postcss(cssPlugins))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'));
});
