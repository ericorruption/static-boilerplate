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
        entry: "./js/main.js",
        output: {
            filename: "./js/bundle.js"
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({ output: { comments: false }})
        ]
    }, function () {
        browserSync.reload();
    });
});

gulp.task('css', function() {
    return gulp.src(['less/*.less', '!less/_*.less'])
        .pipe(plugins.plumber({ errorHandler: onError }))
        .pipe(plugins.less())
        .pipe(plugins.postcss([
            require('autoprefixer'),
            require('cssgrace')
        ]))
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['build'], function() {
    browserSync.init({
        // using vagrant or other server:
        // proxy: "http://localhost:8000"
        // or use builtin server:
        server: '.',
        files: ['**/*.html']
    });

    gulp.watch(['less/**/*.less'], ['css']);
    gulp.watch(['js/**/*.js', '!js/bundle.js'], ['javascript']);
});

gulp.task('build', ['css', 'javascript']);
gulp.task('default', ['serve']);
