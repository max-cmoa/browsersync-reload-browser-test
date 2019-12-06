<?php
/*
  Template Name: zebra-post
  Template Post Type: post

  This is a Custom Post Type.
  DO NOT PREFIX THE FILENAME USING post-
  The above comment about template name is what is shown in
  /wp-admin > dashboard > Posts > Post Attributes >
  Template > select zebra from drop down.
*/

  get_template_part('../partial-templates/headers/main-header');

 ?>

 <?php if( have_posts() ) : ?>
   <?php while (have_posts() ) : ?>
     <?php the_post(); ?>
     <h1 class='standardParagraph'><?php the_content(); ?></h1>
   <?php endwhile; else : ?>
     <?php echo('No page content to display'); ?>
   <?php endif; ?>

<?php
     get_template_part('../partial-templates/footers/main-footer');
?>
