/*
    get php fallback file for production
*/

var gulp = require('gulp');

var phpPagesTask = function() {
  return gulp.src('templates/pages/*.php')
    .pipe(gulp.dest('production/page-templates/')); // place php pages
};

gulp.task('phpPagesTask', phpPagesTask);

module.exports = phpPagesTask;
