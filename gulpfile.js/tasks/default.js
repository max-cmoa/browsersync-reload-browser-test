/*
  default.js is ran when you type $ gulp in the command line
*/

// required to use gulp object
var gulp = require('gulp');

// will include methods from browserSync.js
var browserSyncWatch = require('./browserSync.js');

var defaultGulpTask = function () {
  // call the browserSync watch method
  browserSyncWatch();
}

// default gulp task that is run when you type gulp on the command line
gulp.task('default', defaultGulpTask);

// to use $ gulp which will run the default task
module.exports = defaultGulpTask;
