/*
    Idea is for browsersync to detect changes and reload your browser
*/

var gulp = require('gulp');
var browsersync = require('browser-sync').create();

// browserSync watch for changes
var browsersyncWatchTask = function () {
  browsersync.init({
    browser: ["google chrome", /*"safari"*/], // browsers to open
    proxy: "wordpress.local", // change this to your websiteName.local or ipv4
    notify: false,
  },)

  // will include methods from css.js
  var metaCssTask = require('./meta-css.js');

  // watch all .css files in the styles directory for changes
  gulp.watch('./styles.css').on('change', gulp.series(metaCssTask, browsersync.reload));

  var metaPackageJsonTask = require('./meta-package-json.js');

  // watch the package.json file for any changes
  gulp.watch('./package.json').on('change', gulp.series(metaPackageJsonTask, browsersync.reload));

  // will include methods from css.js
  var metaScreenshotTask = require('./meta-screenshot.js');

  // watch all .css files in the styles directory for changes
  gulp.watch('./screenshot.png').on('change', gulp.series(metaScreenshotTask, browsersync.reload));

  // will include methods from fonts.js
  var fontsTask = require('./fonts.js');

  gulp.watch('assets/fonts/*').on('change', gulp.series(fontsTask, browsersync.reload));

  var functionsPhpTask = require('./functions-php.js');

  gulp.watch('./functions.php').on('change', gulp.series(functionsPhpTask, browsersync.reload));

  var gitignoreTask = require('./gitignore.js');

  gulp.watch('./.gitignore').on('change', gulp.series(gitignoreTask, browsersync.reload));

  var imagesTask = require('./images.js');

  // watch all images in the images directory for changes
  gulp.watch('assets/images/**/*').on('change', gulp.series(imagesTask, browsersync.reload));

  // will include methods from sass.js
  var sassTask = require('./sass.js');

  // watch all .scss sass files in the sass directory for changes
  gulp.watch('assets/sass/**/*.scss').on('change', gulp.series(sassTask, browsersync.reload));

  // will include methods from javascript.js
  var javascriptTask = require('./javascript.js');

  // on any changed javascript files, bundle the javascript then reload the browser
  gulp.watch('assets/javascript/*.js').on('change', gulp.series(javascriptTask, browsersync.reload));

  var phpFallbackTask = require('./php-fallback-template.js');

  gulp.watch('./index.php').on('change', gulp.series(phpFallbackTask, browsersync.reload));

  var phpCommentsTask = require('./php-comment-templates.js');

  gulp.watch('comment-templates/*.php').on('change', gulp.series(phpCommentsTask, browsersync.reload));

  var phpPagesTask = require('./php-page-templates.js');

  gulp.watch('page-templates/*.php').on('change', gulp.series(phpPagesTask, browsersync.reload));

  var phpPartialsTask = require('./php-partial-templates.js');

  gulp.watch('partial-templates/*.php').on('change', gulp.series(phpPartialsTask, browsersync.reload));

  var phpPostsTask = require('./php-post-templates.js');

  gulp.watch('post-templates/*.php').on('change', gulp.series(phpPostsTask, browsersync.reload));

} // end of browserSyncWatch function variable

gulp.task('browsersyncWatchTask', browsersyncWatchTask);

// export the browserSyncWatch function to be used in default.js
module.exports = browsersyncWatchTask;
