/*
    gulp the style.css in root for WordPress config file for production.
    This file is used to display metadata for the simple-starter-theme
    in the WordPress dashboard > themes area.
*/

var gulp = require('gulp');

var metaCssTask = function() {
  return gulp.src('./style.css') // files to be bundled
    .pipe(gulp.dest('production/')); // directory to be placed in
};

gulp.task('metaCssTask', metaCssTask);

module.exports = metaCssTask;
