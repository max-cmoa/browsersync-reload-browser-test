/*
  default tasks that are ran when you type "gulp" in the command line
*/

// required to use gulp object
var gulp = require('gulp');

// include methods from meta-css.js
var metaCssTask = require('./meta-css.js');

// include methods from meta-package.json
var metaPackageJsonTask = require('./meta-package-json.js');

// include methods from meta-screenshot.js
var metaScreenshotTask = require('./meta-screenshot.js');

// include methods from fonts.js
var fontsTask = require('./fonts.js');

// include methods from functions.js
var functionsPhpTask = require('./functions-php.js');

// include methods from gitignore.js
var gitignoreTask = require('./gitignore.js');

// include methods from images.js
var imagesTask = require('./images.js');

// include methods from sass.js
var sassTask = require('./sass.js');

// include methods from javascript.js
var javascriptTask = require('./javascript.js');

// include methods from phpFallback.js
var phpFallbackTask = require('./php-fallback-template.js');

// include methods from php-comment-templates.js
var phpCommentTemplatesTask = require('./php-comment-templates.js');

// include methods from php-page-templates.js
var phpPageTemplatesTask = require('./php-page-templates.js')

// include methods from php-partial-templates.js
var phpPartialTemplatesTask = require('./php-partial-templates.js');

// include methods from php-post-templates.js
var phpPostTemplatesTask = require('./php-post-templates.js');

// include methods from browsersync.js
var browserSyncWatch = require('./browsersync.js');

var defaultGulpTask = function () {

  return new Promise(function(resolve, reject) {

   console.log("default task Started");

   // call meta css tasks
   metaCssTask();

   // call meta package.json tasks
   metaPackageJsonTask();

   // call meta screenshot tasks
   metaScreenshotTask();

   // call fonts tasks
   fontsTask();

   // call functions tasks
   functionsPhpTask();

   // call gitignore tasks
   gitignoreTask();

   // call images tasks
   imagesTask();

   // call sass tasks
   sassTask();

   // used to bundle javascript files because browsersync won't update them
   javascriptTask();

   // call php fallback task
   phpFallbackTask();

   phpCommentTemplatesTask();

   // call php pages task
   phpPageTemplatesTask();

   // call php partials task
   phpPartialTemplatesTask();

   // call php posts task
   phpPostTemplatesTask();

   // to resolve the promise and tell the gulp task has completed every task
   resolve();
 });

}

// default gulp task that is run when you type gulp on the command line
gulp.task('default', defaultGulpTask);

// to use $ gulp which will run the default task
module.exports = defaultGulpTask;
