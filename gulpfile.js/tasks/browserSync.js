var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// browserSync watch for changes
var browserSyncWatch = function () {
  browserSync.init({

    injectChanges: true,

    port: 8080,
    domain: '0.0.0.0',

    // tell browsersync to use this dir and serve it as a mini-server
    server: {
      baseDir: './',
    },

  });

  // watch all .html files from the root directory for changes
  gulp.watch('*.html').on('change', browserSync.reload);

  // will include methods from css.js
  var cssTask = require('./css.js');

  // watch all .css files in the styles directory for changes
  gulp.watch('css/styles.css').on('change', gulp.series(cssTask, browserSync.reload));

  // will include methods from javascript.js
  var javascriptTask = require('./javascript.js');

  // on any changed javascript files, bundle the javascript then reload the browser
  gulp.watch('scripts/*.js').on('change', gulp.series(javascriptTask, browserSync.reload));

  //gulp.watch('./scripts/**/*.js', gulp.series('javascriptTask', browserSync.reload ) );

  // watch gulpfile 'index.js' for changes
  gulp.watch('gulpfile.js/*.js').on('change', browserSync.reload);

  // watch all gulp tasks for changes
  gulp.watch('gulpfile.js/tasks/*.js').on('change', browserSync.reload);

  // comment to be changed to show how if you modify any js file in tasks, browserSync will reload the browser
  console.log('watch the Browsersync console and change this text. It does not get more meta than this');

} // end of browserSyncWatch function variable

gulp.task('watch', browserSyncWatch);

// export the browserSyncWatch function to be used in default.js
module.exports = browserSyncWatch;
