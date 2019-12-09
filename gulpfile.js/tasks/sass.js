/*
    compile sass to css for production
*/

var gulp = require('gulp');
var sass = require('gulp-sass');

// sass is for local development only, in production we just use css/main.css
var sassTask = function() {
  return gulp.src('./assets/sass/main.scss') // compile sass file
    .pipe(sass()) // compile sass to css
    .pipe(gulp.dest('assets/css')) // directory to place main.css in
    .pipe(gulp.dest('production/assets/css')); // place in production folder
};

gulp.task('sassTask', sassTask);

module.exports = sassTask;
