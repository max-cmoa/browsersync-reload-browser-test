<?php

// Add Theme Support
add_theme_support( 'title-tag' );
add_theme_support( 'post-thumbnails', [ 'post', 'page' ] );

// enqueue our main.css file, has to be in the header
function enqueue_css() {

      // main represents main.css, next arg is path to main.css, followed by empty array, time() so no cache issues, and all for all media
    wp_enqueue_style( 'main', get_template_directory_uri() . '/production/assets/sass/main.css', [], time(), 'all' );

}

// hook to connect wp execution process to our function
add_action('wp_enqueue_scripts', 'enqueue_css');

// enqueue our main.js file
function enqueue_javascript() {

  // main represents main.js, next arg is path to main.js, followed by empty array, time() so no cache issues, and true so javascript is in the footer
  wp_enqueue_script('main', get_template_directory_uri() . '/production/assets/javascript/main.js', [], time(), true);

}

// hook to connect wp execution process to our function
add_action('wp_enqueue_scripts', 'enqueue_javascript');
