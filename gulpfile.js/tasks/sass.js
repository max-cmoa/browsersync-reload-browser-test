/* this file is used to compile sass to css */

var gulp = require('gulp');
var sass = require('gulp-sass');

var sassTask = function() {
  return gulp.src('./sass/main.scss') // compile sass file
    .pipe(sass()) // compile sass to css
    .pipe(gulp.dest('production/css/')); // directory to place main.css in
};

gulp.task('sassTask', sassTask);

module.exports = sassTask;
