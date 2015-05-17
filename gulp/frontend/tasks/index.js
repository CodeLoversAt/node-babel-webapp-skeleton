require('./html');
require('./scripts');
require('./server');
require('./styles');
require('./watch');

var gulp = require('gulp');

gulp.task('frontend', ['frontend:scripts', 'frontend:styles', 'frontend:html']);
