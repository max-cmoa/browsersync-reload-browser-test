# browsersync-reload-browser-test
  Example that shows how browsersync and two tasks execute when changes are detected. When you want to see the changes in index.html, just open or reload the index.html file. Browsersync will start a server and open a localhost on port 3000. You may have noticed that we use features from gulp 3 when the current version is gulp 4. It is okay to use gulp 3. One day we may migrate to gulp 4, but why fix what isn't broken and poses no security issues. Note: another link to a repo explaining how the files config.json, a task, and getEnabledTasks.js fit together will soon be made. Please check back here for a link to that repo. The purpose of that repo is to show how one how the files are abstracted together and how one can easily add or subtract tasks as needed.

## How to run
    $ cd to-this-directory
    $ gulp

## Reference
  See the <ins>[browsersync documentation](https://www.browsersync.io/docs/api#api-init)</ins>.
  See the <ins>[gulpjs documentation](https://gulpjs.com/docs/en/getting-started/quick-start)</ins>
