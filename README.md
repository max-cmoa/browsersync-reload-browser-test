# simple-starter-theme

  A starter theme to teach how abstractions and modular design can help making websites and maintenance easier. This code repository attempts to show beginners how to use node, npm, sass using **.scss** syntax, and gulp when developing a theme. Follow the steps one by one.

  Always remember these words: **Make one change/save at a time, and reload your browser to see if your change worked**.

# Starting

The files **index.php** and **style.css** are required in a WordPress theme.

If you don't have a developers environment, I would consider reading this <ins>[atom.io setup gist](https://gist.github.com/max-cmoa/a16bf224d1b6672bea030e7196d26a22)</ins>.

If you want an easy way to run WordPress, read this gist on <ins>[Local By Flywheel setup](https://gist.github.com/max-cmoa/16057cde0c9b87ff900e4b2eb8faafe3)</ins>.

Make sure you have installed <ins>[node js](https://nodejs.org/en/download/)</ins>, <ins>[node package manager aka npm](https://docs.npmjs.com/cli/install)</ins> and the <ins>[node version manager aka nvm](https://github.com/nvm-sh/nvm/blob/master/README.md)</ins>.

Download or $ git clone thisRepo to your computer. Then place this theme in the **wp-content/themes directory**

      $ cd to-this-directory
      $ npm install

      If a npm install fails, please report the issue here. Sometimes packages require an older version of node js and installing <ins>[nvm](https://github.com/nvm-sh/nvm/blob/master/README.md)</ins> to use an older version of node to run npm install again maybe the solution.

      $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash

      gulp is used to take everything and process **build** the theme files for your WordPress website. To see all gulp tasks, type the following in a terminal and press [enter].
      $ gulp --tasks

      To do a build without using browsersync.
      $ gulp

      To compile sass
      $ gulp sassTask
      Or run normal gulp which will run other defaut tasks
      $ gulp

      To use browsersync to watch files and reload when changes are detected. Note: you don't have to use Local By Flywheel. Proxy will be either your localhost or your websigte name in Local by Flywheel.
      1. Open **gulpfile.js/tasks/browserSync.js** and change the proxy to the proper proxy.
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

  * **.git directory** contains metadata if you are connected to a remote repository like github. (This is hidden by default)

  * **assets directory** contain fonts, icons, images, javascript files, and sass files.

  * **node_modules directory** (not commited because of .gitignore), contains files installed when $ npm install is ran.

  * **production directory** contains files output from running $ gulp or $ gulp taskName

  * **gulpfile.js directory** contains abstracted gulp tasks for making the production version of this theme.
     **tasks** contains files which each handle a task for a related file or directory.
    **index.js** is used to require all of the tasks in the tasks directory

  * **templates directory** contains php template files.
      **pages directory** for WordPress pages.

      **partials directory** for partials to be included on multiple pages or posts.

      **posts directory** for WordPress posts.
        **footers directory** for html footers.

       **headers directory** for html headers like metadata and site information.

       **navigations directory** for html navigation.

  * **.gitignore file** contains directories and files that will not be commited/saved to Github.

  * **functions.php file** contains functions for WordPress to enqueue main.css and main.js files.

  * **index.php file (required file)** is a fallback template that WordPress will use if no other appropriate template is found. The idea of this project is not to rely on the confusing <ins>[hell that is the WordPress template hierarchy](https://wphierarchy.com)</ins>. Rather you can create your own template files in the template directory to organize your files.

  * **package-lock.json file** automatically created by package.json.

  * **package.json file** contains json for npm packages required for sass and gulp to work.

  * **README.md file** contains useful information about the project.

  * **screenshot.png image** is an image that is displayed for this theme in the dashboard /wp-admin themes section. Learn more about <ins>[screenshot requirements](https://wpism.com/wordpress-theme-screenshot/)</ins>.

  * **styles.css (required file)** contains metadata for information about this theme and is displayed in the dashboard /wp-admin themes section.
