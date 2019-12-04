/*
    get php fallback file for production
*/

var gulp = require('gulp');

var phpPagesTask = function() {
  return gulp.src('templates/pages')
    .pipe(gulp.dest('production/templates/pages')); // place php pages
};

gulp.task('phpPagesTask', phpPagesTask);

module.exports = phpPagesTask;
