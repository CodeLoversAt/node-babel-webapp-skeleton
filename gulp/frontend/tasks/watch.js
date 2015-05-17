var gulp = require('gulp'),
    watch = require('gulp-watch'),
    config = require('../config');

gulp.task('frontend:watch', ['frontend:server'], function() {
    watch(config.styleBase + '/**/*.scss', function () {
        gulp.start('frontend:styles');
    });
    watch(config.scriptBase + '/**/*.js', function () {
        gulp.start('frontend:scripts');
    });
    watch(config.htmlBase + '/**/*.html', function () {
        gulp.start('frontend:html');
    });
});
