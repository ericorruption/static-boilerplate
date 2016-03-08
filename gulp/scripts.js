'use strict'

import gulp        from 'gulp';
import browserSync from 'browser-sync';
import browserify  from 'browserify';
import source      from 'vinyl-source-stream';
import sourcemaps  from 'gulp-sourcemaps';
import buffer      from 'vinyl-buffer';
import uglify      from 'gulp-uglify';
import eslint      from 'gulp-eslint';

browserSync.get('static-boilerplate');

gulp.task('eslint', () =>
  gulp.src(['src/js/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

gulp.task('javascript', ['eslint'], () =>
  browserify('src/js/main.js')
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
    .pipe(browserSync.stream())
);

gulp.task('javascript:production', ['eslint'], () =>
  browserify('src/js/main.js').bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
);
