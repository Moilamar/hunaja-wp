<?php
/**
 * Custom template tags for this theme
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package Starter_WP
 */

/*---------------------------------------------------------------------------------------
* Prints HTML with meta information for the current post-date/time and author.
* --------------------------------------------------------------------------------------*/
if ( ! function_exists( 'starter_wp_posted_on' ) ) :

	function starter_wp_posted_on( $show_author = true ) {
        
        $post_author_id   = get_post_field( 'post_author', get_the_ID() );
	    $post_author_name = get_the_author_meta( 'display_name', $post_author_id );
        
		// Get the author name; wrap it in a link.
	   $byline = sprintf(
		/* translators: %s: post author */
		__( 'by %s', 'starter-wp' ),
		'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID', $post_author_id ) ) ) . '">' . $post_author_name . '</a></span>'
	);
	// Finally, let's write all of this to the page.
	echo '<div class="entry-meta">';
	echo '<span class="posted-on">' . starter_wp_time_link() . '</span>';
	if ( $show_author ) {
		echo '<span class="byline"> ' . $byline . '</span>';
	}
	echo '</div>';
}
endif;

/*--------------------------------------------------------------------------------------
*  Gets a nicely formatted string for the published date
* --------------------------------------------------------------------------------------*/
if ( ! function_exists( 'starter_wp_time_link' ) ) :

    function starter_wp_time_link() {
        $time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
        if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
            $time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
        }

        $time_string = sprintf( $time_string,
            get_the_date( DATE_W3C ),
            get_the_date(),
            get_the_modified_date( DATE_W3C ),
            get_the_modified_date()
        );

        // Wrap the time string in a link, and preface it with 'Posted on'.
        return sprintf(
            /* translators: %s: post date */
            __( '<span class="screen-reader-text">Posted on</span> %s', 'starter-wp' ),
            '<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a>'
        );
    }
endif;

/*--------------------------------------------------------------------------------------
*  Prints HTML with meta information for the categories, tags and comments.
* --------------------------------------------------------------------------------------*/
if ( ! function_exists( 'starter_wp_entry_footer' ) ) :

    function starter_wp_entry_footer() {

        /* translators: used between list items, there is a space after the comma */
        $separate_meta = __( ', ', 'starter-wp' );

        // Get Categories for posts.
        $categories_list = get_the_category_list( $separate_meta );

        // Get Tags for posts.
        $tags_list = get_the_tag_list( '', $separate_meta );

        // We don't want to output .entry-footer if it will be empty, so make sure its not.
        if ( ( ( starter_wp_categorized_blog() && $categories_list ) || $tags_list ) || get_edit_post_link() ) {

            echo '<footer class="entry-footer">';

                if ( 'post' === get_post_type() ) {
                    if ( ( $categories_list && starter_wp_categorized_blog() ) || $tags_list ) {
                        echo '<span class="cat-tags-links">';

                            // Make sure there's more than one category before displaying.
                            if ( $categories_list && starter_wp_categorized_blog() ) {
                                echo '<span class="cat-links">' . __( 'Categories: ', 'starter-wp' ) . $categories_list . '</span>';
                            }

                            if ( $tags_list ) {
                                echo '<span class="tags-links">' . __( 'Tags: ', 'starter-wp' ) . $tags_list . '</span>';
                            }

                        echo '</span>';
                    }
                }

                starter_wp_edit_link();

            echo '</footer>';
        }
    }
endif;
/*--------------------------------------------------------------------------------------
 *  Returns an accessibility-friendly link to edit a post or page.
 * --------------------------------------------------------------------------------------*/
if ( ! function_exists( 'starter_wp_edit_link' ) ) :
    function starter_wp_edit_link() {

        $link = edit_post_link(
            sprintf(
                /* translators: %s: Name of current post */
                __( 'Edit<span class="screen-reader-text"> "%s"</span>', 'starter-wp' ),
                get_the_title()
            ),
            '<span class="edit-link">',
            '</span>'
        );

        return $link;
    }
endif;

/*--------------------------------------------------------------------------------------
 * Determine whether blog/site has more than one category.
 *
 * @return bool True if there is more than one category, false otherwise.
 * --------------------------------------------------------------------------------------*/
if ( ! function_exists( 'starter_wp_categorized_blog' ) ) :
function starter_wp_categorized_blog() {

	if ( false === ( $all_cats = get_transient( 'starter_wp_categories' ) ) ) {

		// Create an array of all the categories that are attached to posts.
		$all_cats = get_categories( array(
			'fields'     => 'ids',

			// We only need to know if there is more than one category.
			'number'     => 2,
		) );

		// Count the number of categories that are attached to the posts.
		$all_cats  = count( $all_cats   );

		set_transient( 'starter_wp_categories', $all_cats  );

	}

	if ( $all_cats  > 1 ) {
		// This blog has more than 1 category so starter_wp_categorized_blog should return true.
		return true;
	} else {
		// This blog has only 1 category so starter_wp_categorized_blog should return false.
		return false;
	}

}
endif;
/*----------------------------------------------------------------------------------------
 * Display navigation to next/previous comments when applicable.
 * --------------------------------------------------------------------------------------*/
if ( ! function_exists( 'starter_wp_comment_nav' ) ) :
    function starter_wp_comment_nav() {
        // Are there comments to navigate through?
        if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) :
        ?>
        <nav class="navigation comment-navigation" role="navigation">
            <h2 class="screen-reader-text"><?php esc_html_e( 'Comment navigation', 'starter-wp' ); ?></h2>
            <div class="nav-links">
                <?php
                    if ( $prev_link = get_previous_comments_link( esc_html__( 'Older Comments', 'starter-wp' ) ) ) {
                        printf( '<div class="nav-previous">%s</div>', $prev_link );
                    }

                    if ( $next_link = get_next_comments_link( esc_html__( 'Newer Comments', 'starter-wp' ) ) ) {
                        printf( '<div class="nav-next">%s</div>', $next_link );
                    }
                ?>
            </div>
        </nav>
        <?php
        endif;
    }
endif;
/*----------------------------------------------------------------------------------------
 * Display navigation to next/previous set of posts when applicable.
 * --------------------------------------------------------------------------------------*/
if ( ! function_exists( 'starter_wp_paging_nav' ) ) :
    function starter_wp_paging_nav() {

        if ( $GLOBALS['wp_query']->max_num_pages < 2 ) {
            return;
        }
        $defaults = apply_filters( 'starter_wp_paging_nav',
            array(
                'next_posts_link'     => __( 'Older posts', 'starter-wp' ),
                'previous_posts_link' => __( 'Newer posts', 'starter-wp'  ),
            )
        );
        ?>
        <nav class="navigation paging-navigation" role="navigation">

            <h1 class="screen-reader-text"><?php _e( 'Posts navigation', 'starter-wp' ); ?></h1>

            <div class="nav-links">
                <?php if ( get_next_posts_link() ) : ?>
                <div class="nav-previous"><?php next_posts_link( $defaults['next_posts_link'] ); ?></div>
                <?php endif; ?>

                <?php if ( get_previous_posts_link() ) : ?>
                <div class="nav-next"><?php previous_posts_link( $defaults['previous_posts_link'] ); ?></div>
                <?php endif; ?>

            </div>
        </nav>
        <?php
    }
endif;