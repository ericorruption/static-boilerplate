'use strict';

import gulp         from 'gulp';
import browserSync  from 'browser-sync';
import plumber      from 'gulp-plumber';
import sourcemaps   from 'gulp-sourcemaps';
import sass         from 'gulp-sass';
import postcss      from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssImport    from 'postcss-import';
import cssNano      from 'cssnano';
import stylelint    from 'gulp-stylelint';

const cssPlugins = [
  autoprefixer({ remove: false, browsers: '> 1%, last 2 versions, ie 9'}),
  cssImport,
  cssNano({ autoprefixer: false })
];

browserSync.get('static-boilerplate');

// error function for plumber
function onError(err) {
  console.log(err);
  this.emit('end');
};

gulp.task('css', () =>
  gulp.src(['src/scss/*.scss', '!src/scss/_*.scss'])
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss(cssPlugins))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
);

gulp.task('stylelint', () =>
  gulp.src(['src/scss/**/*.scss'])
  .pipe(stylelint({
    syntax: 'scss',
    reporters: [
      { formatter: 'string', console: true}
    ]
  }))
);
