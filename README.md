# simple-starter-theme

  A starter theme to teach how abstractions can make programming and maintenance easier. This project uses <ins>.scss file syntax Sass</ins> to make formatting easier to write. Gulp has been abstracted to easily modify or add new gulp tasks.

# Starting

      $ cd to-this-directory
      $ npm install

      If a npm package install fails, find the issue and you may need install <ins>[nvm](https://github.com/nvm-sh/nvm/blob/master/README.md)</ins>
      $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash

      See all gulp tasks type
      $ gulp --tasks

      To use browsersync to watch files and reload when changes are detected
      $ gulp watch

      To do a normal build type
      $ gulp

# Directories and Files explained
  * **assets directory** contain fonts, icons, images, javascript files, and sass files.

  * **gulpfile.js directory** contains abstracted gulp tasks for making the production version of this theme.

  * **templates directory*8 contains php template files
      **pages directory** for WordPress pages

      **partials directory** for partials to be included on multiple pages or posts

      **posts directory** for WordPress posts
        **footers directory** for html footers

        **headers directory** for html headers like metadata and site information

        **navigations directory** for html navigation

  * **.gitignore file** contains directories and files that will not be commited/saved to Github

  * **functions.php file** contains functions for WordPress to enqueue main.css and main.js files.

  * **package.json file** contains json for npm packages required for sass and gulp to work.

  * **package-lock.json file** automatically created by package.json.

  * **README.md file** contains useful information about the project.

  * **screenshot.png image** is an image that is displayed for this theme in the dashboard /wp-admin themes section. Learn more about <ins>[screenshot requirements](https://wpism.com/wordpress-theme-screenshot/)</ins>

  * **styles.css** contains metadata for information about this theme and is displayed in the dashboard /wp-admin themes section

# Where is the production directory that was created by gulp?
  The production directory is hidden by the .gitignore file.

##  browsersync cacheing issue
  Problem: If you add or subtract files, browsersync won't see them.
  Solution: stop browsersync then restart browsersync and make sure the files are added


## Reference
  See the <ins>[browsersync documentation](https://www.browsersync.io/docs/api#api-init)</ins>.
  See the <ins>[gulpjs documentation](https://gulpjs.com/docs/en/getting-started/quick-start)</ins>
  See this note about <ins>[browsersync injection](https://stackoverflow.com/questions/31163754/browser-sync-does-not-refresh-page-after-changes-with-gulp?rq=1)</ins>. This would not work for me. Perhaps I had the syntax incorrect, a cacheing issue occured, or the injection feature is broken.
