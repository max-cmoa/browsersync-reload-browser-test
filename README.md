# browsersync-reload-browser-test
  Example that shows how browsersync and two tasks execute when changes are detected. When you want to see the changes in index.html, just open or reload the index.html file. Browsersync will start a server and open a localhost on port 3000. The purpose of that repo is to show how one how the files are abstracted together and how one can easily add or subtract tasks as needed.

## How to run
      $ cd to-this-directory
      $ gulp taskName
      to see tasks type $ gulp --tasks

##  browsersync cacheing issue files
  Problem: If you add or subtract files, browsersync won't see them.
  Solution: stop browsersync then restart browsersync and make sure the files are added


## Reference
  See the <ins>[browsersync documentation](https://www.browsersync.io/docs/api#api-init)</ins>.
  See the <ins>[gulpjs documentation](https://gulpjs.com/docs/en/getting-started/quick-start)</ins>
  See this note about <ins>[browsersync injection](https://stackoverflow.com/questions/31163754/browser-sync-does-not-refresh-page-after-changes-with-gulp?rq=1)</ins>. This would not work for me. Perhaps I had the syntax incorrect.
