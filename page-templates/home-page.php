<?php
/*
    Template Name: home-page

    This is a custom page type that one should select to use for
    their page in the WordPress dashboard when creating a page
*/
  get_template_part('partial-templates/headers/main-header');

  if( have_posts() ) {

    while( have_posts() ) {
      the_post();
      the_content();
    }

  } else {
    echo ('No page content to display');
  }

  get_template_part('partial-templates/footers/main-footer');

?>
