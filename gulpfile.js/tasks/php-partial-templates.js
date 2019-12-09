/*
    get php fallback file for production
    need to abstract gulp task for each folder
*/

var gulp = require('gulp');

/*
var phpPartialsTask = function() {
  return gulp.src('partial-templates/*.php')
    .pipe(gulp.dest('production/partial-templates/')); // place php partials
};
*/

var phpPartialsTask = function() {
  return gulp.src(
                  [
                    'partial-templates/footers/**/*.php',
                    'partial-templates/headers/**/*.php',
                    'partial-templates/navigations/**/*.php',
                  ], { base: 'partial-templates' },
                )
    .pipe(gulp.dest('production/partial-templates/')); // place php partials
};

gulp.task('phpPartialsTask', phpPartialsTask);

module.exports = phpPartialsTask;
