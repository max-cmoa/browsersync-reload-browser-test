var concat = require('gulp-concat');
var gulp = require('gulp');
//var browserSync = require('browser-sync').create();

var javascriptTask = function () {
  // files passed in the array will be concatenated in that order
  return gulp.src([
                  'scripts/input.js',
                  'scripts/last.js',
                  'scripts/anotherLast.js',
    ]) // files to be bundles
    .pipe(concat('output.js')) // concatenated files into one output.js file
    .pipe(gulp.dest('production/scripts/')); // directory output.js will be placed in
  //  .pipe(browserSync.stream( { match: 'scripts/*.js' }));
};

gulp.task('javascriptTask', javascriptTask);

module.exports = javascriptTask;
