<html>

 <head>
  <?php wp_head(); ?>

     <link rel="stylesheet" type="text/css" href="/production/assets/sass/main.css">
 </head>

<?php
/*
  This file should be the only php fallback template for the simple-starter-theme.
  Relying on the WordPress template hierarchy can be a mess to trace.
*/
?>

<p class='standardParagraph'>hi</p>

<?php echo (get_template_directory_uri() . '/production/assets/sass/main.css' ); ?>

</html>
