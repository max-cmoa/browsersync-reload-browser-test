/*
    gulp the functions.php file in root for production.
    This file is used to display include javascript and css related to the
    theme.
*/

var gulp = require('gulp');

var functionsPhpTask = function() {
  return gulp.src('./functions.php') // files to be bundled
    .pipe(gulp.dest('production/')); // directory to be placed in
};

gulp.task('functionsPhpTask', functionsPhpTask);

module.exports = functionsPhpTask;
