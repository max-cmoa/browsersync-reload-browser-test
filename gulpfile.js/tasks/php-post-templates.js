/*
    get php fallback file for production
*/

var gulp = require('gulp');

var phpPostsTask = function() {
  return gulp.src('templates/posts/*.php')
    .pipe(gulp.dest('production/post-templates/')); // place php posts
};

gulp.task('phpPostsTask', phpPostsTask);

module.exports = phpPostsTask;
