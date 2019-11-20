var concat = require('gulp-concat');
var gulp = require('gulp');

var javascriptTask = function () {
  return gulp.src('./scripts/input.js') // files to be bundled
    .pipe(concat('output.js')) // bundled fileName.js
    .pipe(gulp.dest('production/scripts/')); // directory fileName.js will be placed in
}

gulp.task('javascript', javascriptTask);

module.exports = javascriptTask;
