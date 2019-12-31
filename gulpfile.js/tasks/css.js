/*
    gulp the main.css for production.
    Used for further processing of css file.
*/

var gulp = require('gulp');

var cssTask = function() {
  return gulp.src('assets/css/main.css') // files to be bundled
    .pipe(gulp.dest('production/')); // directory to be placed in
};

gulp.task('cssTask', cssTask);

module.exports = cssTask;
