var gulp        = require('gulp'),
    plugins     = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create(),
    webpack     = require('webpack');

// error function for plumber
var onError = function (err) {
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
            require('postcss-import'),
        ]))
        .pipe(plugins.minifyCss())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('images', function () {
    return gulp.src('src/img/**/*')
        .pipe(plugins.imagemin())
        .pipe(gulp.dest('dist/img'));
});

// copy other assets
gulp.task('cp', function () {
    return gulp.src([
      'src/*']
    )
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['build'], function() {
    browserSync.init({
        // using vagrant or other server:
        // proxy: "http://localhost:8000"
        // or use builtin server:
        server: './dist',
        files: ['src/*.html']
    });

    gulp.watch(['src/*.html'], ['cp']);
    gulp.watch(['src/img/**/*'], ['images']);
    gulp.watch(['src/scss/**/*.scss'], ['css']);
    gulp.watch(['src/js/**/*.js'], ['javascript']);
});

gulp.task('build', ['cp', 'css', 'javascript', 'images']);
gulp.task('default', ['serve']);
