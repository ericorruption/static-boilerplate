'use strict'

var gulp        = require('gulp'),
    browserSync = require('browser-sync').get('static-boilerplate'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream'),
    sourcemaps  = require('gulp-sourcemaps'),
    buffer      = require('vinyl-buffer'),
    uglify      = require('gulp-uglify'),
    eslint      = require('gulp-eslint');

gulp.task('eslint', function() {
  return gulp.src(['src/js/**/*.js'])
          .pipe(eslint())
          .pipe(eslint.format())
          .pipe(eslint.failAfterError());
});

gulp.task('javascript', ['eslint'], function() {
  return browserify('src/js/main.js')
    .bundle()
    .on('error', function(err) {
      console.log(err);
      this.emit("end");
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

gulp.task('javascript:production', ['eslint'], function() {
  return browserify('src/js/main.js').bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});
