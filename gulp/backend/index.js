var gulp = require('gulp'),
    babel = require('gulp-babel'),
    watch = require('gulp-watch'),
    spawn = require('child_process').spawn,
    config = require('./config'),
    node;

gulp.task('backend:scripts', function () {
    return gulp.src(config.scriptBase + '/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest(config.distBase));
});

gulp.task('backend:server', ['backend:scripts'], function () {
    if (node) {
        node.kill();
    }

    node = spawn('node', [config.distBase + '/index.js'], {stdio: 'inherit'});
    node.on('close', function (code) {
        if (code === 8) {
            console.log('Error detected, waiting for changes ...');
        }
    });
});

gulp.task('backend:watch', ['backend:server'], function () {
    watch([config.scriptBase + '/**/*.js', config.modelBase + '/**/*.js'], function () {
        gulp.start('backend:server');
    });
});

gulp.task('backend', ['backend:scripts']);