/*
    Idea is for browsersync to detect changes and reload your browser
*/

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// browserSync watch for changes
var browserSyncWatch = function () {
  browserSync.init({

    // browsers to open the site with
    browser: ["safari"/*, "google chrome", "firefox"*/],

    // reload each browser when browsersync is restarted
    reloadOnRestart: true,

    // don't minify client javascript
    minify: false,

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
  gulp.watch('./styles.css').on('change', gulp.series(cssTask, browserSync.reload));

  // will include methods from sass.js
  var sassTask = require('./sass.js');

  // watch all .scss sass files in the sass directory for changes
  gulp.watch('assets/sass/**/*.scss').on('change', gulp.series(sassTask, browserSync.reload));

  // will include methods from javascript.js
  var javascriptTask = require('./javascript.js');

  // on any changed javascript files, bundle the javascript then reload the browser
  gulp.watch('assets/javascript/*.js').on('change', gulp.series(javascriptTask, browserSync.reload));

} // end of browserSyncWatch function variable

gulp.task('watch', browserSyncWatch);

// export the browserSyncWatch function to be used in default.js
module.exports = browserSyncWatch;
