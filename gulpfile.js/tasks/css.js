/*
    gulp the style.css WordPress config file for production
*/

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

var cssTask = function() {
  return gulp.src('./style.css') // files to be bundled
    .pipe(cleanCSS()) // minify the css
    .pipe(gulp.dest('production/')); // directory to be placed in
};

gulp.task('css', cssTask);

module.exports = cssTask;
