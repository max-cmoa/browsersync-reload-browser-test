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

   <p class='standardParagraph'>hi</p>

  </body>
  <footer>
    <!-- use javascript enqueued in functions.php -->
    <!-- Open the console > stylesheets > main.js -->
    <!-- You will see javascript WordPress also enqueues by default -->
    <?php wp_footer(); ?>
  </footer>
</html>
