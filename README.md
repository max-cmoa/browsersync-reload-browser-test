# simple-starter-theme

  A starter theme for beginners. This theme separates all templates into their own folders for organizational purposes. If you want to add a template, it is recommended that you add your template to the appropriate template directory.

  Remember these words: **Make one change/save at a time, and reload your browser to see if your change worked**.

# Starting

If you don't have a developers environment, I would consider reading this <ins>[atom.io setup gist](https://gist.github.com/max-cmoa/a16bf224d1b6672bea030e7196d26a22)</ins>.

If you want an easy way to run WordPress, I suggest Local By Flywheel. Please see this <ins>[Local By Flywheel setup](https://gist.github.com/max-cmoa/16057cde0c9b87ff900e4b2eb8faafe3)</ins>.

Please install <ins>[node js](https://nodejs.org/en/download/)</ins>, <ins>[node package manager aka npm](https://docs.npmjs.com/cli/install)</ins> and <ins>[node version manager aka nvm](https://github.com/nvm-sh/nvm/blob/master/README.md)</ins>.

Download or $ git clone uri-for-simple-starter-theme to your computer. Then place this theme in the **/wp-content/themes** directory

      $ cd to-this-directory
      $ npm install

      If a npm install fails, please report the issue here. Sometimes packages require an older version of node js and installing <ins>[nvm](https://github.com/nvm-sh/nvm/blob/master/README.md)</ins> to use an older version of node to run npm install again maybe the solution.

      gulp is used to take all files and prepare them for your live website, also known as a **build**.

      To see all gulp tasks, run
      $ gulp --tasks

      To do a build without using browsersync.
      $ gulp

      To compile sass
      $ gulp sassTask
      Or run normal gulp which will run other default tasks
      $ gulp

      To use browsersync to watch files and reload when changes are detected. Note: you don't have to use Local By Flywheel. Proxy will be either your localhost or your websigte name in Local by Flywheel.
      1. Open **gulpfile.js/tasks/browserSync.js** and change the proxy to the proper proxy.
      2. $ gulp watch

# Directories and Files explained

  * **.git directory** contains metadata if you are connected to a remote repository like github. (This is hidden by default)

  * **assets directory** contain fonts, icons, images, javascript files, and sass files.

  * **node_modules directory** (not commited because of .gitignore), contains files installed when $ npm install is ran.

  * **production directory** contains files output from running $ gulp or $ gulp taskName

  * **gulpfile.js directory** contains abstracted gulp tasks for making the production version of this theme.

      **gulpfile.js/tasks** contains files which each handle a task for a related file or directory.
     **gulpfile.js/index.js** is used to require all of the tasks in the tasks directory

  * **comment-templates directory** contains custom comment templates, which one can use to format how comments are displayed. Uses function
  get_template_part('../partial-templates/footers/main-footer'); to
  find the specific comment templates. You don't pick this from the
  /wp-admin dashboard. This is unlike page-templates and post-templates

  *  **page-templates directory** contains custom page templates to give a different look and feel for a page. Always choose one from the Page editor found in **/wp-admin > dashboard > Pages > Page Attributes >
  Template > select home-page from drop down**.

  *  **post-templates directory** contains custom post templates to give a different look and feel for a post **/wp-admin > dashboard > Posts > Post Attributes > Template > select zebra from drop down.**.

    **partial-templates directory** for partials to be included on multiple pages or posts.
        **partial-templates/footers directory** contains footer partials
          **main-footer.php** contains code for footer of website

        **partial-templates/headers directory** contains header partials
          **main-header.php** contains code for header of website

        **partial-templates/navigations directory** contains navigation partials
          **main-navigation.php** contains code for navigation of website

  * **.gitignore file** contains directories and files that will not be commited/saved to Github.

  * **functions.php file (semi-required to use css and js for theme functionality)** contains functions for WordPress to use **enqueue** the main.css and main.js files. This file is also known as the theme functions file and is a template used by WordPress themes.

  * **index.php file (required file)** is a fallback template required in the root directory of every theme for a theme to be valid. WordPress will use index.php if no other appropriate template is found. The idea of this project is not to rely on the confusing <ins>[hell that is the WordPress template rendering hierarchy](https://wphierarchy.com)</ins>. Rather you should create your own template files in the appropriate template directory to organize your file hierarchy. Hunting for a file is hard enough, so you should never have templates outside of the template directory.

  * **package-lock.json file** automatically created by package.json.

  * **package.json file** contains json for npm packages required for sass and gulp to work.

  * **README.md file** contains useful information about the project.

  * **screenshot.png image** is an image that is displayed for this theme in the dashboard /wp-admin themes section. Learn more about <ins>[screenshot requirements](https://wpism.com/wordpress-theme-screenshot/)</ins>.

  * **styles.css (required file)** contains metadata for information about this theme and is displayed in the dashboard /wp-admin themes section.

# Reference
  * See the <ins>[WordPress Theme Handbook](https://developer.wordpress.org/themes/getting-started/)</ins>
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
