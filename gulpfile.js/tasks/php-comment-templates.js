/*
    get php fallback file for production
*/

var gulp = require('gulp');

var phpCommentTemplatesTask = function() {
  return gulp.src('comment-templates/*.php')
    .pipe(gulp.dest('production/comment-templates/')); // place file to
};

gulp.task('phpCommentTemplatesTask', phpCommentTemplatesTask);

module.exports = phpCommentTemplatesTask;
