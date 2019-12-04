/*
    get php fallback file for production
*/

var gulp = require('gulp');

var phpFallbackTask = function() {
  return gulp.src([
                  './index.php',

    ])
    .pipe(gulp.dest('production/')); // place php fallback in root directory
};

gulp.task('phpFallbackTask', phpFallbackTask);

module.exports = phpFallbackTask;
