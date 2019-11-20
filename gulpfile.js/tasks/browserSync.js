// to use browserSync methods
var browserSync = require('browser-sync').create();
var gulp = require('gulp');

// browserSync watch for changes
var browserSyncWatch = function () {
  browserSync.init({

    // tell browsersync to use this dir and serve it as a mini-server
    server: {
      baseDir: './',
      index: 'index.html',
    }

  });

  // watch all .html files from the root directory for changes
  gulp.watch('*.html').on('change', browserSync.reload);
  // watch all .css files in the styles directory for changes
  gulp.watch('css/styles.css').on('change', browserSync.reload);
  // watch all javascript files in the scripts directory for changes
  gulp.watch('scripts/*.js').on('change', browserSync.reload);
  // watch gulpfile 'index.js' for changes
  gulp.watch('gulpfile.js/*.js').on('change', browserSync.reload);

}

// export the browserSyncWatch function to be used in default.js
module.exports = browserSyncWatch;
