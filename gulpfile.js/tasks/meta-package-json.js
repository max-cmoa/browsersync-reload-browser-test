/*
    gulp the package.json file to the root for production.
    This file is used to pull in required packages for the simple-starter-theme
    when placed on a production server.
*/

var gulp = require('gulp');

var metaPackageJsonTask = function() {
  return gulp.src('./package.json') // files to be bundled
    .pipe(gulp.dest('production/')); // directory to be placed in
};

gulp.task('metaPackageJsonTask', metaPackageJsonTask);

module.exports = metaPackageJsonTask;
