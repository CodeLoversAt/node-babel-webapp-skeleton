"use strict";

var gulp = require('gulp');

require('./gulp/frontend');
require('./gulp/backend');


gulp.task('build', ['frontend', 'backend']);

gulp.task('watch', ['frontend:watch', 'backend:watch']);

gulp.task('default', ['build']);
