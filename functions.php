<?php

// Add Theme Support
add_theme_support( 'title-tag' );
add_theme_support( 'post-thumbnails', [ 'post', 'page' ] );

// enqueue our main.css file, has to be in the header
function enqueue_css() {

    wp_enqueue_style( 'main', get_template_directory_uri() . '/production/assets/sass/main.css', [], time(), 'all' );
    //wp_enqueue_style( 'main', get_template_directory_uri() . '/production/assets/sass/main.css');
}

// hook to connect wp execution process to our function
add_action('wp_enqueue_scripts', 'enqueue_css');

// enqueue our main.js file
function enqueue_javascript() {

  wp_enqueue_script('main', get_template_directory_uri() . '/production/assets/javascript/output');

}

// hook to connect wp execution process to our function
add_action('wp_enqueue_scripts', 'enqueue_javascript');
