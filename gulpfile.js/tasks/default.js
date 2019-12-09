/*
  default tasks that are ran when you type "gulp" in the command line
*/

// required to use gulp object
var gulp = require('gulp');

// include methods from meta-css.js
var metaCssTask = require('./meta-css.js');

// include methods from meta-screenshot.js
var metaScreenshotTask = require('./meta-screenshot.js');

// include methods from fonts.js
var fontsTask = require('./fonts.js');

// include methods from functions.js
var functionsPhpTask = require('./functions-php.js');

// include methods from images.js
var imagesTask = require('./images.js');

// include methods from sass.js
var sassTask = require('./sass.js');

// include methods from javascript.js
var javascriptTask = require('./javascript.js');

// include methods from phpFallback.js
var phpFallbackTask = require('./php-fallback.js');

// include methods from phpPages.js
var phpPagesTask = require('./php-pages.js')

// include methods from phpPartials.js
var phpPartialsTask = require('./php-partials.js');

// include methods from phpPosts.js
var phpPostsTask = require('./php-posts.js');

// include methods from browsersync.js
var browserSyncWatch = require('./browsersync.js');

var defaultGulpTask = function () {

  return new Promise(function(resolve, reject) {

   console.log("default task Started");

   // call meta css tasks
   metaCssTask();

   // call meta screenshot tasks
   metaScreenshotTask();

   // call fonts tasks
   fontsTask();

   // call functions tasks
   functionsPhpTask();

   // call images tasks
   imagesTask();

   // call sass tasks
   sassTask();

   // used to bundle javascript files because browsersync won't update them
   javascriptTask();

   // call php fallback task
   phpFallbackTask();

   // call php pages task
   phpPagesTask();

   // call php partials task
   phpPartialsTask();

   // call php posts task
   phpPostsTask();

   // to resolve the promise and tell the gulp task has completed every task
   resolve();
 });

}

// default gulp task that is run when you type gulp on the command line
gulp.task('default', defaultGulpTask);

// to use $ gulp which will run the default task
module.exports = defaultGulpTask;
