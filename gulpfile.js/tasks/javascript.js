/*
    gulp all javascript files for production
*/

var concat = require('gulp-concat');
var gulp = require('gulp');
//var browserSync = require('browser-sync').create();

var javascriptTask = function () {
  // files passed in the array will be concatenated in that order
  return gulp.src([
                  'assets/javascript/input.js',
                  'assets/javascript/last.js',
    ]) // files to be bundles
    .pipe(concat('main.js')) // concatenated files into one output.js file
    .pipe(gulp.dest('production/assets/javascript/')) // directory output.js will be placed in
    .pipe(gulp.dest('assets/javascript/'));
  //  .pipe(browserSync.stream( { match: 'scripts/*.js' }));
};

gulp.task('javascriptTask', javascriptTask);

module.exports = javascriptTask;
