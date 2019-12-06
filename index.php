<?php get_template_part('templates/partials/headers/main-header'); ?>
  <body>

   <h1 class='standardHeadingOne'>Welcome to the simple-starter-theme</h1>

   <p class='standardParagraph'>Using index.php fallback template.
   You should not use index.php, you should use the appropriate template
 file for a given post or page.</p>

  </body>
  <footer>
    <!-- use javascript enqueued in functions.php -->
    <!-- Open the console > stylesheets > main.js -->
    <!-- You will see javascript WordPress also enqueues by default -->
    <?php wp_footer(); ?>
  </footer>
</html>
