/*
    idea is to not have one large gulp file, rather each file will
    handle a specific gulp task.
    to create a new task, add a new "taskName.js" to the task directory
*/

var requireDirectory = require('require-dir');

// require tasks from the task directory and subdirectorys
requireDirectory('./tasks', {recurse: true} );
