/*
    gulp all imagesfor production
*/

var gulp = require('gulp');

var imagesTask = function() {
  return gulp.src('./assets/images/*') // images to be bundled

    .pipe(gulp.dest('production/assets/images')); // directory to be placed in
};

gulp.task('images', imagesTask);

module.exports = imagesTask;
