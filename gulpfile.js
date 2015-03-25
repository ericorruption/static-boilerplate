var gulp        = require('gulp'),
    plugins     = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    config = require('./package.json');

// error function for plumber
var onError = function (err) {
  console.log(err);
  this.emit('end');
};

gulp.task('javascript', function() {
    return gulp.src([config.cwd + 'js/*.dist.js'])
        .pipe(plugins.plumber({ errorHandler: onError }))
        .pipe(plugins.fileInclude({
            prefix: '// @@',
        }))
        .pipe(plugins.rename({ extname: '' }))
        .pipe(plugins.rename({ extname: '.js' }))
        .pipe(gulp.dest(config.cwd + 'js'))
        .pipe(plugins.uglify())
        .pipe(plugins.rename({ extname: '.min.js' }))
        .pipe(gulp.dest(config.cwd + 'js'));
});

gulp.task('css', function() {
    return gulp.src([config.cwd + 'less/*.less', '!' + config.cwd + 'less/_*.less'])
        .pipe(plugins.plumber({ errorHandler: onError }))
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer())
        .pipe(gulp.dest(config.cwd + 'css'))
        .pipe(plugins.csso())
        .pipe(plugins.rename({ extname: '.min.css' }))
        .pipe(gulp.dest(config.cwd + 'css'))
        .pipe(reload({stream: true}));
});

gulp.task('serve', ['build'], function() {
    browserSync({
        // using vagrant or other server:
        // proxy: "http://localhost:8000"
        // or use builtin server:
        server: config.cwd
    });

    gulp.watch([config.cwd + 'less/**/*.less'], ['css']);
    gulp.watch([config.cwd + 'js/**/*.dist.js', config.cwd + 'js/**/_*.js'], ['javascript', reload]);
    gulp.watch([config.cwd + '**/*.html'], reload);
});

gulp.task('build', ['css', 'javascript']);
gulp.task('default', ['serve']);