<?php
/**
 * Starter WP functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Starter_WP
 */
/*-----------------------------------------
 * Constants
-----------------------------------------*/
if ( ! defined( 'STARTER_WP_VERSION' ) ) {
	define( 'STARTER_WP_VERSION', '1.11' );
}

if ( ! defined( 'STARTER_WP_AUTHOR' ) ) {
	define( 'STARTER_WP_AUTHOR', 'iografica' );
}

if ( ! defined( 'STARTER_WP_NAME' ) ) {
	define( 'STARTER_WP_NAME', 'Starter WP' );
}

if ( ! defined( 'STARTER_WP_INCLUDES_DIR' ) ) {
	define( 'STARTER_WP_INCLUDES_DIR', trailingslashit( get_template_directory() ) . 'inc' );
}

if ( ! defined( 'STARTER_WP_THEME_URL' ) ) {
	define( 'starter_wp_THEME_URL', trailingslashit( get_template_directory_uri() ) );
}

/*-----------------------------------------
 * Includes
-----------------------------------------*/
require_once( trailingslashit( STARTER_WP_INCLUDES_DIR ) . 'template-setup.php' );
require_once( trailingslashit( STARTER_WP_INCLUDES_DIR ) . 'template-scripts.php' );
require_once( trailingslashit( STARTER_WP_INCLUDES_DIR ) . 'template-widgets.php' );
require_once( trailingslashit( STARTER_WP_INCLUDES_DIR ) . 'template-tags.php' );
require_once( trailingslashit( STARTER_WP_INCLUDES_DIR ) . 'template-functions.php' );
require_once( trailingslashit( STARTER_WP_INCLUDES_DIR ) . 'template-actions.php' );
require_once( trailingslashit( STARTER_WP_INCLUDES_DIR ) . 'template-classes.php' );

require_once( trailingslashit( STARTER_WP_INCLUDES_DIR ) . 'actions/header.php' );
require_once( trailingslashit( STARTER_WP_INCLUDES_DIR ) . 'actions/footer.php' );
require_once( trailingslashit( STARTER_WP_INCLUDES_DIR ) . 'actions/social.php' );

require_once( trailingslashit( STARTER_WP_INCLUDES_DIR ) . 'tgm/tgm-plugins.php');
require_once( trailingslashit( STARTER_WP_INCLUDES_DIR ) . 'metaboxes/metaboxes.php');
require_once( trailingslashit( STARTER_WP_INCLUDES_DIR ) . 'customizer/kirki-fallback.php');
require_once( trailingslashit( STARTER_WP_INCLUDES_DIR ) . 'customizer/customizer.php');
require_once( trailingslashit( STARTER_WP_INCLUDES_DIR ) . 'welcome/welcome-screen.php');

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require_once( trailingslashit( STARTER_WP_INCLUDES_DIR ) . 'plugins/jetpack.php');
}

/**
 * Load WooCommerce compatibility file.
 */
if ( class_exists( 'WooCommerce' ) ) {
    require_once( trailingslashit( STARTER_WP_INCLUDES_DIR ) . 'plugins/woocommerce.php');
}

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function starter_wp_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'starter_wp_content_width', 1440 );
}
add_action( 'after_setup_theme', 'starter_wp_content_width', 0 );

