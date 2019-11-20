/*
  idea is to not have one large gulp file, rather each file will
  handle a specific task.

  to create a new task, add a new fileName.extension to the task directory
  gulpfile.js/tasks/default.js is ran when you type $gulp in the cli

*/

var requireDirectory = require('require-dir');

// require tasks from the task directory and subdirectorys
requireDirectory('./tasks', {recurse: true} );
