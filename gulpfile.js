var gulp        = require('gulp'),
    plugins     = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create(),
    webpack     = require('webpack');

// error function for plumber
var onError = function(err) {
  console.log(err);
  this.emit('end');
};

gulp.task('javascript', function() {
  webpack({
    entry: "./src/js/main.js",
    output: {
      filename: "./dist/js/bundle.js"
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({ output: { comments: false }})
    ]
  }, function () {
    browserSync.reload();
  });
});

gulp.task('css', function() {
  return gulp.src(['src/scss/*.scss', '!src/scss/_*.scss'])
    .pipe(plugins.plumber({ errorHandler: onError }))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .pipe(plugins.postcss([
      require('autoprefixer'),
      require('cssgrace'),
      require('postcss-import')
    ]))
    .pipe(plugins.minifyCss())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('images', function() {
  return gulp.src('src/img/**/*')
    .pipe(plugins.imagemin({
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

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(plugins.minifyHtml({
      conditionals: true
    }))
    .pipe(gulp.dest('dist/'));
});

// COPY OTHER ASSETS
// gulp.task('cp', function() {
//     return gulp.src([
//       'src/*',
//       '!src/*.html'
//     ])
//     .pipe(gulp.dest('dist/'))
//     .pipe(browserSync.stream());
// });

gulp.task('serve', ['build'], function() {
  browserSync.init({
    // using vagrant or other server:
    // proxy: "http://localhost:8000"
    // or use builtin server:
    server: './dist',
    files: ['src/*.html']
  });

  gulp.watch(['src/*.html'], ['html']);
  gulp.watch(['src/img/**/*'], ['images']);
  gulp.watch(['src/scss/**/*.scss'], ['css']);
  gulp.watch(['src/js/**/*.js'], ['javascript']);
});

gulp.task('build', ['html', 'css', 'javascript', 'images']);
gulp.task('default', ['serve']);
