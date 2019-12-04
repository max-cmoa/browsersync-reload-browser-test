<?php

// enqueue our main.css file
function enqueue_css() {

    wp_enqueue_style( 'main-css', get_stylesheet_uri() . '/production/assets/sass/main.css', time(), 'all' );

}

add_action('wp_enqueue_scripts', 'enqueue_css');
