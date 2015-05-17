var gulp = require('gulp'),
    server = require('gulp-server-livereload'),
    options = require('../../options'),
    config = require('../config'),
    debug = require('../../debug');

gulp.task('frontend:server', ['frontend'], function() {
    return gulp.src(config.distBase)
        .pipe(server({
            livereload: debug,
            open: options.open,
            defaultFile: 'index.html',
            host: options.host,
            port: options.port
        }));
});
