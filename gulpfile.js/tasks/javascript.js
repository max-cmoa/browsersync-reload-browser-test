var concat = require('gulp-concat');
var gulp = require('gulp');
var gulpCache = require('gulp-cache');

var javascriptTask = function () {
  // files passed in the array will be concatenated in that order
  return gulp.src([
                  'scripts/input.js',
                  'scripts/last.js',
                  
    ]) // files to be bundles
    .pipe(gulpCache.clear())
    .pipe(concat('output.js')) // concatenated files into one output.js file
    .pipe(gulp.dest('production/scripts/')); // directory output.js will be placed in
};

gulp.task('javascriptTask', javascriptTask);

module.exports = javascriptTask;