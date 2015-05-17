var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    gulpIf = require('gulp-if'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    debug = require('../../debug'),
    config = require('../config');

gulp.task('frontend:scripts', function() {
    return gulp.src(config.scriptBase + '/app.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: debug,
            transform: ['babelify'],
            extensions: ['.js']
        }))
        .pipe(gulpIf(!debug, uglify()))
        .pipe(rename('app.js'))
        .pipe(gulp.dest(config.distBase + '/js'));
});
