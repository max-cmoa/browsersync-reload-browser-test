# simple-starter-theme

  A starter theme to teach how abstractions and modular design can help making websites and maintenance easier. This project attempts to show how easy it is to use node, npm, sass (.scss), and gulp when developing a theme. Follow the steps in order to get started. If you don't have a developers environment, I would consider reading this <ins>[atom.io setup gist](https://gist.github.com/max-cmoa/a16bf224d1b6672bea030e7196d26a22)</ins>.

  Always remember these words: **Make one change/save at a time, and reload your browser to see if your change worked**.

# Starting

Make sure you have installed <ins>[node](https://nodejs.org/en/download/)</ins>, <ins>[npm](https://docs.npmjs.com/cli/install)</ins> and <ins>[nvm](https://github.com/nvm-sh/nvm/blob/master/README.md)</ins>.

      $ cd to-this-directory
      $ npm install

      If a npm package install fails, find the issue and you may need install <ins>[nvm](https://github.com/nvm-sh/nvm/blob/master/README.md)</ins>
      $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash

      See all gulp tasks.
      $ gulp --tasks

      To do a normal build without using browsersync.
      $ gulp

      To use browsersync to watch files and reload when changes are detected. Proxy will be either your localhost or your Local by Flywheel localhost. 
      1. Open **gulpfile.js/tasks/browserSync.js** and change the proxy to your proper proxy.
      2. $ gulp watch
      
# Reference
  * See the <ins>[browsersync documentation](https://www.browsersync.io/docs/api#api-init)</ins>.
     * Problem: If you add or subtract files, browsersync won't see them.
     * Solution: stop browsersync then restart browsersync and make sure the files are added.
  * See the <ins>[information about .gitignore file](https://help.github.com/en/github/using-git/ignoring-files)</ins>
  * See the information <ins>[about node](https://www.w3schools.com/nodejs/)</ins>
  * See the information <ins>[about npm, package.json, and package-lock.json](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)</ins>
  * See the information about <ins>[node version manager **nvm**](https://www.keycdn.com/blog/node-version-manager)</ins>.
  * See the <ins>[gulpjs documentation](https://gulpjs.com/docs/en/getting-started/quick-start)</ins>.
  * See the <ins>[Sass documentation](https://sass-lang.com/guide)</ins>, and please note this project uses .scss sass syntax because it is easier to use. 
   * Read about <ins>[.scss sass syntax](https://sass-lang.com/documentation/syntax)</ins>.

# Directories and Files explained
  * **assets directory** contain fonts, icons, images, javascript files, and sass files.

  * **gulpfile.js directory** contains abstracted gulp tasks for making the production version of this theme.

  * **templates directory** contains php template files.
      **pages directory** for WordPress pages.

      **partials directory** for partials to be included on multiple pages or posts.

      **posts directory** for WordPress posts.
        **footers directory** for html footers.

       **headers directory** for html headers like metadata and site information.

       **navigations directory** for html navigation.

  * **.gitignore file** contains directories and files that will not be commited/saved to Github.

  * **functions.php file** contains functions for WordPress to enqueue main.css and main.js files.

  * **package.json file** contains json for npm packages required for sass and gulp to work.

  * **package-lock.json file** automatically created by package.json.

  * **README.md file** contains useful information about the project.

  * **screenshot.png image** is an image that is displayed for this theme in the dashboard /wp-admin themes section. Learn more about <ins>[screenshot requirements](https://wpism.com/wordpress-theme-screenshot/)</ins>.

  * **styles.css** contains metadata for information about this theme and is displayed in the dashboard /wp-admin themes section.
