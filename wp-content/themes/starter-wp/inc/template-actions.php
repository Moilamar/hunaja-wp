<?php
/*-------------------------------------------------------------------------------------------
 * Show the date and author in the header on single posts
------------------------------------------------------------------------------------------*/
function starter_wp_show_posted_on() {

	if ( is_singular() ) {
        if (!empty( get_post_meta( get_the_ID(), '_starter_wp_subtitle', true ) ) ) {
            echo '<p class="subtitle">' . get_post_meta( get_the_ID(), '_starter_wp_subtitle', true ) . '</p>';
        }
        if(function_exists('bcn_display') ){
            echo '<div class="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">';
                   bcn_display();
            echo '</div>';
        }
	}

}
add_action( 'starter_wp_page_header_wrapper_end', 'starter_wp_show_posted_on' );
/*-------------------------------------------------------------------------------------------
 * Show shortcodes before content
------------------------------------------------------------------------------------------*/
function starter_wp_shortcode_before() {
    $shortcode = get_post_meta( get_the_ID(), '_starter_wp_shortcode_before_content', true );
    echo do_shortcode($shortcode);
}

add_action( 'starter_wp_entry_content_start', 'starter_wp_shortcode_before' );
/*-------------------------------------------------------------------------------------------
 * Show shortcodes after content
------------------------------------------------------------------------------------------*/
function starter_wp_shortcode_after() {
    $shortcode = get_post_meta( get_the_ID(), '_starter_wp_shortcode_after_content', true );
    echo do_shortcode($shortcode);
}

add_action( 'starter_wp_entry_content_end', 'starter_wp_shortcode_after' );
/*-------------------------------------------------------------------------------------------
 * Show the featured image on the starter_wp_article_start hook.
 * This allows us to remove the featured image dynamically where needed.
------------------------------------------------------------------------------------------*/
function starter_wp_show_post_thumbnail() {
    echo '<header class="entry-header">';
    
	   starter_wp_post_thumbnail();

    echo '</header>';
}
add_action( 'starter_wp_article_start', 'starter_wp_show_post_thumbnail' );

/*-------------------------------------------------------------------------------------------
 * Show the entry footer info (Categories and tags + edit link).
 *------------------------------------------------------------------------------------------*/
function starter_wp_show_entry_footer() {

	if ( is_singular( 'post' ) ) {
        
        starter_wp_posted_on();
		starter_wp_entry_footer();
	}

}
add_action( 'starter_wp_article_end', 'starter_wp_show_entry_footer' );

/*-------------------------------------------------------------------------------------------
 * Load the biography template after the entry content on a single post.
 *------------------------------------------------------------------------------------------*/
function starter_wp_show_author_box() {

	if ( is_singular( 'post' ) && '' !== get_the_author_meta( 'description' ) ) {
		starter_wp_author_info_box();
	}

}
add_action( 'starter_wp_article_end', 'starter_wp_show_author_box' );
/*-------------------------------------------------------------------------------------------
 * Show related posts
 *------------------------------------------------------------------------------------------*/
function starter_wp_show_related_posts() {

	if ( is_singular( 'post' ) ) {
		starter_wp_related_posts();
	}

}
add_action( 'starter_wp_article_end', 'starter_wp_related_posts' );