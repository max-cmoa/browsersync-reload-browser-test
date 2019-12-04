/*
  default tasks that are ran when you type "gulp" in the command line
*/

// required to use gulp object
var gulp = require('gulp');

// include methods from css.js
var cssTask = require('./css.js');

// include methods from sass.js
var sassTask = require('./sass.js');

// include methods from javascript.js
var javascriptTask = require('./javascript.js');

// include methods from phpFallback.js
var phpFallbackTask = require('./phpFallback.js');

// include methods from phpPages.js
var phpPagesTask = require('./phpPages.js')

// include methods from phpPartials.js
var phpPartialsTask = require('./phpPartials.js');

// include methods from phpPosts.js
var phpPostsTask = require('./phpPosts.js');

// include methods from browserSync.js
var browserSyncWatch = require('./browserSync.js');

var defaultGulpTask = function () {

  return new Promise(function(resolve, reject) {

   console.log("default task Started");

   // call css tasks
   cssTask();

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
