<?php
/*
   the template for displaying comments
*/
 ?>

<!-- comment listing -->
<?php if ( have_comments() ) : ?>
  <h2>Comments title</h2>
  <ol>
    <?php
      wp_list_comments( [
        'style'       => 'ol',
        'short_ping'  => true,
        'avatar_size' => 74,
      ]);
    ?>
  </ol>

<!-- if comments arent opened, tell the user -->
<?php if ( ! comments_open() && get_comments_number() ) : ?>
 <p>comments are closed</p>
<?php endif; ?>

<?php endif; // have_comments() ?>

<?php comment_form('../comment-templates/home-comments.php'); ?>
