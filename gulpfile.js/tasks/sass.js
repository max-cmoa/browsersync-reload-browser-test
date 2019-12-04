/*
    compile sass to css for production
*/

var gulp = require('gulp');
var sass = require('gulp-sass');

var sassTask = function() {
  return gulp.src('./assets/sass/main.scss') // compile sass file
    .pipe(sass()) // compile sass to css
    .pipe(gulp.dest('production/assets/sass')); // directory to place main.css in
};

gulp.task('sassTask', sassTask);

module.exports = sassTask;
