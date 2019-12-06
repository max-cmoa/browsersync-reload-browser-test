<!DOCTYPE html>
<html>
 <!-- This should be the only fallback template -->
 <head>
   <meta charset="utf-8">
   <title>simple-starter-theme</title>

  <!-- use css enqueued in functions.php in the header -->
  <!-- Open the console > stylesheets > main.css -->
  <!-- You will see css WordPress also enqueues by default -->
  <?php wp_head(); ?>

 </head>
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
