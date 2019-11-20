var concat = require('gulp-concat');
var gulp = require('gulp');
var browserSync  = require('browser-sync')

/*gulp.task('bundle-js', function() {
  return gulp.src('../../scripts/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/scripts/'))
    .pipe(browserSync.stream()); // update browser with bundled javascript
}); */

var javascriptTask = function () {
  return gulp.src('./scripts/input.js') // files to be bundled
    .pipe(concat('output.js')) // bundled fileName.js
    .pipe(gulp.dest('production/scripts/')); // directory fileName.js will be placed in
    //.pipe(browserSync.stream()); // update browser with bundled javascript
}

gulp.task('javascript', javascriptTask);
module.exports = javascriptTask;
