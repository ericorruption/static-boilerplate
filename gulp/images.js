'use strict';

var gulp     = require('gulp'),
    imagemin = require('gulp-imagemin');

gulp.task('images', function() {
  return gulp.src('src/img/**/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('dist/img'));
});

// SPRITE SUPPORT WITH gulp.spritesmith
// gulp.task('sprite', function() {
//   var spriteData = gulp.src('src/img/sprites/*.png').pipe(spritesmith({
//     imgName: 'sprite.png',
//     imgPath: '../img/sprite.png',
//     cssName: '_sprite.scss'
//   }));

//   spriteData.img.pipe(gulp.dest('src/img'));
//   return spriteData.css.pipe(gulp.dest('src/scss/base'));
// });
