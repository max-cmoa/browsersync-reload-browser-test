/*
    gulp all images for production
*/

var gulp = require('gulp');

var imagesTask = function() {
  return gulp.src('./assets/images/*') // images to be bundled

    .pipe(gulp.dest('production/assets/images')); // directory to be placed in
};

gulp.task('imagesTask', imagesTask);

module.exports = imagesTask;
