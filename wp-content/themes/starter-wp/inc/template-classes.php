<?php
/**
 * Add custom body classes.
 *
 * @since 1.0.0
 */
function starter_wp_body_classes( $classes ) {
    // Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	if (
		! is_active_sidebar( 'sidebar-1' ) ||
		! apply_filters( 'starter_wp_show_sidebar', true ) ||
		is_page_template( 'page-templates/page-full-width.php' ) ||
        is_search() || is_404() ||
        get_theme_mod('main_layout','right')=='full' &&  ( in_array( 'blog', $classes  ) ||	in_array( 'archive', $classes  ) ) ||
        get_theme_mod('search_layout','right')=='full' && (	in_array( 'search',$classes ) ) ||
        get_theme_mod('post_layout','right')=='full' && in_array( 'single', $classes ) 
	) {
		$classes[] = 'no-sidebar';
	}

	return $classes;

}
add_filter( 'body_class', 'starter_wp_body_classes' );
/**
 * Starter WP page header div classes
 *
 * @param array $more_classes Any more classes that need to be added.
 *
 */
function starter_wp_page_header_classes( $more_classes = array() ) {

	// Set up the default classes.
	$classes = array();

	$classes[] = 'col-container';
	$classes[] = 'text-center';

	// Merge any new classes passed in.
	if ( is_array( $more_classes ) ) {
		$classes = array_merge( $classes, $more_classes );
	}

	// Make the classes filterable.
	$classes = apply_filters( 'starter_wp_page_header_classes', $classes );

	// Return the classes in a string.
	if ( ! empty( $classes ) ) {
		return ' ' . implode( ' ', $classes );
	}

}
/**
 * Controls the CSS classes applied to header
 */
function starter_wp_header_classes() {

	$classes = array();
    $classes[] = 'site-header';
    if (has_header_video() && is_home() || has_header_video() && is_front_page() || has_header_image() && is_home() || has_header_image() && is_front_page() ) {
        $classes[] = 'has-media';
        $classes[] = esc_attr(get_theme_mod('header_image_color_scheme','light'));
    }

	// allow filtering of the header classes
	$classes = apply_filters( 'starter_wp_header_classes', $classes );

	if ( $classes ) {
		return ' ' . implode( ' ', $classes );
	}

	return implode( ' ', $classes );
}
/**
 * Controls the CSS classes applied to the main wrappers
 * Useful for overriding the wrapper widths etc
 */
function starter_wp_wrapper_classes() {

	$classes = array();
    $classes[] = 'col-container content-wrap';
    //archive
    if ( get_theme_mod('main_layout','right')=='left' && 
       (
			in_array( 'blog', get_body_class() ) ||
			in_array( 'archive', get_body_class() ) 
		) ) {
        
        $classes[] = 'sidebar-left';
    }
    //single
    if ( get_theme_mod('post_layout','right')=='left' && 
       (
			in_array( 'single', get_body_class() ) 
		) ) {
        
        $classes[] = 'sidebar-left';
    }
    //page
    if (in_array('page-template-page-left-sidebar', get_body_class() ) ) {
        $classes[] = 'sidebar-left';
    }
    //search
    if ( get_theme_mod('search_layout','right')=='left' && 
       (
			in_array( 'search', get_body_class() ) 
		) ) {
        
        $classes[] = 'sidebar-left';
    }
	// allow filtering of the wrapper classes
	$classes = apply_filters( 'starter_wp_wrapper_classes', $classes );

	if ( $classes ) {
		return ' ' . implode( ' ', $classes );
	}

	return implode( ' ', $classes );
}

/**
 * Starter WP primary div classes
 */
function starter_wp_primary_classes() {

	$classes = array();

	if (
		is_active_sidebar( 'sidebar-1' ) &&
		! (
			in_array( 'no-sidebar', get_body_class() ) ||
			in_array( 'slim', get_body_class() ) 
		) 
	) {
		$classes[] = 'col-two-third';
	}

	$classes = apply_filters( 'starter_wp_primary_classes', $classes );

	if ( $classes ) {
		return ' ' . implode( ' ', $classes );
	}

}

/**
 * Starter WP secondary div classes
 */
function starter_wp_secondary_classes() {

	$classes   = array();
	$classes[] = 'col-one-third';
    $classes[] = 'widget-area';

	$classes = apply_filters( 'starter_wp_secondary_classes', $classes );

	if ( $classes ) {
		return implode( ' ', $classes );
	}
}
