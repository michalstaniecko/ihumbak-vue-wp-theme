<?php
// Remove all default WP template redirects/lookups
remove_action( 'template_redirect', 'redirect_canonical' );
// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown
function remove_redirects() {
  add_rewrite_rule( '^/(.+)/?', 'index.php', 'top' );
}
add_action( 'init', 'remove_redirects' );
add_action('wp_enqueue_scripts', 'assets');
function assets() {
  wp_enqueue_script('main', get_stylesheet_directory_uri().'/dist/main.js', null, false, true);
}

add_action('init', 'vue_theme_support');
function vue_theme_support() {
  add_theme_support( 'post-thumbnails' );
}
