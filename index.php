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

   <p class='standardParagraph'>Please explore the files in the simple-starter-theme directory.
   Make sure that you are either using browsersync or you run $ gulp when you change any sass</p>

  </body>
  <footer>
    <!-- use javascript enqueued in functions.php -->
    <!-- Open the console > stylesheets > main.js -->
    <!-- You will see javascript WordPress also enqueues by default -->
    <?php wp_footer(); ?>
  </footer>
</html>
