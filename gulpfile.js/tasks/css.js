/*
    gulp the style.css WordPress config file for production
*/

var gulp = require('gulp');

var cssTask = function() {
  return gulp.src('./style.css') // files to be bundled
    .pipe(gulp.dest('production/')); // directory to be placed in
};

gulp.task('cssTask', cssTask);

module.exports = cssTask;
