/*
    get php fallback file for production
*/

var gulp = require('gulp');

var phpPartialsTask = function() {
  return gulp.src('templates/partials/*.php')
    .pipe(gulp.dest('production/templates/partials')); // place php partials
};

gulp.task('phpPartialsTask', phpPartialsTask);

module.exports = phpPartialsTask;
