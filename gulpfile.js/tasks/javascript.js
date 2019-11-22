var concat = require('gulp-concat');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var javascriptTask = function () {
  // files passed in the array will be concatenated in that order
  return gulp.src([
                  'scripts/input.js',
                  'scripts/inputTwo.js',
                  'scripts/inputThree.js',
                  'scripts/fourth.js',
                  'scripts/fifth.js',
                  'scripts/sixth.js',
                  'scripts/seventh.js',
    ]) // files to be bundles
    .pipe(concat('output.js')) // concatenated files into one output.js file
    .pipe(gulp.dest('production/scripts/')) // directory output.js will be placed in
    .pipe(browserSync.reload({ stream: true }));
};

gulp.task('javascript', javascriptTask);

module.exports = javascriptTask;
