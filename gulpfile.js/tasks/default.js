// this file is ran when you type $ gulp in the command line

var gulp = require('gulp');

var browserSyncWatch = require('./browserSync.js');

var defaultGulpTask = function () {
  // watch code files for any changes
  browserSyncWatch();
}

// default gulp task that is run when you type gulp on the command line
gulp.task('default', defaultGulpTask);

// to use $ gulp which will run the default task
module.exports = defaultGulpTask;


/*
// to use browserSync methods
var browserSync = require('browser-sync').create();

// watch for changes
function watch() {
  browserSync.init({

    // tell browsersync to use this dir and serve it as a mini-server
    server: {
      baseDir: './',
      index: 'index.html',
    }

  });

  // watch html for changes
  gulp.watch('*.html').on('change', browserSync.reload);
  // watch css for changes
  gulp.watch('css/styles.css').on('change', browserSync.reload);
  // watch javascript for changes
  gulp.watch('scripts/*.js').on('change', browserSync.reload);
  // watch gulpfile 'index.js' for changes
  gulp.watch('gulpfile.js/*.js').on('change', browserSync.reload);

}
*/
