/*
    Idea is for browsersync to detect changes and reload your browser
*/

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// browserSync watch for changes
var browserSyncWatch = function () {
  browserSync.init({
    browser: ["google chrome", "safari"],
    proxy: "wordpress.local", // change this to your websiteName.local or ipv4
    notify: false,
  },)

  // will include methods from css.js
  var cssTask = require('./css.js');

  // watch all .css files in the styles directory for changes
  gulp.watch('./styles.css').on('change', gulp.series(cssTask, browserSync.reload));

  // will include methods from fonts.js
  var fontsTask = require('./fonts.js');

  gulp.watch('assets/fonts/*').on('change', gulp.series(fontsTask, browserSync.reload));

  var imagesTask = require('./images.js');

  // watch all images in the images directory for changes
  gulp.watch('assets/images/**/*').on('change', gulp.series(imagesTask, browserSync.reload));

  // will include methods from sass.js
  var sassTask = require('./sass.js');

  // watch all .scss sass files in the sass directory for changes
  gulp.watch('assets/sass/**/*.scss').on('change', gulp.series(sassTask, browserSync.reload));

  // will include methods from javascript.js
  var javascriptTask = require('./javascript.js');

  // on any changed javascript files, bundle the javascript then reload the browser
  gulp.watch('assets/javascript/*.js').on('change', gulp.series(javascriptTask, browserSync.reload));

  var phpFallbackTask = require('./phpFallback.js');

  gulp.watch('./index.php').on('change', gulp.series(phpFallbackTask, browserSync.reload));

  var phpPagesTask = require('./phpPages.js');

  gulp.watch('templates/pages/*.php').on('change', gulp.series(phpPagesTask, browserSync.reload));

  var phpPartialsTask = require('./phpPartials.js');

  gulp.watch('templates/partials/**/*.php').on('change', gulp.series(phpPartialsTask, browserSync.reload));

  var phpPostsTask = require('./phpPosts.js');

  gulp.watch('templates/posts/*.php').on('change', gulp.series(phpPostsTask, browserSync.reload));

} // end of browserSyncWatch function variable

gulp.task('watch', browserSyncWatch);

// export the browserSyncWatch function to be used in default.js
module.exports = browserSyncWatch;
