/*
    get php fallback file for production
    need to abstract gulp task for each folder
*/

var gulp = require('gulp');

// copies structure of directory and files within those directories
var phpPartialsTask = function() {
  return gulp.src(
                  [
                    'partial-templates/footers/**/*.php',
                    'partial-templates/headers/**/*.php',
                    'partial-templates/navigations/**/*.php',
                  ], { base: 'partial-templates' }, // where to start copying from
                )
    .pipe(gulp.dest('production/partial-templates/')); // place php partials
};

gulp.task('phpPartialsTask', phpPartialsTask);

module.exports = phpPartialsTask;
