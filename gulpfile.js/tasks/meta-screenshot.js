/*
    gulp the screenshot.png image for WordPress for production.
    This file is used to display an image for the simple-starter-theme
    in the WordPress dashboard > themes area.
*/

var gulp = require('gulp');

var metaScreenshotTask = function() {
  return gulp.src('./screenshot.png') // files to be bundled
    .pipe(gulp.dest('production/')); // directory to be placed in
};

gulp.task('metaScreenshotTask', metaScreenshotTask);

module.exports = metaScreenshotTask;
