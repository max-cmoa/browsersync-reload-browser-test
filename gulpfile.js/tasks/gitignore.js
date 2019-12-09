/*
    gulp the .gitignore file for production.
    This file is used to ignore certain files from being
    commited for the simple-starter-theme. Perhaps on your
    production server you want to use it as a git repo. Having
    this .gitignore file will make sure you won't commit certain files.
*/

var gulp = require('gulp');

var gitignoreTask = function() {
  return gulp.src('./.gitignore') // files to be bundled
    .pipe(gulp.dest('production/')); // directory to be placed in
};

gulp.task('gitignoreTask', gitignoreTask);

module.exports = gitignoreTask;
