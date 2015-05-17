var gulp = require('gulp'),
    sass = require('gulp-sass'),
    gulpIf = require('gulp-if'),
    minifyCss = require('gulp-minify-css'),
    config = require('../config'),
    debug = require('../../debug');

gulp.task('frontend:styles', function() {
    return gulp.src([config.styleBase + '/style.scss'])
        .pipe(sass())
        .pipe(gulpIf(!debug, minifyCss()))
        .pipe(gulp.dest(config.distBase + '/css'));
});
