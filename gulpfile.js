var gulp        = require('gulp'),
    browsersync = require('browser-sync'),
    beep        = require('beepbeep'),
    colors      = require('colors'),
    plumber     = require('gulp-plumber'),
    sass        = require('gulp-sass'),
    runSequence = require('run-sequence');


// ERROR HANDLER ========================================
var onError = function(err) {
    beep([200, 200]);
    console.log(
    '\n*****************'.bold.gray + ' \\(°□°)/ '.bold.red + '<( ERROR! ) '.bold.blue + '*****************\n\n'.bold.gray +
    String(err) +
    '\n*******************************************************\n'.bold.gray );
    this.emit('end');
};


// STYLES ===============================================
gulp.task('css', function() {
    return gulp.src( 'scss/cv.scss' )
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(sass())
        .pipe(gulp.dest( 'css' ))
});


// BROWSER SYNC =========================================
gulp.task('browsersync', function() {
    browsersync({
        server: { baseDir: './' },
        port: 8000,
        files: [ 'css/*.css' ]
    })
});


// WATCH ================================================
gulp.task('watch', ['browsersync'], function() {
    gulp.watch( 'scss/**/*.scss',       ['css'] );
});


// BUILD ================================================
gulp.task('default', function(callback) {
    runSequence(
        'css',
        ['watch'],
    callback);
});