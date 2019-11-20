var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

var cssTask = function() {
  return gulp.src('./css/styles.css') // files to be bundled
    .pipe(cleanCSS()) // minify the css
    .pipe(gulp.dest('production/css/')); // directory to be placed in
};

gulp.task('css', cssTask);

module.exports = cssTask;
