# simple-starter-theme

  A starter theme to teach how abstractions can make programming and maintenance easier. This project uses .scss Sass to make writing css easier. The project also comes with gulp abstracted to easily modify or add new gulp tasks.

## Starting

      $ cd to-this-directory
      $ npm install

      See all gulp tasks type
      $ gulp --tasks

      To use browsersync to watch files and reload when changes are detected
      $ gulp watch

      To do a normal build type
      $ gulp

##  browsersync cacheing issue
  Problem: If you add or subtract files, browsersync won't see them.
  Solution: stop browsersync then restart browsersync and make sure the files are added


## Reference
  See the <ins>[browsersync documentation](https://www.browsersync.io/docs/api#api-init)</ins>.
  See the <ins>[gulpjs documentation](https://gulpjs.com/docs/en/getting-started/quick-start)</ins>
  See this note about <ins>[browsersync injection](https://stackoverflow.com/questions/31163754/browser-sync-does-not-refresh-page-after-changes-with-gulp?rq=1)</ins>. This would not work for me. Perhaps I had the syntax incorrect, a cacheing issue occured, or the injection feature is broken.
